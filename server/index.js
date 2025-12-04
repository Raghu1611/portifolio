const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log('Received contact form submission:', { name, email, message });

    // In a real scenario, you would use nodemailer here.
    // For this portfolio demo, we'll simulate a successful send.

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //   }
    // });

    // await transporter.sendMail({...});

    res.status(200).json({ message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
