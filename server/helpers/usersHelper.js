const User = require('../models').user;
import errorTypes from '../utils/errorsManager/errorTypes'

const paginate = ( page, limit ) => {
    limit = (limit)?limit:10;
    page = (page)?page:0;
    const offset = page * limit;
  
    return {
      offset,
      limit,
    };
};
export const getAllUsersFromDB = async (page, limit) => {
    // Return all users without password Attribute
    try {
        return await User.findAndCountAll({attributes: {exclude:['password']},...paginate(page, limit)});
    } catch(error) {
        throw(error)
    }
}
export const getUserByIdFromDB = async (userId) => {
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