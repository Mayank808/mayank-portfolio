import dynamic from 'next/dynamic';
import RoomObjectLoader from './RoomObjectLoader';

const LazyVoxelRoomObject = dynamic(() => import('./voxel-room'), {
  ssr: false,
  loading: () => <RoomObjectLoader />,
});

const VoxelCanvas = () => {
  return (
    <div className='z-[1] h-[70vh] w-full lg:h-screen'>
      <LazyVoxelRoomObject />
    </div>
  );
};

export default VoxelCanvas;
