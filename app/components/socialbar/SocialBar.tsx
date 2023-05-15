'use client';

import IconButton, { IconButtonProps } from '../IconButton';
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { GiCoffeeCup } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';
import { MdOutlineContactPage } from 'react-icons/md';
import { SlSocialSpotify } from 'react-icons/sl';
import { RiSpotifyFill } from 'react-icons/ri';

const buttons: IconButtonProps[] = [
  {
    key: 'Github',
    title: 'My Github',
    icon: AiFillGithub,
    onClick: () => {
      window.open('https://github.com/mayank808');
    },
  },
  {
    key: 'Email',
    title: 'Email Me',
    icon: AiOutlineMail,
    onClick: () => {
      window.open('mailto:m4mehra@uwaterloo.ca');
    },
  },
  {
    key: 'Linkedin',
    title: 'Connect on Linkedin',
    icon: AiFillLinkedin,
    onClick: () => {
      window.open('https://www.linkedin.com/in/mayank808/');
    },
  },
  {
    key: 'Calendly',
    title: 'Schedule a Chat',
    icon: BiCoffeeTogo,
    onClick: () => {
      window.open('https://calendly.com/mayank808/schedule');
    },
  },
  {
    key: 'Resume',
    title: 'My Resume',
    icon: MdOutlineContactPage,
    onClick: () => {
      window.open(
        'https://drive.google.com/file/d/19oGosvHAxLBXjnECroDuUXDSGZ9DYVJm/view?usp=sharing'
      );
    },
  },
  {
    key: 'Instagram',
    title: 'My Instagram',
    icon: AiOutlineInstagram,
    onClick: () => {
      window.open('https://www.instagram.com/mayank.808/');
    },
  },
  // {
  //   key: 'Spotify',
  //   icon: RiSpotifyFill,
  //   onClick: () => {},
  // },
];

const SocialBar = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-1 pb-5 max-sm:ml-10 max-sm:mr-10'>
      {buttons.map((button, index) => (
        <IconButton
          key={button.key}
          title={button.title}
          icon={button.icon}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
};

export default SocialBar;
