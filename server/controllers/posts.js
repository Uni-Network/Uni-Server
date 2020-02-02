import { getAllGroupsFromDB, getGroupsByNameFromDB } from '../helpers/groupsHelper';
import { responseError } from '../utils/errorsManager/error-responses';
import { createPostInDB } from '../helpers/postsHelper';


export async function createPost(req, res) {
  const userId = req.user.user_id;
  const groupId = req.body.group_id;
  try {
    res.json(await createPostInDB(userId, groupId, req.body.post));
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

