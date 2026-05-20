import { NextResponse } from "next/server";

export const runtime = "nodejs";

const projects = [
  {
    id: 1,
    name: "2LLSOFT Dashboard",
    description: "Admin dashboard system",
    status: "Active",
  },
  {
    id: 2,
    name: "Mobile Application",
    description: "Flutter mobile app",
    status: "Development",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    data: body,
  });
}