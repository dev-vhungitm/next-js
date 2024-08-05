import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export const middleware = request => {
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('pathname', request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders
    }
  });
};
