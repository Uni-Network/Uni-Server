import xlsx from 'xlsx';
import db,{ theuser as User } from '../models';
import { handleError } from '../utils/sharedMethodes';




export async function registerUserInDB(file) {
    try {
        console.log("inside registerUserInDB function");
        var wb=xlsx.readFile(file);
        var ws =wb.Sheets["Feuil1"];
        //console.log("wb",wb);
        console.log("ws",ws);
        var data = xlsx.utils.sheet_to_json(ws);
        console.log("data",data);
        data.map(async function(record){
            return await User.create({ fistname: record.fistname, lastname: record.lastname, email: record.email, password:"azerty", is_active:"false"});
        })}catch(e){
             handleError(e);
            }
  }




 