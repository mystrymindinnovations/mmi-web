import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, category, message } = body;

    if (!name || !email || !message || !category || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Admin/Team
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "team@mystrymind.com",
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #3498db;">Mystrymind Inquiry Form</h2>
          <p><strong>Category:</strong> ${category}</p>
          <hr>
          <h3 style="color: #333;">Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Mobile:</strong> ${phone}</li>
          </ul>
          <p><strong>Message:</strong> ${message}</p>
          <hr>
        </div>
      `,
    };

    // Auto-reply to Candidate
    const autoReplyOptions = {
      from: `"Mystrymind Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your inquiry!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #3498db;">Thank You, ${name}!</h2>
          <p>We have received your message regarding <strong>${category}</strong>.</p>
          <p>Our team will get back to you shortly.</p>
          <hr>
          <p><strong>Your Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p style="font-size: 0.9em; color: #888;">This is an automated response. Please do not reply to this email.</p>
          <p><strong>– Team Mystrymind</strong></p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);     // To team
    await transporter.sendMail(autoReplyOptions); // To candidate

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
