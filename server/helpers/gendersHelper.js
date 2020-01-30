import { gender as Gender } from '../models';

export const getAllGenders = () => {
    // Return all Genders
  try {
    return Gender.findAll();
  } catch (error) {
    throw (error);
  }
};
