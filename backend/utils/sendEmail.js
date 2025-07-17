import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {

    console.log("Sending email to:", email);


  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const options = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    text: message,
  }
  try {
    await transporter.sendMail(options);
    console.log("Email sent successfully to:", email);
  } catch (err) {
    console.error("Error sending email to:", email, err);
  }
//   await transporter.sendMail(options);

//     console.log("Email sent successfully to:", email);
};