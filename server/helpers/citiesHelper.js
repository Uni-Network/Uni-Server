import {city as City} from '../models';
var Sequelize = require('sequelize');

export const getAllCitiesFromDB = async () => {
    // Return all countries
    try {
        return await City.findAll();
    } catch (error) {
        throw(error)
    }
}
export const getCitiesByNameFromDB = async (name) => {
    // Return all countries that match the specific name
    try {
        return City.findAll({
            where: {
                name: {
                    [Sequelize.Op.iLike]: '%' + name + '%'
                }
            }
    });
    } catch (error) {
        throw(error)
    }
}
