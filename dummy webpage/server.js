const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // You can change the port as needed

app.use(bodyParser.json());

// Endpoint to handle meal submissions
app.post('/submit-meal', (req, res) => {
  const { meal, items } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'your-email-service', // e.g., 'gmail'
    auth: {
      user: 'mohit.snegi97@gmail.com',
      pass: 'Lonely123)',
    },
  });

  // Compose email
  const mailOptions = {
    from: 'mohit.snegi97@gmail.com',
    to: 'recipient@example.com',
    subject: 'New Meal Submission',
    html: `
      <p><strong>Meal:</strong> ${meal}</p>
      <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Meal submitted and email sent');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
