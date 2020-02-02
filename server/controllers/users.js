import { getAllUsersFromDB, getUserByIdFromDB } from '../helpers/usersHelper';
import { responseError } from '../utils/errorsManager/error-responses';

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
