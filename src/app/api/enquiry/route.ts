import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EnquiryData {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  service: string;
  propertyType?: string;
  message?: string;
}

const ALLOWED_SERVICES = [
  "uPVC Windows",
  "uPVC Doors",
  "Aluminium Windows",
  "Aluminium Doors",
  "Modular Kitchen",
  "Wardrobes & Storage",
  "Complete Interiors",
  "Interior Design",
  "Other",
];

const SMTP_EMAIL = "ableinteriorsdigital@gmail.com";
const SMTP_PASSWORD = "fkyx rpbp wfcv cxol";
const NOTIFY_EMAIL = "ablewindows22@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryData = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.service) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, and service are required." },
        { status: 400 }
      );
    }

    // Validate name length
    if (body.name.length > 100) {
      return NextResponse.json(
        { error: "Name must be 100 characters or less." },
        { status: 400 }
      );
    }

    // Validate phone format (Indian numbers)
    const phoneRegex = /^[+]?[0-9]{10,13}$/;
    if (!phoneRegex.test(body.phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Invalid phone number format." },
        { status: 400 }
      );
    }

    // Validate email if provided
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: "Invalid email format." },
          { status: 400 }
        );
      }
    }

    // Validate service
    if (!ALLOWED_SERVICES.includes(body.service)) {
      return NextResponse.json(
        { error: "Invalid service selection." },
        { status: 400 }
      );
    }

    // Validate city length if provided
    if (body.city && body.city.length > 100) {
      return NextResponse.json(
        { error: "City must be 100 characters or less." },
        { status: 400 }
      );
    }

    // Validate message length if provided
    if (body.message && body.message.length > 1000) {
      return NextResponse.json(
        { error: "Message must be 1000 characters or less." },
        { status: 400 }
      );
    }

    // Build email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a56db, #3b82f6); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Enquiry Received</h1>
          <p style="color: #bfdbfe; margin: 4px 0 0; font-size: 14px;">Able Interiors & Windows</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #334155; width: 130px; vertical-align: top;">Name:</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #334155; vertical-align: top;">Phone:</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.phone}</td>
            </tr>
            ${body.email ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #334155; vertical-align: top;">Email:</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.email}</td>
            </tr>` : ""}
            ${body.city ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #334155; vertical-align: top;">City:</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.city}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #334155; vertical-align: top;">Service:</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.service}</td>
            </tr>
            ${body.propertyType ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #334155; vertical-align: top;">Property Type:</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.propertyType}</td>
            </tr>` : ""}
            ${body.message ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #334155; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.message}</td>
            </tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="color: #64748b; font-size: 12px; margin: 0;">
            Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </p>
        </div>
      </div>
    `;

    // Send email notification
    await transporter.sendMail({
      from: `"Able Interiors & Windows" <${SMTP_EMAIL}>`,
      to: NOTIFY_EMAIL,
      subject: `New Enquiry: ${body.service} — ${body.name}`,
      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. We will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
