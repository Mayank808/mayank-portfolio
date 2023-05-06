import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const RoomModelLoadingSpinner = () => (
  <Spinner
    size='xl'
    className='
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2 -translate-y-1/2 transform
        border-blue-500
        text-blue-500
      '
  />
);

export const RoomModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className='voxel-room h-full w-full m-auto relative'
    m='auto'
  >
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
