import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
}

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Create contact message object
    const contactMessage: ContactMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || undefined,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Log to console (for development)
    console.log("📧 New contact message received:");
    console.log(JSON.stringify(contactMessage, null, 2));

    // Save to file (simple storage for now)
    const dataDir = path.join(process.cwd(), "src", "data");
    const messagesPath = path.join(dataDir, "messages.json");

    let messages: ContactMessage[] = [];
    try {
      const existingData = await fs.readFile(messagesPath, "utf-8");
      messages = JSON.parse(existingData);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    messages.push(contactMessage);

    await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2));

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
