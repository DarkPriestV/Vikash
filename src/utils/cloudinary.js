// src/utils/cloudinary.js
const CLOUD_NAME = "dcqnlp7od";

export const getCloudinaryImage = (
  publicId,
  options = "w_600,q_auto"
) => {
  if (!publicId) return "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${options}/${publicId}`;
};
