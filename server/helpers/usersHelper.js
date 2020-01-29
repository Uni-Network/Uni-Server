const User = require('../models').user;
import errorTypes from '../utils/errorsManager/errorTypes'


export const getAllUsers = async (req, res) => {
    // Return all users without password Attribute
    try {
        return await User.findAll({attributes: {exclude:['password']}});
    } catch(error) {
        throw(error)
    }
}
export const getUserById = async (userId) => {
    try {
        let user = await User.findById(userId);
        if(user !== null){
            return user;
        }
        throw(errorTypes.NOTFOUND)
    } catch(error) {
        throw(error)
    }
}