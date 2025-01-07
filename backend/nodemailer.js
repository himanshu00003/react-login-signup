const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, username) => {
  try {
    const mail = {
      from: `"Mail" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: "Welcome to My App",
      text: "Thank you for creating an account",
      html: `<p>Thank you for creating an account</p>`,
    };

    await transporter.sendMail(mail);
    console.log("Mail sent successfully");
  } catch (error) {
    console.log("Error sending mail", error);
  }
};

module.exports = { sendEmail };
