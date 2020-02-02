import { gender as Gender } from '../models';

export async function getAllGendersFromDB() {
  // Return all Genders
  try {
    return Gender.findAll();
  } catch (error) {
    throw (error);
  }
}
