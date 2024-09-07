import express from 'express';
import path from 'path';
import { sendEmail } from './mailer.js';

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../src/build')));

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;
  const result = await sendEmail(to, subject, text);
  if (result.success) {
    res.status(200).json({ message: 'Email sent successfully!' });
  } else {
    res.status(500).json({ message: 'Failed to send email.', error: result.error });
  }
});

// Handle GET requests to the root URL by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/build/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
