import InfoComponent from '@/components/info';
import SideBarComponent from '@/components/sideBar';
import { getInfo, getSide } from '@/api';
import style from './page.module.scss';

export default async function Info() {
  const sideResponse = await getSide();
  if (sideResponse.resultCode > 0)
    return <div>ERROR SIDE : {sideResponse.resultCode}</div>;
  const infoResponse = await getInfo();
  if (infoResponse.resultCode > 0)
    return <div>ERROR INFO : {infoResponse.resultCode}</div>;

  return (
    <main className={style.container}>
      {sideResponse.result && <SideBarComponent {...sideResponse.result} />}
      {infoResponse.result && <InfoComponent {...infoResponse.result} />}
    </main>
  );
}
