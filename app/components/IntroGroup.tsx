import SocialBar from './socialbar/SocialBar';
import CustomTypeWriter from './typewriter/TypeWriter';

const IntroGroup = () => {
  return (
    <div className='absolute right-0 z-10 grid h-screen w-1/2 place-content-center max-lg:bottom-0 max-lg:h-1/3 max-lg:w-full'>
      <div className='flex flex-col gap-5 text-6xl font-bold text-gray-900 dark:text-white'>
        <div>
          Hi, My Name Is
          <br />
          Mayank
        </div>
        <CustomTypeWriter />
        <SocialBar />
      </div>
    </div>
  );
};

export default IntroGroup;
