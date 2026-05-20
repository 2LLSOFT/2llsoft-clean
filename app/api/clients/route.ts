import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clients = [
  {
    id: 1,
    company: "NovaTech",
    contact: "Michael Ross",
    plan: "Business",
    status: "Active",
  },
  {
    id: 2,
    company: "Skyline AI",
    contact: "Sarah Chen",
    plan: "Custom",
    status: "Negotiation",
  },
];

export async function GET() {
  return NextResponse.json(clients);
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    data: body,
  });
}