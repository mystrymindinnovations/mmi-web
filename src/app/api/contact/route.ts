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

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "singhsandeepkumar008@gmail.com",
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
      attachments: [],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
