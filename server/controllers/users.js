import { getAllUsersFromDB, getUserByIdFromDB } from '../helpers/usersHelper';
import { responseError } from '../utils/errorsManager/error-responses';
import { getUserPostsVisibleFromDB } from '../helpers/postsHelper';
import {registerUserInDB} from '../helpers/registrationHelper';

export async function getAllUsers(req, res) {
  const page = req.query.page;
  const limit = req.query.limit;
  try {
    res.json(await getAllUsersFromDB(page, limit));
  } catch (e) {
    responseError(e, res);
  }
}

export async function getUserById(req, res) {
  try {
    res.json(await getUserByIdFromDB(req.params.id));
  } catch (e) {
    responseError(e, res);
  }
}
export async function getCurrentUserVisiblePosts(req, res) {
  const { user_id } = req.user;
  const { page, limit } = req.query;
  const offset = limit * (page - 1);
  try {
    res.json(await getUserPostsVisibleFromDB(user_id, { page, limit, offset }));
  } catch (e) {
    responseError(e, res);
  }
}

export async function registerUser(req, res) {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  try {
    res.json(await registerUserInDB(req.body.file));
    
  } catch (e) {
    responseError(e, res);
  }
}