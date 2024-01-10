import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Yurim's Portfolio",
	description: '안녕하세요 프론트엔드 개발자 이유림입니다.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ko'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
