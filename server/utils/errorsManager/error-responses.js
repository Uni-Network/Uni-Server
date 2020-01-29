import eConst from "./errorTypes"; // Error Constants
import Boom from "boom";
export var responseError = (errorType, res) => {
    let errResponse;
    switch (errorType) {
        case eConst.FORBIDDEN:
            res.statusCode = 403;
            errResponse = Boom.unauthorized(errorType);
            break;
        case eConst.UNAUTHORIZED:
            res.statusCode = 401;
            errResponse = Boom.unauthorized(errorType);
            break;
        case eConst.NOTFOUND:
            res.statusCode = 404;
            errResponse = Boom.notFound(errorType);
            break;
        default:
            res.statusCode = 500;
            errResponse = Boom.serverUnavailable(errorType);
    }
    res.json(errResponse.output);
};
