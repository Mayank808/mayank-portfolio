import Image from 'next/image';

interface HeadshotProps {
  src: string;
  alt: string;
}

const Headshot: React.FC<HeadshotProps> = ({ src, alt }) => {
  return (
    <Image
      className='rounded-full border-2 border-white'
      height={150}
      width={150}
      alt={alt}
      src={src}
    />
  );
};

export default Headshot;
