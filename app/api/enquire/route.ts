import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Enquiry API Route
 * 
 * Handles form submissions from /enquire page:
 * - Validates input (name, email, message)
 * - Honeypot spam protection (company field)
 * - Rate limiting (3 requests per minute per IP)
 * - Sends email to owner with enquiry details
 * - Sends confirmation email to user
 * 
 * Testing:
 * 1. Set up environment variables in .env.local
 * 2. Start dev server: npm run dev
 * 3. Navigate to /enquire and submit the form
 * 4. Check owner email inbox and user email for confirmation
 * 
 * Domain Verification:
 * - For production: Verify your domain at https://resend.com/domains
 * - For testing/development: Use "onboarding@resend.dev" as FROM_EMAIL
 *   (This is Resend's test domain and works without verification)
 */

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (IP-based)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // Max 3 requests per minute per IP

function getRateLimitKey(request: NextRequest): string {
  // Try to get IP from headers (Vercel provides this)
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown";
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old entries periodically (simple cleanup)
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }, 5 * 60 * 1000); // Clean every 5 minutes
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again in a moment." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, company, journey } = body;

    // Honeypot check - if company field is filled, silently return success
    if (company && company.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Get environment variables
    const ownerEmail = process.env.OWNER_EMAIL || "hello@themountainwhisper.com";
    const fromEmail = process.env.FROM_EMAIL || "The Mountain Whisper <no-reply@themountainwhisper.com>";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://themountainwhisper.com";

    // Prepare email content
    const timestamp = new Date().toISOString();
    const journeyInfo = journey ? `\nJourney: ${journey}` : "";

    // Email to owner
    const ownerEmailContent = `
New enquiry from The Mountain Whisper website

Name: ${name}
Email: ${email}${journeyInfo}

Message:
${message}

---
Submitted: ${timestamp}
Site: ${siteUrl}/enquire
`;

    // Send email to owner
    const ownerEmailResult = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      subject: `New enquiry from ${name}`,
      text: ownerEmailContent,
    });

    if (ownerEmailResult.error) {
      console.error("Failed to send owner email:", ownerEmailResult.error);
      
      // Check if it's a domain verification error
      if (ownerEmailResult.error.message?.includes("not verified") || ownerEmailResult.error.name === "validation_error") {
        console.error("Domain verification required. Please verify your domain at https://resend.com/domains");
        console.error("For testing, you can use: onboarding@resend.dev as FROM_EMAIL");
        throw new Error("Email service configuration error. Please verify your domain in Resend.");
      }
      
      throw new Error("Failed to send email");
    }

    // Send confirmation email to user
    const userConfirmationResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We received your enquiry — The Mountain Whisper",
      text: `Thank you for reaching out. We've received your note and will respond thoughtfully soon.

— The Mountain Whisper`,
    });

    if (userConfirmationResult.error) {
      console.error("Failed to send confirmation email:", userConfirmationResult.error);
      // Don't fail the request if confirmation email fails, but log it
      // The owner email was sent successfully, so we still return success
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

