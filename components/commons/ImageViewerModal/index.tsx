import { useState, useRef } from 'react';
import CustomImage from '@/components/commons/CustomImage';
import Button from '@/components/commons/Button';
import { IImageItem } from '@/types/dataType';
import style from './style.module.scss';

export default function ImageViewerModal({
  images,
  idx,
  closeModal
}: {
  images: Array<IImageItem>;
  idx: number;
  closeModal: () => void;
}) {
  // 다음 이미지로 넘겼을 때 scrollTop=0 값을 할당하기 위함
  const ref = useRef<HTMLDivElement>(
    document.querySelector(`div.${style['modal-image-container']}`)
  );
  const [curIdx, setCurIdx] = useState(idx);
  const [imgInfo, setImgInfo] = useState<{
    id: string;
    src: string;
    alt: string;
  }>(images[idx]);
  const imageLastIdx = images.length - 1;
  const handleClickNextPerv = (isNext: boolean) => {
    if (ref.current) {
      ref.current.scrollTop = 0;
      ref.current.scrollLeft = 0;
    }
    const accIdx = isNext ? curIdx + 1 : curIdx - 1;
    setCurIdx(accIdx);
    setImgInfo(images[accIdx]);
  };
  return (
    <div ref={ref} className={style['modal-image-container']}>
      <div className={style.buttons}>
        {curIdx - 1 >= 0 && (
          <Button onClick={() => handleClickNextPerv(false)}>이전</Button>
        )}
        <Button onClick={closeModal} className={style.close}>
          닫기
        </Button>

        {curIdx + 1 <= imageLastIdx && (
          <Button onClick={() => handleClickNextPerv(true)}>다음</Button>
        )}
      </div>
      <CustomImage
        alt='이미지 확대'
        src={imgInfo.src}
        width={0}
        height={0}
        sizes='100vw'
      />
    </div>
  );
}
