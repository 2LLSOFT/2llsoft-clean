import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const contactMessage = await prisma.contactMessage.create({
    data: {
      name,
      email,
      message,
    },
  });

  return NextResponse.json({
    success: true,
    message: "Message saved successfully",
    data: contactMessage,
  });
}