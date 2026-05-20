import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    name: "2LLSOFT",
    email: "info@2llsoft.com",
    phone: "+48 000 000 000",
    whatsapp: "+48 000 000 000",
    location: "Gdynia, Poland",
    workingHours: "Monday - Friday / 09:00 - 18:00",
  });
}