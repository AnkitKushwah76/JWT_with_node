const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "taskcraftteamtest@gmail.com",
    pass: "msvddxqmawctwkwg",
  },
});

const sendSuccessEmail = (userEmail) => {
  console.log("userEmail-->", userEmail);
  const mailOptions = {
    from: "pathaksidhant7@gmail.com",
    to: userEmail,
    subject: "Account Created Successfully",
    text: "Your account has been successfully created!",
    html: "<h1>Welcome!</h1><p>Your account has been successfully created!</p>",
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendSuccessEmail;
