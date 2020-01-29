const User = require('../models').user;
var jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];

module.exports = {
  userLogin(req, res) {
    //perform user login
    
    return User.findOne({ where: { email: req.body.email } }).then(
        (response,error) => {
          if(error) {
            return res.json({"error" : true,"message" : error});
          }
          if(!response) {
            return res.json({"error" : true,"message" : "User not found"});
          }
          if(response.password !== req.body.password) {
            return res.json({"error" : true,"message" : "Password mismatch"});
          }
          var token = jwt.sign(response.toJSON(), config.secret, {
              expiresIn: 1440 // expires in 1 hours
          });
      
          res.json({
              error: false,
              message: 'Validation successful!',
              token: token
          });
        }
    );

  }
};
