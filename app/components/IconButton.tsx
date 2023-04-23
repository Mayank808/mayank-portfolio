'use client';

import React from 'react';
import { IconType } from 'react-icons';

export interface IconButtonProps {
  key: string;
  icon: IconType;
  label?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  disabled,
  outline,
  small,
}) => {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      data-te-ripple-init
      data-te-ripple-color='light'
      className={`aspect-w-1 aspect-h-1 m-1 mb-2 inline-block rounded-full p-3 text-xs font-medium 
                  uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out 
                  hover:opacity-80 hover:shadow-lg hover:translate-y-2 focus:shadow-lg focus:outline-none focus:ring-0
                  active:shadow-lg disabled:cursor-not-allowed disabled:opacity-70
              ${outline ? 'bg-white' : 'bg-rose-500'}
              ${outline ? 'border-black' : 'bg-rose-500'}
              ${outline ? 'text-black' : 'text-white'}
              ${small ? 'py-1' : 'py-3'}
              ${small ? 'text-sm' : 'text-md'}
              ${small ? 'font-light' : 'font-semibold'}
              ${small ? 'border-[1px]' : 'border-[2px]'}`}
      style={{ backgroundColor: '#c13584' }}
    >
      {Icon && <Icon size={small ? 24 : 30} />}
      {label}
    </button>
  );
};

export default IconButton;
