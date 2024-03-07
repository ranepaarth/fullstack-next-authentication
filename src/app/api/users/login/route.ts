import { connectDB } from "@/config/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Email does not exist",
        },
        { status: 404 }
      );
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect password. Try again",
        },
        { status: 403 }
      );
    }
    // console.log({ user });

    //?create token data

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // ?create Token

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const response =  NextResponse.json(
      {
        success: true,
        message: "Logged in successfully",
      },
      { status: 200 }
    );

    response.cookies.set("token",token,{
        httpOnly:true,
        secure:true,
        maxAge:7*24*60*60*1000
    })

    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

connectDB();
