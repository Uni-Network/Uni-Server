import { responseError } from '../utils/errorsManager/error-responses';
import { changeUserPassword } from '../helpers/activateAccountHelper';


export async function changepassword(req, res) {
    const email = req.body.email;
    try {
      res.json(await changeUserPassword(email));
    } catch (e) {
      responseError(e, res);
    }
  }

  