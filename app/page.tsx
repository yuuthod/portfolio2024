import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<Image
				src='/cat.jpg'
				alt='우동구리'
				width={500}
				height={500}
				priority
			/>
		</main>
	);
}
