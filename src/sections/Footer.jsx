import { mySocials } from "../constants";
import { getCloudinaryImage } from "../utils/cloudinary";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {mySocials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={getCloudinaryImage(social.icon, "w_24,q_auto")}
              alt={social.name}
              className="w-5 h-5"
            />
          </a>
        ))}
      </div>

      <p>© 2025 Vikash. All rights reserved.</p>
    </section>
  );
};

export default Footer;
