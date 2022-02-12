const nodemailer = require('nodemailer');

require('dotenv').config();

module.exports = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  secure: false,
  port: process.env.MAILER_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
