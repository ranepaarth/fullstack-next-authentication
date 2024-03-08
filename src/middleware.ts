import { NextResponse, type NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("routes", request.nextUrl.pathname);
  const token = request.cookies.get(process.env.COOKIE_NAME!)?.value;

  const pathName = request.nextUrl.pathname;

  const isPublicRoutes = pathName === "/login" || pathName === "/register";

  //   if (isPublicRoutes && !token) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  if (!isPublicRoutes && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isPublicRoutes && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/profile",
    "/login",
    "/register",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
