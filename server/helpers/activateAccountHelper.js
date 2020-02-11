import randomString from '../utils/sharedMethodes';
import {theuser as User} from '../models';
import sendmail from './mailHelper'


export async function changeUserPassword(myemail){
    var newpassword = randomString(7);
    var mail = {
        from: 'khadim.safaa@gmail.com',
        to: myemail,
        subject: 'uniworld new password',
        text: 'hello, here is your new password : '+ newpassword,
        html: '<b>Hello world</b>'
      };
     await User.update({ password: newpassword }, { where: {
        email: myemail,
      } });
     await sendmail(mail); 

}

