import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: "Notification prepared.",
    data: {
      name: body.name,
      email: body.email,
      message: body.message,
    },
  });
}