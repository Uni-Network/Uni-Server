
import { getAllCitiesFromDB, getCitiesByNameFromDB } from '../helpers/citiesHelper';
import { responseError } from '../utils/errorsManager/error-responses';


export async function getAllCities(req, res) {
  try {
    res.json(await getAllCitiesFromDB());
  } catch (e) {
    responseError(e, res);
  }
}

export async function getCitiesByName(req, res) {
  try {
    res.json(await getCitiesByNameFromDB(req.query.name));
  } catch (e) {
    responseError(e, res);
  }
}

