// npm => node package manager 
console.log("-----------------\nprogramme started\n-----------------");

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'youremail@gmail.com', // your email address
    pass: 'yourpassword' // your email password
  }
});
  
// setup email data
let mailOptions = {
  from: '"Your Name" <youremail@gmail.com>', // sender address
  to: 'recipient@example.com', // list of receivers
  subject: 'Hello from Node.js', // Subject line
  text: 'Hello world!', // plain text body
  html: '<b>Hello world!</b>' // html body
};
  
// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Message sent: %s', info.messageId);
  }
});