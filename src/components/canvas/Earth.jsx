import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const EarthModel = () => {
  const [scale, setScale] = useState(2);
  const modelPath = process.env.PUBLIC_URL + "/planet/scene.gltf";
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) setScale(2);
      else if (width > 960) setScale(1.8);
      else if (width > 768) setScale(1.6);
      else if (width > 480) setScale(1.4);
      else setScale(1.2);
    };

    handleResize(); // Initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <primitive object={scene} scale={scale} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  useEffect(() => {
    useGLTF.preload(process.env.PUBLIC_URL + "/planet/scene.gltf");
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <EarthModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
