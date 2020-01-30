
import {getAllGroupsFromDB,getGroupsByNameFromDB} from '../helpers/groupsHelper';
import { responseError } from '../utils/errorsManager/error-responses';



export const getAllGroups = async (req, res) => {
    try {
        res.json(await getAllGroupsFromDB());
    } catch (e) {
        responseError(e, res);
    }
}

export const getGroupsByName = async (req, res) => {
    let name = req.query.name;
    try {
        res.json(await getGroupsByNameFromDB(name));
    } catch (e) {
        responseError(e, res);
    }
}

