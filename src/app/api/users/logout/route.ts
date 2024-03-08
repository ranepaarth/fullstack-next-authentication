import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    if (!req.cookies.get(process.env.COOKIE_NAME!)) {
      return NextResponse.json({ success: true, json: "Unauthorized access" });
    }
    const response = NextResponse.json({ success: true, message: "logout" });

    response.cookies.set(process.env.COOKIE_NAME!, "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ success: false, message: error?.message });
  }
}
