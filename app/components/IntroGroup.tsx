import SocialBar from './socialbar/SocialBar';
import CustomTypeWriter from './typewriter/TypeWriter';
import WavingHand from './wavinghandemoji/WavingHand';
import Headshot from './Headshot';

const IntroGroup = () => {
  return (
    <div className='absolute z-[10] flex w-full flex-col items-center justify-center lg:absolute lg:right-0 lg:h-full lg:w-1/2'>
      <div className='flex w-full max-w-3xl flex-col gap-5 text-white max-sm:p-5'>
        <Headshot src='/Headshot.jpg' alt="Mayank's Headshot" />

        <div className='pb-4 pl-4 pr-4 md:pb-5 md:pl-10 md:pr-10'>
          <h1 className='text-5xl font-bold'>
            Hi <WavingHand /> <br /> I&apos;m Mayank
          </h1>
          <CustomTypeWriter />
          <p className='overflow-hidden text-center text-sm font-bold max-sm:text-sm'>
            A 20-year-old Computer Science student at the University of
            Waterloo. Tech is one of my passions, and I love exploring various
            areas within the field. With previous internship experiences at{' '}
            <a
              href='https://radish.coop/en'
              className='text-cyan-500 underline'
            >
              Radish
            </a>{' '}
            and{' '}
            <a
              href='https://www.ugowallet.com/'
              className='text-cyan-500 underline'
            >
              UGO @ TD Bank Groups
            </a>
            , I&apos;ve had the chance to grow my skills as a Software Engineer,
            Full Stack, and Mobile Developer.
            <br /> <br />
            When I&apos;m not coding, I&apos;m all about exploring new things
            while enjoying my hobbies. Whether it&apos;s spiking volleyballs,
            cooking in the kitchen, hitting the gym, discovering new
            restaurants, or traveling.
            <br /> <br />
            Sorry that I am currently out of the office, probably touching
            grass. Feel free to reach out to me using the links provided below
            or check out my resume. I&apos;m thrilled to connect with
            like-minded individuals and explore new opportunities to learn and
            grow.
          </p>
        </div>
      </div>
      <SocialBar />
    </div>
  );
};

export default IntroGroup;
