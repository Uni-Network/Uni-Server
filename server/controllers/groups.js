
import { getAllGroupsFromDB, getGroupsByNameFromDB } from '../helpers/groupsHelper';
import { responseError } from '../utils/errorsManager/error-responses';


export async function getAllGroups(req, res) {
  try {
    res.json(await getAllGroupsFromDB());
  } catch (e) {
    responseError(e, res);
  }
}

export async function getGroupsByName(req, res) {
  try {
    res.json(await getGroupsByNameFromDB(req.query.name));
  } catch (e) {
    responseError(e, res);
  }
}

