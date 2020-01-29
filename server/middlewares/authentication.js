var jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
module.exports = (req,res,next) => {
  var token = req.headers['authorization'];
  
  console.log(token)
  // decode token
  if (token) {
    if(token.startsWith("Bearer ")){
        token = token.replace('Bearer ', '');
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
                return res.status(403).send({
                    "error": true,
                    "message": 'Failed to authenticate token'
                });
            }
          req.decoded = decoded;
          next();
        });
      }
      else {
        return res.status(403).send({
            "error": true,
            "message": 'Failed to authenticate token'
        });
      }
    // verifies secret and checks exp
    
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        "error": true,
        "message": 'No token provided.'
    });
  }
}