import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

// 1. Specify protected and public routes
const protectedRoutes = [ '/', '/history', '/calculator']
const publicRoutes = ['/login']
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
// 3. Determine session status
const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
const isLoggedIn = token ? true : false
console.log('Is Logged In:', isLoggedIn);
console.log('Path:', path);
 
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !isLoggedIn) {
    console.log('User is not authenticated, redirecting to /login')
    return NextResponse.redirect(new URL('/login', req.url))
  }
 
  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    isLoggedIn 
  ) {
    console.log('User is authenticated, redirecting to /')
    return NextResponse.redirect(new URL('/', req.url))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/', '/history', '/calculator', '/login'],
}