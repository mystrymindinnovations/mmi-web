import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { rateLimiter } from "@/lib/rate-limiter";

// ✅ Basic HTML escaping to prevent XSS in email content
function sanitize(input: string) {
  return input.replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char] || char)
  );
}

// ✅ Simple email validation
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    // ✅ Extract client IP for rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // ✅ Apply rate limiting
    const { success } = await rateLimiter.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, category, message, website } = body;

    // ✅ Honeypot spam check
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message || !category || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // ✅ Sanitize user input before injecting into HTML
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeCategory = sanitize(category);
    const safeMessage = sanitize(message);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });


    // ✅ Email to Admin/Team
    const mailOptions = {
      from: `"Mystrymind Website" <${process.env.SMTP_USER}>`,
      to: "team@mystrymind.com",
      replyTo: safeEmail,
      subject: `New Inquiry form  from ${safeName}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #3498db;">New Business Inquiry</h2>
          <p><strong>Category:</strong> ${safeCategory}</p>
          <hr>
          <h3 style="color: #333;">Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${safeName}</li>
            <li><strong>Email:</strong> ${safeEmail}</li>
            <li><strong>Phone:</strong> ${safePhone}</li>
          </ul>
          <p><strong>Message:</strong> ${safeMessage}</p>
          <hr>
        </div>
      `,
    };

    // ✅ Auto-reply to Candidate
    const autoReplyOptions = {
      from: `"Mystrymind Team" <${process.env.SMTP_USER}>`,
      to: safeEmail,
      subject: "Thanks for reaching out to Mystrymind!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #3498db;">Hello ${safeName},</h2>
          <p>Thank you for contacting us regarding <strong>${safeCategory}</strong>.</p>
          <p>We have received your inquiry and our team will get back to you soon.</p>
          <hr>
          <p><strong>Your Message:</strong></p>
          <p>${safeMessage}</p>
          <hr>
          <p style="font-size: 0.9em; color: #888;">This is an automated response. Please do not reply.</p>
          <p><strong>– Mystrymind Team</strong></p>
        </div>
      `,
    };


    await transporter.sendMail(mailOptions); // Send to team
    await transporter.sendMail(autoReplyOptions); // Send auto-reply to candidate


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
