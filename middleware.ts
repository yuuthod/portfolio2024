import { NextResponse, type NextRequest } from 'next/server';

// matcher에 매칭되는 경로로 접근하는 경우, middleware 실행
export const config = {
  matcher: ['/portfolio']
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/portfolio')) {
    const blockId = process.env.PORTFOLIO_BLOCK_ID || '';
    return NextResponse.redirect(new URL(`/portfolio/${blockId}`, request.url));
  }

  return NextResponse.next();
}
