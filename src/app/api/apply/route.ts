
'use server';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const mobile = formData.get('mobile') as string;
    const location = formData.get('location') as string;
    const qualification = formData.get('qualification') as string;
    const experience = formData.get('experience') as string;
    const role = formData.get('role') as string;
    const resume = formData.get('resume') as File;

    if (!resume) {
      return NextResponse.json({ message: 'Resume is required.' }, { status: 400 });
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: 'singhsandeepkumar008@gmail.com', // Your receiving email address
      subject: `New Job Application for ${role} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #3498db;">New Job Application</h2>
          <p><strong>Role:</strong> ${role}</p>
          <hr>
          <h3 style="color: #333;">Applicant Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Mobile:</strong> ${mobile}</li>
            <li><strong>Location:</strong> ${location}</li>
            <li><strong>Qualification:</strong> ${qualification}</li>
            <li><strong>Experience:</strong> ${experience}</li>
          </ul>
          <hr>
          <p>The applicant's resume is attached to this email.</p>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to submit application. Please try again later.' }, { status: 500 });
  }
}
