import xlsx from 'xlsx';
import db,{ theuser as User } from '../models';
import { handleError } from '../utils/sharedMethodes';



export async function registerUserInDB(file) {
    try {
        var wb=xlsx.readFile(file);
        var ws =wb.Sheets[0];
        var data = xlsx.utils.sheet_to_json(ws);
        data.map(async function(record){
            return await User.create({ fistname: record.fistname, lastname: record.lastname, email: record.email});
        })}catch(e){
             handleError(e);
            }
  }