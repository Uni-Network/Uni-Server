import {group as Group} from '../models';
var Sequelize = require('sequelize');

export const getAllGroupsFromDB = async () => {
    // Return all countries
    try {
        return Group.findAll();
    } catch (error) {
        throw(error)
    }
}
export const getGroupsByNameFromDB = async (name) => {
    // Return all countries that match the specific name
    try {
        return Group.findAll({
            where: {
                group_name: {
                    [Sequelize.Op.iLike]: '%' + name + '%'
                }
            }
    });
    } catch (error) {
        throw(error)
    }
}
