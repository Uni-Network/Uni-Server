import { like_type as likeType } from '../models';
import Sequelize from 'sequelize';

export async function getAllCitiesFromDB() {
    // Return all countries
  try {
    return likeType.findAll();
  } catch (error) {
    throw (error);
  }
}