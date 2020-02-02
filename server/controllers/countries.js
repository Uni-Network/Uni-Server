
import { getAllCountriesFromDB, getCountryByNameFromDB } from '../helpers/countriesHelper';
import { responseError } from '../utils/errorsManager/error-responses';


export async function getAllCountries(req, res) {
  try {
    res.json(await getAllCountriesFromDB());
  } catch (e) {
    responseError(e, res);
  }
}

export async function getCountryByName(req, res) {
  try {
    res.json(await getCountryByNameFromDB(req.query.name));
  } catch (e) {
    responseError(e, res);
  }
}
