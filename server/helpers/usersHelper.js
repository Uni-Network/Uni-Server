const User = require('../models').user;


export const getAllUsers = (req, res) => {
    // Return all users without password Attribute
    try {
        return User.findAll({attributes: {exclude:['password']}});
    } catch(error) {
        throw(error)
    }
}