import {gender as Gender} from '../models';

export const getAllGenders = (req, res) => {
    // Return all Genders
    try {
        return Gender.findAll();
    } catch (error) {
        throw(error)
    }
}
