import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const created = await prisma.contactMessage.create({
      data: {
        name: body.name || "Unknown",
        email: body.email || "unknown@test.com",
        message: body.message || "Empty",
      },
    });

    return NextResponse.json({
      success: true,
      created,
      notification: "prepared",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: String(err),
      },
      { status: 500 }
    );
  }
}