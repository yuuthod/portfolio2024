import Image from 'next/image';
import style from './page.module.scss';

export default function Home() {
  return (
    <main className={style.container}>
      <Image src='/cat.jpg' alt='우동구리' width={500} height={500} priority />
      <h1 className={style.title}>이유림입니다.</h1>
    </main>
  );
}
