import { NextRequest, NextResponse } from "next/server";

interface EnquiryData {
  name: string;
  phone: string;
  email?: string;
  city: string;
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
  "Other",
];

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryData = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.city || !body.service) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, city, and service are required." },
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

    // Validate city length
    if (body.city.length > 100) {
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

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send SMS/WhatsApp notification
    // 4. Integrate with CRM

    console.log("New enquiry received:", {
      name: body.name,
      phone: body.phone,
      email: body.email || "N/A",
      city: body.city,
      service: body.service,
      propertyType: body.propertyType || "N/A",
      message: body.message || "N/A",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. We will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
