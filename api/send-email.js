import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message, type, date, condition } = req.body;

  console.log('Received email request:', { name, email, type });

  // Email transporter setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false
    }
  });

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
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
}
