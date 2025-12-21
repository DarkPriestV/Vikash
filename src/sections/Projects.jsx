import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import { getCloudinaryImage } from "../utils/cloudinary";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  // preview holds ONLY imageId (not URL)
  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
        />
      ))}

      {/* 👇 THIS IS THE CLOUDINARY PART */}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 w-80 h-56 rounded-lg object-cover shadow-lg pointer-events-none"
          src={getCloudinaryImage(preview, "w_500,q_auto")}
          style={{ x: springX, y: springY }}
          alt="Project preview"
        />
      )}
    </section>
  );
};

export default Projects;
