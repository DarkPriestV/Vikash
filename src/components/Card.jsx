import { motion } from "motion/react";
import { getCloudinaryImage } from "../utils/cloudinary";

const Card = ({ style, text, image, containerRef }) => {
  return (
    <motion.div
      className="absolute z-20 cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {/* ICON CARD */}
      {image && (
        <img
          src={getCloudinaryImage(image, "w_40,h_40,q_auto,f_auto")}
          alt={image}
          className="w-8 h-8 rounded pointer-events-none"
        />
      )}

      {/* TEXT CARD */}
      {text && (
        <div className="px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem]">
          {text}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
