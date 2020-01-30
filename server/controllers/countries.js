
import {getAllCountriesFromDB,getCountryByNameFromDB} from '../helpers/countriesHelper';
import { responseError } from '../utils/errorsManager/error-responses';



export const getAllCountries = async (req, res) => {
    try {
        res.json(await getAllCountriesFromDB());
    } catch (e) {
        responseError(e, res);
    }
}

export const getCountryByName = async (req, res) => {
    let name = req.query.name;
    try {
        var country = await getCountryByNameFromDB(name);
        res.json(country);
    } catch (e) {
        responseError(e, res);
    }
}

