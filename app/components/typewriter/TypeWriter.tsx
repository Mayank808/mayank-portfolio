'use client';

import Typewriter from 'typewriter-effect';

const CustomTypeWriter = () => {
  const stringsArray = [
    'A Learner',
    'Software Developer',
    '6 Foot for No Reason',
    'Algo Whisperer',
    'Flowing With The Flow',
    'Laughing at Syntax Errors',
    'Casual Stack Overflow User',
    'Great at Googling',
    '404: Humor Not Found',
    'Silver Elite in CSGO',
    'A Night Owl',
  ];

  // Randomize the array
  const randomizedArray = [...stringsArray].sort(() => Math.random() - 0.5);

  return (
    <h1 className='inline-block pb-7 pt-5 text-3xl font-bold'>
      <Typewriter
        options={{
          strings: randomizedArray,
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
};

export default CustomTypeWriter;
