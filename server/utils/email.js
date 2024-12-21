const nodemailer = require("nodemailer");

const sendEmail = async (option) => {
  // create a transporter
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.emailforEmail,
      pass: process.env.passwordforemail,
    },
  });

  var mailOptions = {
    from: process.env.emailforEmail,
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
