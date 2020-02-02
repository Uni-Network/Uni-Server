import eConst from './errorTypes'; // Error Constants
import Boom from 'boom';


export function responseError(errorType, res) {
  let errResponse;
  const { FORBIDDEN,
    NOTFOUND,
    UNAUTHORIZED,
    USER_NOTFOUND,
    PASSWORD_MISMATCH,
    INVALID_TOKEN,
    NO_TOKEN
  } = eConst;
  switch (errorType) {
    case FORBIDDEN:
      res.statusCode = 403;
      errResponse = Boom.forbidden(errorType);
      break;
    case USER_NOTFOUND:
      res.statusCode = 401;
      errResponse = Boom.unauthorized('User not found');
      break;
    case PASSWORD_MISMATCH:
      res.statusCode = 401;
      errResponse = Boom.unauthorized('Password mismatch');
      break;
    case UNAUTHORIZED:
      res.statusCode = 401;
      errResponse = Boom.unauthorized(errorType);
      break;
    case INVALID_TOKEN:
      res.statusCode = 401;
      errResponse = Boom.unauthorized('Failed to authenticate token');
      break;
    case NO_TOKEN:
      res.statusCode = 401;
      errResponse = Boom.unauthorized('No token provided.');
      break;
    case NOTFOUND:
      res.statusCode = 404;
      errResponse = Boom.notFound(errorType);
      break;
    default:
      res.statusCode = 500;
      errResponse = Boom.serverUnavailable(errorType);
  }
  res.json(errResponse.output);
}
