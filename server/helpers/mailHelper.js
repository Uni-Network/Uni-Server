import nodemailer from 'nodemailer';


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "uniworld.app.team@gmail.com", // generated ethereal user
    pass: "hmmcantdecide123" // generated ethereal password
  },
 tls:{
  rejectUnauthorized: false
}
});


export async function sendmail(mailOptions){
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
})};


