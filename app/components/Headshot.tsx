import Image from 'next/image';

interface HeadshotProps {
  src: string;
  alt: string;
}

const Headshot: React.FC<HeadshotProps> = ({ src, alt }) => {
  return (
    <Image
      className='rounded-full border-2 border-white'
      height={200}
      width={200}
      alt={alt}
      src={src}
    />
  );
};

export default Headshot;
