'use client';

import { ReactElement, useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import style from './style.module.scss';

function CustomImage({ ...props }: ImageProps): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const handleOnLoader = () => {
    setIsLoading(false);
  };
  return (
    <>
      <Image {...props} onLoad={handleOnLoader} />
      {isLoading && (
        <div
          className={style.imageLoader}
          style={{
            width: props.width || '100%'
          }}
        >
          <span>Loading...</span>
        </div>
      )}
    </>
  );
}

export default CustomImage;
