import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { getCloudinaryImage } from "../utils/cloudinary";


const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  

  return (
    <section className="pointer-events-none absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 -z-50"
          style={{
           backgroundImage: `url(${getCloudinaryImage("sky_lkgixu")})`,

            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />

        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: `url(${getCloudinaryImage("mountain-3_wvsqbi")})`,
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />

        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${getCloudinaryImage("planets_tj85w0")})`,
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${getCloudinaryImage("mountain-2_u7oply")})`,
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${getCloudinaryImage("mountain-1_n5qwjx")})`,
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
