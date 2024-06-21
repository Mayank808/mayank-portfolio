import SocialBar from './socialbar/SocialBar';
import CustomTypeWriter from './typewriter/TypeWriter';
import WavingHand from './wavinghandemoji/WavingHand';
import Headshot from './Headshot';
import Image from 'next/image';

const width = 30
const height = 30

const IntroGroup = () => {
  return (
    <div className='sm:pt-10 absolute z-[10] flex w-full flex-col items-center justify-center lg:absolute lg:right-0 lg:h-full lg:w-1/2'>
      <div className='flex w-full max-w-3xl flex-col gap-5 text-white max-sm:p-5 color-url'>
        <Headshot src='/Headshot.jpg' alt="Mayank's Headshot" />

        <div className='pb-4 pl-4 pr-4 md:pb-5 md:pl-10 md:pr-10 inline-images'>
          <h1 className='text-5xl font-bold'>
            Hi <WavingHand /> <br /> I&apos;m Mayank
          </h1>
          <CustomTypeWriter />
          <p className='overflow-hidden text-center text-sm font-bold max-sm:text-sm img:inline'>
            I&apos;m a 3B Computer Science student 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png" alt="Technologist" width={width} height={height} /> 
            at the University of Waterloo, with almost 2 years of work experience in software engineering roles. 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width={width} height={height} /> 
            I thrive at diving headfirst into challenges and being able to contribute to dynamic teams tackling interesting problems. Always hungry to acquire new skills and also eat good food.
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Tropical%20Drink.png" alt="Tropical Drink" width={width} height={height} /> 
            I bring a technically agile mindset to the table, being able to ramp up quickly on any project and team. 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png" alt="Light Bulb" width={width} height={height} /> 
            
            Outside of tech, I find joy in cooking 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Lobster.png" alt="Lobster" width={width} height={height} />, 
            playing volleyball 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Volleyball.png" alt="Volleyball" width={width} height={height} />, 
            and watching good movies 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Vampire%20Medium-Light%20Skin%20Tone.png" alt="Vampire Medium-Light Skin Tone" width={width} height={height} />.
            {' '}
            <br />
          </p>

          <p className='overflow-hidden text-left text-sm font-bold max-sm:text-sm'> Previously built projects as a:</p>
          <ul className='list-disc list-inside overflow-hidden text-left text-sm font-bold max-sm:text-sm pl-2'>
            <li>Software Engineer @ <a href="https://www.faire.com" target="blank">Faire</a>: May 2024 - Present 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Convenience%20Store.png" alt="Convenience Store" width={width} height={height} /> 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shopping%20Cart.png" alt="Shopping Cart" width={width} height={height} /> 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Money%20with%20Wings.png" alt="Money with Wings" width={width} height={height} /></li>
            
            <li>Full Stack & Data Engineer @ <a href="https://www.rbc.com/investor-relations/" target="blank">RBC Investor Services</a>: August 2023 - April 2024 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Bank.png" alt="Bank" width={width} height={height} />
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" alt="Laptop" width={width} height={height} /></li>
            
            <li>Software Engineer @ <a href="https://radish.coop/" target="blank">Radish Coop</a>: January 2023 - May 2023 
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Fish%20Cake%20with%20Swirl.png" alt="Fish Cake with Swirl" width={width} height={height} />
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Magnifying%20Glass%20Tilted%20Right.png" alt="Magnifying Glass Tilted Right" width={width} height={height} /></li>
            
            <li>Full Stack & Mobile Engineer @ <a href="https://www.ugosolutions.com/en/" target="blank">UGO - TD Bank Groups</a>: May 2022 - August 2022
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Houses.png" alt="Houses" width={width} height={height} />
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Mobile%20Phone.png" alt="Mobile Phone" width={width} height={height} />
            <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Credit%20Card.png" alt="Credit Card" width={width} height={height} /></li>
          </ul>

          <p className='overflow-hidden text-left text-sm font-bold max-sm:text-sm img:inline'>Please feel free to connect and reach out to me! 
          <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" alt="Handshake" width={width} height={height} />
          <Image src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Milky%20Way.png" alt="Milky Way" width={width} height={height} /></p>
        </div>
      </div>
      <SocialBar />
    </div>
  );
};

export default IntroGroup;
