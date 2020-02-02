import { getAllGendersFromDB } from '../helpers/gendersHelper';
import { responseError } from '../utils/errorsManager/error-responses';


export async function getAllGenders(req, res) {
  try {
    res.json(await getAllGendersFromDB());
  } catch (e) {
    responseError(e, res);
  }
}
