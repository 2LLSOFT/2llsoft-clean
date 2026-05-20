import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    revenue: 48250,
    visitors: 12430,
    conversions: 312,
    growth: 18,
  });
}