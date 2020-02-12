import {randomString } from '../utils/sharedMethodes';
import {theuser as User} from '../models';
import {sendmail } from './mailHelper'


export async function changeUserPassword(myemail){
    var newpassword = randomString(7);
    var mailOptions = {
      from: '"Uniworld team" <khadim.safaa@gmail.com', // sender address
      to: myemail,
      subject: 'uniworld new password',
      text: 'hello, here is your new password : '+ newpassword,
      html: '<b>Hello ,here is your new password : ' +newpassword+ '</b>'
  };
     await User.update({ password: newpassword }, { where: {
        email: myemail,
      } });
     await sendmail(mailOptions); 

}

