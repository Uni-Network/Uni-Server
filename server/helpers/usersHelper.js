import { paginate } from '../utils/sharedMethodes';
import {user as User} from '../models';
import errorTypes from '../utils/errorsManager/errorTypes'
import { userInGroup } from './groupsHelper';


export async function getAllUsersFromDB(page, limit) {
    // Return all users without password Attribute
    console.log('Hello World');
    console.log(await userInGroup(5, 3));
    try {
        return await User.findAndCountAll({ attributes: { exclude: ['password'] }, ...paginate(page, limit) });
    } catch (error) {
        throw(error);
    }
}

export async function getUserByIdFromDB(userId) {
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
