import { country as Country } from '../models';
const Sequelize = require('sequelize');

export async function getAllCountriesFromDB() {
    // Return all countries
  try {
    return Country.findAll();
  } catch (error) {
    throw (error);
  }
}
export async function getCountryByNameFromDB(name) {
    // Return all countries that match the specific name
  try {
    return await Country.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`,
        },
      },
    });
  } catch (error) {
    throw (error);
  }
}
