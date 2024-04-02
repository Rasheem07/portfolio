// pages/api/contact.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextResponse) {
    try {
      const { name, email, message } = await req.json();

      // Create a Nodemailer transporter using your email server's SMTP settings
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'mohdrasheem07@gmail.com', // Your Gmail address
          pass: process.env.GOOGLE_APP_PASSWORD // Your Gmail password or app password
        }
      });

      // Email options
      const mailOptions = {
        from: email, // Sender's email address
        to: 'mohdrasheem07@gmail.com', // Your Gmail address
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      };

      // Send email
      await transporter.sendMail(mailOptions);
      
      return NextResponse.json({success: true}, {status: 201})
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({error: error}, {status: 500})
    }
}
