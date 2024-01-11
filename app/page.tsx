import Image from 'next/image';
import InfoComponent from '@/components/info';
import { getInfo } from '@/api';

export default async function Home() {
  const response = await getInfo();
  if (response.resultCode > 0) return <div>ERROR {response.resultCode}</div>;

  return (
    <main>
      <Image src='/cat.jpg' alt='우동구리' width={500} height={500} priority />
      {response.info && <InfoComponent {...response.info} />}
    </main>
  );
}
