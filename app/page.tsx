'use client';

import IntroGroup from './components/IntroGroup';
import CanvasModel from './components/CanvasModel';

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-wrap'>
      <CanvasModel />
      <IntroGroup />
    </div>
  );
}
