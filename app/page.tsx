'use client';

import IntroGroup from './components/IntroGroup';
import VoxelCanvas from './components/VoxelCanvas';

export default function Home() {
  return (
    <div>
      <div className='mx-auto lg:flex lg:flex-wrap'>
        <VoxelCanvas />
        <IntroGroup />
      </div>
    </div>
  );
}
