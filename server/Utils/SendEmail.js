const AWS = require("aws-sdk");
const nodemailer = require("nodemailer");
require("dotenv").config();

const awsConfig = {
  accessKeyId: process.env.awsAccessKey,
  secretAccessKey: process.env.awsSecretkey,
  region: process.env.awsMailRegion,
};

const SES = new AWS.SES(awsConfig);
const sendEmail = async (options) => {
  try {
    const mailOptions = {
      Source: options.from,
      Destination: {
        ToAddresses: [options.to],
      },
      Message: {
        Subject: {
          Data: options.subject,
        },
        Body: {
          Html: {
            Data: options.text,
          },
        },
      },
    };

    return await SES.sendEmail(mailOptions).promise(); // Utilize promise method
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;


// Make a function using Nodemailer to send an email




exports.EmailSend = async (options) => {
  console.log("EmailSend")
  console.log(options)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CLIENT_EMAIL,
      pass: process.env.CLIENT_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.CLIENT_EMAIL,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};