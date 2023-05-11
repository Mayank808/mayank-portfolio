import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const RoomModelLoadingSpinner = () => (
  <Spinner
    className='
    absolute
    left-1/2
        top-1/2
        h-[4vh]
        w-[4vh]
        border-blue-500
        text-blue-500
      '
  />
);

export const RoomModelContainer = forwardRef(({ children }, ref) => (
  <Box ref={ref} className='voxel-room relative m-auto h-full w-full' m='auto'>
    {children}
  </Box>
));

RoomModelContainer.displayName = 'RoomModelContainer';

const Loader = () => {
  return (
    <RoomModelContainer>
      <RoomModelLoadingSpinner />
    </RoomModelContainer>
  );
};

export default Loader;
