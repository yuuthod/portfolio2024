'use client';

import { HTMLAttributes, ReactElement, useState } from 'react';
import Image from 'next/image';
import { IPhoto } from '@/types/dataType';
import TransformSVG from '@/public/icons/transform.svg';
import cn from 'classnames';
import style from './style.module.scss';

function ProfilePhoto({
  photos,
  ...props
}: { photos: Array<IPhoto> } & HTMLAttributes<HTMLDivElement>): ReactElement {
  const [currentImgeIdx, setCurrentImgeIdx] = useState<number>(0);

  const handleChangeImage = () => {
    if (currentImgeIdx === photos.length - 1) {
      setCurrentImgeIdx(0);
    } else {
      setCurrentImgeIdx((prev) => prev + 1);
    }
  };
  return (
    <div
      className={cn(style.profileImg, props.className)}
      role='presentation'
      onClick={handleChangeImage}
    >
      <TransformSVG alt='이미지 전환' className={style.transformSVG} />
      <Image
        alt='프로필 이미지'
        src={photos[currentImgeIdx].src}
        width={183}
        height={183}
        sizes='183px'
        priority
        {...(photos[currentImgeIdx].blur && {
          placeholder: 'blur',
          blurDataURL: photos[currentImgeIdx].blur
        })}
      />
    </div>
  );
}

export default ProfilePhoto;
