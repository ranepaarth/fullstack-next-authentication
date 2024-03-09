import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    if (!req.cookies.get(process.env.COOKIE_NAME!)) {
      return NextResponse.json(
        { success: true, json: "Unauthorized access" },
        { status: 200 }
      );
    }
    const response = NextResponse.json(
      { success: true, message: "logout" },
      { status: 200 }
    );

    response.cookies.set(process.env.COOKIE_NAME!, "", {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
    });

    return response;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error?.message },
      { status: 400 }
    );
  }
}
