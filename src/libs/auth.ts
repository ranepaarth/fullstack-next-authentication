import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export function verifyToken(request: NextRequest) {
  const token = request.cookies.get(process.env.COOKIE_NAME!)?.value!;
  const secret = process.env.JWT_SECRET!;

  try {
    const payload: any = jwt.verify(token, secret);
    return payload.id;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
