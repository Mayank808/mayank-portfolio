'use client';

import Image from 'next/image';

const helpInfoBar = () => {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 transform'>
      <h1>
        <Image
          src='/mouse-left-button-svgrepo-com.svg'
          alt='SVG Image'
          width={24}
          height={24}
          className='inline-block p-5'
        />
        Rotate
        <Image
          src='/right-click-of-the-mouse-svgrepo-com.svg'
          alt='SVG Image'
          width={24}
          height={24}
          className='inline-block p-5'
        />
        Move
      </h1>
    </div>
  );
};

export default helpInfoBar;
