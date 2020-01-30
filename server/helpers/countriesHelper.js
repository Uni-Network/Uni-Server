import {country as Country} from '../models';
var Sequelize = require('sequelize');

export const getAllCountriesFromDB = async () => {
    // Return all countries
    try {
        return Country.findAll();
    } catch (error) {
        throw(error)
    }
}
export const getCountryByNameFromDB = async (name) => {
    // Return all countries that match the specific name
    try {
        return Country.findAll({
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
