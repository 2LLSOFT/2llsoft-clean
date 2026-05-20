import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    databaseUrlExists: Boolean(process.env.DATABASE_URL),
  });
}

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

    return NextResponse.json({
      success: true,
      data: savedMessage,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}