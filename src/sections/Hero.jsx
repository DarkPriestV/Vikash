import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";

import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";

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
          camera={{ position: [0, 1, 3] }}
          gl={{ alpha: true }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [0, -1, 0]}
              />
            </Float>
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
