import { NextResponse } from "next/server";

export async function GET(request) {
  // const body = await request.json();
  // const { name, email, password } = body;
  return NextResponse.json("Hello, Next.js!");
}
