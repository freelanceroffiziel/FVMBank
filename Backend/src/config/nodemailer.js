const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILSERVICE,
    pass: process.env.EMAILPASSWORD,
  },
});

module.exports = { transporter };
