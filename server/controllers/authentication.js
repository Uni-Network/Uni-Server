import { theuser as User } from '../models';
import jwt from 'jsonwebtoken';
import eConst from '../utils/errorsManager/errorTypes';
import { responseError } from '../utils/errorsManager/error-responses'; // Error Constants
const env = process.env.NODE_ENV || 'development';
const { secret, token_expiration } = require(`${__dirname}/../config/config.json`)[env];

function cleanedUser(user) {
  delete user.password;
  delete user.thumbnail_link;
  delete user.fullsize_link;
  return user;
}

export async function userLogin(req, res) {
  // perform user login
  try {
    const response = await User.findOne({ where: { email: req.body.email } });
    if (!response) {
      responseError(eConst.USER_NOTFOUND, res);
    } else if (response.password !== req.body.password) {
      responseError(eConst.PASSWORD_MISMATCH, res);
    } else {
      const user = cleanedUser(response.toJSON());
      const token = jwt.sign(user, secret, {
        expiresIn: token_expiration,
      });

      res.json({
        error: false,
        message: 'Validation successful!',
        token,
      });
    }
  } catch (e) {
    responseError(e, res);
  }
}
