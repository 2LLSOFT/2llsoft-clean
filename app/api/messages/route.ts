import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(messages);
}

export async function DELETE(request: Request) {
  const body = await request.json();

  await prisma.contactMessage.delete({
    where: {
      id: body.id,
    },
  });

  return NextResponse.json({
    success: true,
  });
}