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

        <span className='text-sm max-sm:text-xs m-5'>
          Welcome to my online domain. My name is Mayank and I am a 20-year-old
          Computer Science student at the University of Waterloo. As a software
          developer, I have gained experience in full-stack development and iOS
          development. However, I am currently exploring and learning more about
          opportunities in Computer Vision, and building out application
          architectures and systems. I have previously interned at Radish, where
          I had the opportunity to work on developing IOS applications for
          drivers, creating microservices to validate students using OCR and
          classical ML techniques, and most importantly, enjoying great food.
          Additionally, I worked at UGO a TD Banks Accelerator, where I
          contributed to innovating the real estate space and enjoying movies
          through a Cineplex Portal. When I am not coding, you can find me
          playing volleyball, trying my hand at cooking, hitting the gym,
          exploring new restaurants, traveling to new places, or simply spending
          time outdoors. I am excited to continue my journey as a developer and
          am constantly seeking new opportunities to learn and grow. Thank you
          for taking the time to visit my workplace, I am currently out of
          office (probably touching grass) but you can reach me at any of the
          links above. I look forward to connecting with you soon!
        </span>
        <SocialBar />
      </div>
    </div>
  );
};

export default IntroGroup;
