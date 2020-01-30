
import {getAllUsersFromDB,getUserByIdFromDB} from '../helpers/usersHelper';
import { responseError } from '../utils/errorsManager/error-responses';

  

export const getAllUsers = async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
try {
    res.json(await getAllUsersFromDB(page,limit));
} catch (e) {
    responseError(e, res);
}
}

export const getUserById = async (req, res) => {
let id = req.params.id;
try {
    res.json(await getUserByIdFromDB(id));
} catch (e) {
    responseError(e, res);
}
}

