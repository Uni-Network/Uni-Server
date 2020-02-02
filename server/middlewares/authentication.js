import { responseError } from '../utils/errorsManager/error-responses';
import eConst from '../utils/errorsManager/errorTypes'; // Error Constants
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
export default function (req, res, next) {
  let token = req.headers.authorization;
  // decode token
  try {
    if (token) {
      if (token.startsWith('Bearer ')) {
        token = token.replace('Bearer ', '');
        jwt.verify(token, config.secret, (err, user) => {
          if (err) {
            responseError(eConst.INVALID_TOKEN, res);
          } else {
            req.user = user;
            next();
          }
        });
      } else {
        responseError(eConst.INVALID_TOKEN, res);
      }
    } else {
      responseError(eConst.NO_TOKEN, res);
    }
  } catch (e) {
    responseError(e);
  }
}
