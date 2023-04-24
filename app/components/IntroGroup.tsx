import SocialBar from './socialbar/SocialBar';
import CustomTypeWriter from './typewriter/TypeWriter';

const IntroGroup = () => {
  return (
    <div>
      <div className='absolute right-0 z-10 h-screen w-1/2 max-sm:bottom-0 max-sm:h-1/2 max-sm:w-full'>
        <div>
          <div>
            Hi, My Name Is
            <br />
            Mayank
          </div>
          <CustomTypeWriter />
          <SocialBar />
        </div>
      </div>
    </div>
  );
};

export default IntroGroup;
