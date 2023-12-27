import SocialBar from './socialbar/SocialBar';
import CustomTypeWriter from './typewriter/TypeWriter';
import WavingHand from './wavinghandemoji/WavingHand';
import Headshot from './Headshot';

const jobLinks = [
  {
    company: 'RBC Investor Services',
    link: 'https://www.rbc.com/investor-relations/',
  },
  { company: 'Radish Coop', link: 'https://radish.coop/en' },
  {
    company: ' UGO - TD Bank Groups',
    link: 'https://www.ugosolutions.com/en/',
  },
];

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
            Hey there! I&apos;m a 3A Computer Science student at the University
            of Waterloo, with over 1 year of software engineering experience. I
            excel at jumping into challenges headfirst and being able to
            contribute to dynamic teams tackling interesting problems.
            <br /> <br />I have previously made an impact at{' '}
            {jobLinks.map((link, index) => (
              <span key={link.company}>
                <a href={link.link} className='text-red-500 underline'>
                  {link.company}
                </a>
                {index !== jobLinks.length - 1 ? ', ' : '. '}
              </span>
            ))}
            Where i&apos;ve played pivotal roles working on diverse projects,
            wearing various hats and contributing significantly to each
            team&apos;s success. My experience extends beyond typical roles,
            allowing me to bring adaptability and a keen passion for learning to
            the projects I undertake. Leaving a lasting imprint on collaborative
            endeavors.
            <br /> <br />
            When I&apos;m not coding, I&apos;m all about exploring new things
            while enjoying my hobbies. Whether it&apos;s spiking volleyballs,
            cooking in the kitchen, hitting the gym, discovering new
            restaurants, or traveling. Feel free to reach out to me using the links provided below or check
            out my resume. I&apos;m thrilled to connect with like-minded
            individuals and explore new opportunities to learn and grow.
          </p>
        </div>
      </div>
      <SocialBar />
    </div>
  );
};

export default IntroGroup;
