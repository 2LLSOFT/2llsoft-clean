import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log("New contact message:", {
    name,
    email,
    message,
  });

  return NextResponse.json({
    success: true,
    message: "Message received successfully",
  });
}
