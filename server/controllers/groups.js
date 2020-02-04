
import { getAllGroupsFromDB, getGroupsByNameFromDB } from '../helpers/groupsHelper';
import { getGroupPostsFromDB } from '../helpers/postsHelper';

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

export async function getGroupPosts(req, res) {
  try {
    res.json(await getGroupPostsFromDB(req.user.user_id, req.params.groupId));
  } catch (e) {
    responseError(e, res);
  }
}
