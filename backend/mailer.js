import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'trinadhreddym@gmail.com', // Your email address
    pass: 'Dragon#333',  // Your email password or app password
  },
});

export const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: 'your-email@gmail.com', // Your email address
    to: 'trinadhreddym@gmail.com', // Recipient email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  return transporter.sendMail(mailOptions);
};
