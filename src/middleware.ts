// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-hostname", request.nextUrl.hostname);
  return response;
}

// the following code has been copied from https://nextjs.org/docs/advanced-features/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
