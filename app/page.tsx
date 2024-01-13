import InfoComponent from '@/components/info';
import { getInfo } from '@/api';

export default async function Info() {
  const infoResponse = await getInfo();
  if (infoResponse.resultCode > 0)
    return <div>ERROR INFO : {infoResponse.resultCode}</div>;

  return infoResponse.result && <InfoComponent {...infoResponse.result} />;
}
