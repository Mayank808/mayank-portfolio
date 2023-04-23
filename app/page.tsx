'use client';

import Typewriter from 'typewriter-effect';
import SocialBar from './components/socialsbar/SocialBar';

export default function Home() {
  return (
    <div>
      <div>
        Hi, My Name Is
        <br />
        Mayank
      </div>
      <Typewriter
        options={{
          strings: ['Hello', 'Hello World'],
          autoStart: true,
          loop: true,
        }}
      />
      <SocialBar />
    </div>
  );
}
