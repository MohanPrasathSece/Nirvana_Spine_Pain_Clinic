import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes (useful for development if proxy isn't used, but good practice)
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, message, type, date, condition } = req.body;

    console.log('Received email request:', { name, email, type });

    let subject = `New Contact Form Submission from ${name}`;
    if (type === 'appointment') {
        subject = `New Appointment Request: ${name} - ${date}`;
    }

    let htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #2c5282;">New Message Received</h2>
      <div style="background: #f7fafc; padding: 15px; border-radius: 5px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Type:</strong> ${type}</p>
  `;

    if (type === 'appointment') {
        htmlContent += `
        <p><strong>Condition:</strong> ${condition}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
    `;
    }

    htmlContent += `
      </div>
      <div style="margin-top: 20px;">
        <h3 style="color: #2c5282;">Message:</h3>
        <p style="white-space: pre-wrap;">${message || 'No message content'}</p>
      </div>
    </div>
  `;

    const mailOptions = {
        from: `Website Contact <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: subject,
        html: htmlContent,
        replyTo: email,
    };

    try {
        await transporter.verify(); // Verify connection first
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
});

// Catch-all handler for any request that doesn't match an API route
// This ensures the frontend routing works (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
