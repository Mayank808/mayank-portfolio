import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from './gltfModel';
import {
  RoomModelContainer,
  RoomModelLoadingSpinner,
} from './RoomObjectLoader';

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelRoom = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  const loadModelPath = '/roomV3.glb'; 
  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const currScreenWidth = container.clientWidth;
      const currScreenHeight = container.clientHeight;

      renderer.setSize(currScreenWidth, currScreenHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const currScreenWidth = container.clientWidth;
      const currScreenHeight = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      // load up settings
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(currScreenWidth, currScreenHeight);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const x_pos = currScreenWidth >= 1024 ? 150 : -1;
      const target = new THREE.Vector3(x_pos, 2, 0);
      const initialCameraPosition = new THREE.Vector3(
        150 * Math.sin(0.2 * Math.PI),
        150,
        180 * Math.cos(0.2 * Math.PI) + 100
      );
      
      const camera = new THREE.PerspectiveCamera(75, currScreenWidth / currScreenHeight, 0.1, 3000);
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      // controls orbit after initial load up animation
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      controls.autoRotateSpeed = 1;

      loadGLTFModel(scene, loadModelPath, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        const x_pos = currScreenWidth >= 1024 ? 150 : -1;
        const target = new THREE.Vector3(x_pos, 2, 0);
        camera.lookAt(target);

        // initial load up animation
        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 8;
          camera.position.y = 150;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        } else { // orbit controls handled by three.js OrbitControls
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  return (
    <RoomModelContainer ref={refContainer}>
      {loading && <RoomModelLoadingSpinner />}
    </RoomModelContainer>
  );
};

export default VoxelRoom;
