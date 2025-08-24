// app/api/apply/route.ts
'use server';

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimiter } from "@/lib/rate-limiter";

export async function POST(req: NextRequest) {
  try {
    // ✅ Extract client IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // ✅ Rate limiting check
    const { success: allowed } = await rateLimiter.limit(ip);
    if (!allowed) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // ✅ Extract form data
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const mobile = formData.get("mobile") as string;
    const location = formData.get("location") as string;
    const qualification = formData.get("qualification") as string;
    const experience = formData.get("experience") as string;
    const role = formData.get("role") as string;
    const resume = formData.get("resume") as File;
    const recaptchaToken = formData.get("recaptchaToken") as string;

    if (!name || !email || !mobile || !role || !resume) {
      return NextResponse.json(
        { message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // ✅ Verify reCAPTCHA with Google
    if (!recaptchaToken) {
      return NextResponse.json(
        { message: "reCAPTCHA token missing." },
        { status: 400 }
      );
    }

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY as string,
        response: recaptchaToken,
        remoteip: ip,
      }),
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed." },
        { status: 403 }
      );
    }

    // ✅ Resume buffer
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // ✅ Secure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ HR email
    const hrMail = {
      from: `"Mystrymind Careers" <${process.env.SMTP_USER}>`,
      to: "team@mystrymind.com",
      replyTo: email,
      subject: `New Job Application for ${role} from ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Role:</strong> ${role}</p>
        <h3>Applicant Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Mobile:</strong> ${mobile}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Qualification:</strong> ${qualification}</li>
          <li><strong>Experience:</strong> ${experience}</li>
        </ul>
        <p>Resume is attached.</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    };

    // ✅ Candidate acknowledgment email
    const candidateMail = {
      from: `"Mystrymind Careers" <team@mystrymind.com>`,
      to: email,
      subject: `Your application for ${role} has been received`,
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>Your application for <strong>${role}</strong> has been received successfully.</p>
        <p>Our HR team will review your profile and get back to you if shortlisted.</p>
        <br/>
        <p style="font-size: 12px; color: gray;">This is an automated email, please do not reply.</p>
      `,
    };

    // ✅ Send both emails
    await transporter.sendMail(hrMail);
    await transporter.sendMail(candidateMail);

    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending application:", error);
    return NextResponse.json(
      { message: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
