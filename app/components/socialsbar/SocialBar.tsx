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
    icon: AiFillGithub,
    onClick: () => {
      window.open('https://github.com/mayank808');
    },
  },
  {
    key: 'Email',
    icon: AiOutlineMail,
    onClick: () => {
      window.open('mailto:m4mehra@uwaterloo.ca');
    },
  },
  {
    key: 'Linkedin',
    icon: AiFillLinkedin,
    onClick: () => {
      window.open('https://www.linkedin.com/in/mayank808/');
    },
  },
  {
    key: 'Calendly',
    icon: BiCoffeeTogo,
    onClick: () => {
      window.open('https://calendly.com/mayank808/schedule');
    },
  },
  {
    key: 'Resume',
    icon: MdOutlineContactPage,
    onClick: () => {
      window.open(
        'https://drive.google.com/file/d/149rpUL42kUN8CgewFcHolcbQx_Qgx37a/view'
      );
    },
  },
  {
    key: 'Instagram',
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
    <div className='flex flex-row gap-1 overflow-x-auto sm:gap-2 sm:overflow-auto'>
      {buttons.map((button, index) => (
        <IconButton
          key={button.key}
          icon={button.icon}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
};

export default SocialBar;
