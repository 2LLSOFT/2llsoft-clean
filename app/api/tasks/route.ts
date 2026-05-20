import { NextResponse } from "next/server";

export const runtime = "nodejs";

const tasks = [
  {
    id: 1,
    title: "Landing Page Redesign",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Dashboard API Integration",
    priority: "Medium",
    status: "Development",
  },
];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    data: body,
  });
}