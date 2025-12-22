import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";

import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";
import { Environment } from "@react-three/drei";


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id="home"
     className="relative h-screen w-screen overflow-hidden"

    >
      <HeroText />
      <ParallaxBackground />

      {/* 3D Canvas layer */}
      <figure className="pointer-events-none absolute inset-0 z-10">
        <Canvas
        
          camera={{ position: [0, 1.2, 2.5], fov: 45 }}

          gl={{ alpha: true }}
          style={{ background: "transparent" }}
          
        >

           <Suspense fallback={<Loader />}>

            {/* 🔥 LIGHTS (THIS FIXES BLACK MODEL) */}
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <directionalLight position={[-5, 3, 5]} intensity={1} />

            {/* 🌆 Environment lighting for realism */}
            <Environment preset="city" />
          <Astronaut
  scale={1.2}
  position={[0.2, -1.8, 0]}
  rotation={[0, 0.5, 0]}
  
/>

              {/* <Astronaut
                scale={isMobile ? 0.45 : 0.6}
                position={isMobile ? [0, -2, 3.2] : [0, -2, 2]}
              /> */}
          
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

/* ✅ CORRECT useFrame usage */
function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
  return null;
}

export default Hero;
