'use client';

import { ReactElement, useState } from 'react';
import Image from 'next/image';
import { ISideData } from '@/types/dataType';
import style from './style.module.scss';

function SideBarComponent({
  name,
  enName,
  photo,
  photoBlur,
  infos
}: ISideData): ReactElement {
  const [isTitleImage, setIsTitleImage] = useState<Boolean>(false);
  const handleClickTitleToggle = () => {
    setIsTitleImage(!isTitleImage);
  };
  const handleClickCopyText = (key: string) => {
    const find = infos.find((info) => info.label === key);
    navigator.clipboard.writeText(find?.value || '');
  };

  return (
    <div className={style.container}>
      <div
        className={style.titleContainer}
        role='button'
        onClick={handleClickTitleToggle}
        onKeyDown={handleClickTitleToggle}
        tabIndex={0}
        style={{ display: isTitleImage ? 'block' : 'none' }}
      >
        <h1 className={style.title}>
          <span>{enName[0]}</span>
          <span>{enName[1]}</span>
        </h1>
        <div className={style.imgBox}>
          <Image
            alt='우동구리'
            src={photo}
            placeholder='blur'
            blurDataURL={photoBlur}
            sizes='200px'
            fill
            style={{ objectFit: 'cover' }}
            quality={50}
          />
        </div>
      </div>
      <div
        className={style.title}
        onClick={handleClickTitleToggle}
        onKeyDown={handleClickTitleToggle}
        tabIndex={-1}
        role='button'
        style={{ display: isTitleImage ? 'none' : 'block' }}
      >
        <span>PORT-</span>
        <span>FOLIO</span>
      </div>
      <div className={style.infoBlock}>
        <p className={style.name}>{name}</p>
        <ul className={style.infos}>
          {infos.map((info) => (
            <li key={`side-info-${info.label}`}>
              <p className={style['label-title']}>{info.label}</p>
              {info.href ? (
                <a className={style.label} href={`tel:${info.href}`}>
                  {info.value}
                </a>
              ) : (
                <p className={style.label}>
                  <span
                    role='presentation'
                    tabIndex={-1}
                    onClick={() => handleClickCopyText(info.label)}
                  >
                    {info.value}
                  </span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBarComponent;
