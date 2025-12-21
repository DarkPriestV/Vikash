import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { getCloudinaryImage } from "../utils/cloudinary";


const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
  <div key={tag.id} className="flex items-center gap-2">
    <img
      src={getCloudinaryImage(tag.icon, "w_32,h_32,q_auto,f_auto")}
      alt={tag.name}
      className="rounded"
    />
    <span>{tag.name}</span>
  </div>
))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
           <img
            src={getCloudinaryImage("arrow", "w_20,q_auto")}
            className="w-5"
            alt="arrow"
          />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
