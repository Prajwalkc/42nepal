import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, type Locale } from './i18n';

export function middleware(request: NextRequest) {
  // Get locale from cookie or use default
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  const locale: Locale = (localeCookie && locales.includes(localeCookie as Locale))
    ? (localeCookie as Locale)
    : defaultLocale;

  // Create response
  const response = NextResponse.next();

  // Set locale cookie if not present or invalid
  if (!localeCookie || !locales.includes(localeCookie as Locale)) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  // Match all request paths except for:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - files with extensions (e.g. .png, .jpg, etc.)
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
