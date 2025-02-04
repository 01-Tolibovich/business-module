import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    (await cookies()).delete("token");
    

    return NextResponse.json({ seccess: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ seccess: false }, { status: 500 });
  }
}
