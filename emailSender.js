const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fakeEmail@gmail.com',
    pass: 'password123',
  },
});

const mailOptions = {
  from: 'fakeEmail@gmail.com',
  to: 'recipientEmail@gmail.com',
  subject: 'Node.js Email Test',
  text: 'Message to Wael Barhoumi',
  html: '<h1>Hello Wael! </h1> <h5>This is you from the future. I just wanted to say that you eventually made it. So, keep that in mind.</h5>'
}

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent:'+ info.response);
  }
})