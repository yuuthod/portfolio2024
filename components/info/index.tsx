import { ReactElement } from 'react';
import { IInfoData } from '@/types/dataType';

const infoComponent = ({ name, year }: IInfoData): ReactElement => {
  return (
    <div>
      {name}/{year}
    </div>
  );
};

export default infoComponent;
