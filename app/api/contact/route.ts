import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";

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

    if (resend) {
      await resend.emails.send({
        from: "2LLSOFT <onboarding@resend.dev>",
        to: "info@2llsoft.com",
        subject: "New Contact Message",
        html: `
          <h1>New Message</h1>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      created,
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