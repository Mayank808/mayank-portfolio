import SocialBar from './socialbar/SocialBar';
import CustomTypeWriter from './typewriter/TypeWriter';

const IntroGroup = () => {
  return (
    <div>
      <div className='z-4'>
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
