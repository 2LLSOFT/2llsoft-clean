import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { success: false, message: "Missing fields" },
      { status: 400 }
    );
  }

  const savedMessage = await prisma.message.create({
    data: {
      name: body.name,
      email: body.email,
      message: body.message,
    },
  });

  return NextResponse.json({
    success: true,
    message: savedMessage,
  });
}