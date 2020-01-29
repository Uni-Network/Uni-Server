
import {getAllUsers,getUserById} from '../helpers/usersHelper';
import { responseError } from '../utils/errorsManager/error-responses';

module.exports = {
  

  async getAllUsers(req, res) {
    try {
        var users = await getAllUsers();
        res.json(users);
    } catch (e) {
        responseError(e, res);
    }
  },

  async getUserById(req, res) {
    let id = req.params.id;
    try {
        var user = await getUserById(req.params.id);
        res.json(user);
    } catch (e) {
        responseError(e, res);
    }
  }
};
