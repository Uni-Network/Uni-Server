
import {getAllCitiesFromDB,getCitiesByNameFromDB} from '../helpers/citiesHelper';
import { responseError } from '../utils/errorsManager/error-responses';



export const getAllCities = async (req, res) => {
    try {
        res.json(await getAllCitiesFromDB());
    } catch (e) {
        responseError(e, res);
    }
}

export const getCitiesByName = async (req, res) => {
    let name = req.query.name;
    try {
        var country = await getCitiesByNameFromDB(name);
        res.json(country);
    } catch (e) {
        responseError(e, res);
    }
}

