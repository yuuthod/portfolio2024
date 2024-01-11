import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/reset.css';
import { roboto } from './fonts';

export const metadata: Metadata = {
  title: "Yurim's Portfolio",
  description: '안녕하세요 프론트엔드 개발자 이유림입니다.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' data-theme='light'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
