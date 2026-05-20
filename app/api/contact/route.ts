import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const savedMessage = await prisma.contactMessage.create({
      data: {
        name: String(body.name),
        email: String(body.email),
        message: String(body.message),
      },
    });

    return NextResponse.json({ success: true, data: savedMessage });
  } catch {
    return NextResponse.json(
      { success: false, message: "Message could not be saved." },
      { status: 500 }
    );
  }
}