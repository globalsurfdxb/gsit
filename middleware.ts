import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/utils/verifyAdmin";

// Guards every /admin route: an unauthenticated visitor gets bounced to
// /admin/login, and a signed-in admin gets bounced away from /admin/login
// (including via the browser back button, which just re-requests the page)
// straight to /admin instead of seeing the login form again.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthed = await verifyAdmin(request);

  if (pathname === "/admin/login") {
    if (isAuthed) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    // Without this, a browser can restore the login page from its
    // back-forward cache on a back/forward navigation without asking the
    // server at all, so the redirect above never gets a chance to run.
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "no-store");
    return response;
  }

  if (!isAuthed) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
