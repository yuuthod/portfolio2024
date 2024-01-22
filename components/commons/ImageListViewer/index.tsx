import { ReactElement, useCallback } from 'react';
import { IImageItem } from '@/types/dataType';
import ImageViewerModal from '@/components/commons/ImageViewerModal';
import { useModal } from '@/providers/Modal';
import CustomImage from '@/components/commons/CustomImage';
import style from './style.module.scss';

export default function ImageListViewer({
  images
}: {
  images: Array<IImageItem>;
}): ReactElement {
  const { openModal, closeModal } = useModal();
  const handleClickImage = useCallback(
    (idx: number) => {
      if (!images) return;
      openModal(
        <ImageViewerModal images={images} idx={idx} closeModal={closeModal} />,
        {
          isNoCloseBtn: true
        }
      );
    },
    [openModal, closeModal, images]
  );
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {images.map((img, idx) => (
          <li key={img.id}>
            <CustomImage
              alt={img.alt}
              src={img.src}
              width={357}
              height={0}
              sizes='357px'
              quality={50}
              priority
              onClick={() => handleClickImage(idx)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
