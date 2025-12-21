import { OrbitingCircles } from "./OrbitingCircles";
import { getCloudinaryImage } from "../utils/cloudinary";

export function Frameworks() {
  const skills = [
    "auth0",
    "java",
    "powerbi",
    "bootstrap1",
    "css31",
    "dotnet",
    "dotnetcore",
    "github",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "mysql",
    "tailwindcss1",
    "vitejs",
    "excel",
    "hibernate1",
    "springboot",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} publicId={skill} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill) => (
          <Icon key={`inner-${skill}`} publicId={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ publicId }) => (
  <img
    src={getCloudinaryImage(publicId, "w_40,h_40,q_auto,f_auto")}
    alt={publicId}
    className="duration-200 rounded-sm hover:scale-110"
  />
);
