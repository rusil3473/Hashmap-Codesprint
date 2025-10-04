import { NextRequest, NextResponse } from "next/server";
async function POST(req: NextRequest) {
  const { weight, height } = await req.json();



  return new NextResponse();
}