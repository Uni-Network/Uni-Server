import { city as City } from '../models';
import Sequelize from 'sequelize';

export async function getAllCitiesFromDB() {
    // Return all countries
  try {
    return City.findAll();
  } catch (error) {
    throw (error);
  }
}
export async function getCitiesByNameFromDB(name) {
    // Return all countries that match the specific name
  try {
    return await City.findAll({
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
