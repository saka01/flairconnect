// middleware/_middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.has('token');
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL('/auth/login', req.nextUrl.origin));
  }

  return NextResponse.next();
}
