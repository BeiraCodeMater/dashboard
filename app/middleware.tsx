import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = JSON.parse(localStorage.getItem("auth_token"));
  // const token = request.cookies.get("auth_token")?.value;

  const SigInUrl = new URL("/", request.url);
  const dashboard = new URL("/dashboard", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    return NextResponse.redirect(SigInUrl);
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(dashboard);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/dashboard/:path*"]
};
