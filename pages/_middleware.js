import { getToken } from 'next-auth/jwt';
import {  NextResponse } from 'next/server';
export async function middleware(req) {
  // const url = req.nextUrl.clone();
  // url.pathname = '/home';
  if (req.nextUrl.pathname === '/') {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === 'production',
    });
    // if (!session) return NextResponse.redirect("http://localhost:3000/home");
     if (!session)return NextResponse.rewrite(new URL('/home', req.url))
  }
}
// const url = request.nextUrl.clone();
// url.pathname = '/dest';
// return NextResponse.rewrite(url);
// return NextResponse.rewrite(new URL('/dest', request.url))