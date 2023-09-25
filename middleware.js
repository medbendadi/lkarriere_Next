import { NextResponse } from 'next/server'

import { i18n } from './i18n' 

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request) {
  // Negotiator expects plain object so we need to transform headers
// Transform headers to a plain object
const negotiatorHeaders = {};
request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

// Get supported locales from i18n configuration
const locales = i18n.locales;

// Use negotiator to get client's preferred languages
const negotiator = new Negotiator({ headers: negotiatorHeaders });
const clientLanguages = negotiator.languages(locales);

// Check if clientLanguages is an array and not empty
if (Array.isArray(clientLanguages) && clientLanguages.length > 0) {
  // Match the client's languages to a supported locale
  try {
    const locale = matchLocale(clientLanguages, locales, i18n.defaultLocale);
    if (locale) {
      return locale;
    } else {
      // Handle the case where no matching locale is found
      console.warn('No matching locale found. Falling back to default locale.');
      return i18n.defaultLocale;
    }
  } catch {
    console.warn('No matching locale found. Falling back to default locale.');
    return i18n.defaultLocale;
  }

 
} else {
  // Handle the case where clientLanguages is not an array or empty
  console.warn('Client did not provide valid language preferences. Falling back to default locale.');
  return i18n.defaultLocale;
}
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}