export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        console.log('Contact form submission:', { name, email, message });

        // Here you would typically integrate with an email service like SendGrid, Resend, or Nodemailer

        res.status(200).json({ message: 'Message sent successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
