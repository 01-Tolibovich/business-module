import { NextResponse } from "next/server";

let searchParamsDataApi: unknown = null;

export async function POST(request: Request) {
  const body = await request.json();
  const { data } = body;

  searchParamsDataApi = data;

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ data: searchParamsDataApi });
}
