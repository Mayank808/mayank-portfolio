'use client';

import IntroGroup from './components/IntroGroup';
import CanvasModel from './components/CanvasModel';

export default function Home() {
  return (
    <div>
      <div className='flex h-screen w-full flex-wrap'>
        <CanvasModel />
        <IntroGroup />
      </div>
      <div className='flex h-fit w-full p-11'>
        Yooo testing this showing up 
      </div>
    </div>
  );
}
