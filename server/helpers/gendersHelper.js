import { gender as Gender } from '../models';

export async function getAllGendersFromDB() {
  // Return all Genders
  try {
    return await Gender.findAll();
  } catch (error) {
    throw (error);
  }
}
