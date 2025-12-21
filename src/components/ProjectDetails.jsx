import { motion } from "motion/react";
import { getCloudinaryImage } from "../utils/cloudinary";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img
            src={getCloudinaryImage("close", "w_20,q_auto")}
            className="w-5"
            alt="close"
          />
        </button>
        <img src={getCloudinaryImage(image, "w_1200,q_auto,f_auto")}alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                 src={getCloudinaryImage(tag.icon, "w_40,h_40,q_auto,f_auto")}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
              View Project{" "}
               <img
            src={getCloudinaryImage("arrowup", "w_20,q_auto")}
            className="w-5"
            alt="arrowup"
          />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
