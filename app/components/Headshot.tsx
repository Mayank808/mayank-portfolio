import Image from 'next/image';

interface HeadshotProps {
  src: string;
  alt: string;
}

const Headshot: React.FC<HeadshotProps> = ({ src, alt }) => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <Image
        className='rounded-full border-2 border-white'
        height={150}
        width={150}
        alt={alt}
        src={src}
      />
    </div>
  );
};

export default Headshot;
