import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

var options = {
  service: 'SendGrid',
  auth: {
    api_user: 'KHADIMSafaa',
    api_key: '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'
  }
}

var client = nodemailer.createTransport(sgTransport(options));


export async function sendmail(email){
client.sendMail(email, function(err, info){
    if (err ){
      console.log(error);
    }
    else {
      console.log('Message sent: ' + info.response);
    }
})};