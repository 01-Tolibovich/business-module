import { NextResponse } from "next/server";

let seccionAndRecID: unknown = null

export async function POST(params: Request) {
  const body = await params.json();
  const {data} = body;

  seccionAndRecID = data;

  return NextResponse.json({seccess: true})
}

export async function GET() {
  return NextResponse.json({data: seccionAndRecID})
}