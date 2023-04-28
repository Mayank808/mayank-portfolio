'use client';

import IntroGroup from './components/IntroGroup';
import CanvasModel from './components/CanvasModel';
import SocialBar from './components/socialbar/SocialBar';

export default function Home() {
  return (
    <div>
      <div className='mx-auto w-full overflow-hidden bg-green-100 lg:flex lg:flex-wrap'>
        <div className='z-[1] h-[70vh] w-full bg-red-100 lg:h-screen'>test</div>
        <div className='absolute z-[10] flex w-full flex-col items-center justify-center bg-blue-300 lg:absolute lg:right-0 lg:h-full lg:w-1/2'>
          <div className='flex w-full max-w-3xl flex-col gap-5 p-10 text-gray-900 dark:text-white'>
            <h1 className='text-6xl font-bold'>Title</h1>
            <p className='m-5 overflow-hidden text-sm max-sm:text-xs'>
              Welcome to my online domain. My name is Mayank and I am a
              20-year-old Computer Science student at the University of
              Waterloo. As a software developer, I have gained experience in
              full-stack development and iOS development. However, I am
              currently exploring and learning more about opportunities in
              Computer Vision, and building out application architectures and
              systems. I have previously interned at Radish, where I had the
              opportunity to work on developing IOS applications for drivers,
              creating microservices to validate students using OCR and
              classical ML techniques, and most importantly, enjoying great
              food. Additionally, I worked at UGO a TD Banks Accelerator, where
              I contributed to innovating the real estate space and enjoying
              movies through a Cineplex Portal. When I am not coding, you can
              find me playing volleyball, trying my hand at cooking, hitting the
              gym, exploring new restaurants, traveling to new places, or simply
              spending time outdoors. I am excited to continue my journey as a
              developer and am constantly seeking new opportunities to learn and
              grow. Thank you for taking the time to visit my workplace, I am
              currently out of office (probably touching grass) but you can
              reach me at any of the links above. I look forward to connecting
              with you soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
