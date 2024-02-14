import type { Metadata } from 'next';
import '@/styles/globals.scss';
import '@/styles/reset.css';
import { getSide } from '@/api';
import { use } from 'react';
import SideBarComponent from '@/components/SideBar';
import style from './page.module.scss';
import Providers from './providers';

export const metadata: Metadata = {
  title: process.env.HTML_HTML,
  description: process.env.HTML_DESCRIPTION
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
