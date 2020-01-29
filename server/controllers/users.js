
import {getAllUsers} from '../helpers/usersHelper';
import { responseError } from '../utils/errorsManager/error-responses';

module.exports = {
  

  async getAllUsers(req, res) {
    try {
        var user = await getAllUsers();
        res.json(user);
    } catch (e) {
        responseError(e, res);
    }
  }
};
