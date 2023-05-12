import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const RoomModelLoadingSpinner = () => (
  <div className='absolute inset-0 flex items-center justify-center'>
    <Spinner className='h-8 w-8 border-white text-white' />
  </div>
);

export const RoomModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className='voxel-room relative m-auto flex h-full w-full items-center justify-center'
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
