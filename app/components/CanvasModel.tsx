import dynamic from 'next/dynamic';
import RoomObjectLoader from './RoomObjectLoader';

const LazyVoxelRoomObject = dynamic(() => import('./voxel-room'), {
  ssr: false,
  loading: () => <RoomObjectLoader />,
});

const CanvasModel = () => {
  return (
    <div className='z-[-1] h-screen w-full bg-red-400 max-lg:h-2/3'>
      <LazyVoxelRoomObject />
    </div>
  );
};

export default CanvasModel;
