import type { Metadata } from 'next';
import '@/styles/globals.scss';
import '@/styles/reset.css';
import { getSide } from '@/api';
import { use } from 'react';
import SideBarComponent from '@/components/sideBar';
import style from './page.module.scss';
import Providers from './providers';

export const metadata: Metadata = {
  title: "Yurim's Portfolio",
  description: '안녕하세요 프론트엔드 개발자 이유림입니다.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const sideResponse = use(getSide());
  if (sideResponse.resultCode > 0)
    return <div>ERROR SIDE : {sideResponse.resultCode}</div>;
  return (
    <html lang='ko' data-theme='light'>
      <body>
        <Providers>
          <main className={style.container}>
            {sideResponse.result && (
              <SideBarComponent {...sideResponse.result} />
            )}
            <div className={style.content}>{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
