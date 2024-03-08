import { connectDB } from "@/config/dbConfig";
import { verifyToken } from "@/libs/auth";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const userId = await verifyToken(request);
    const response = NextResponse;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return response.json(
        { message: "No user found", user: null, success: false },
        { status: 404 }
      );
    }

    return response.json(
      { message: "user found", success: true, user },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Internal Server Error",
        success: false,
        user: null,
      },
      { status: 500 }
    );
  }
}
