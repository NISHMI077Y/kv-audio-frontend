import { useNavigate } from "react-router-dom";
import { FaLightbulb, FaVolumeUp } from "react-icons/fa";

export default function CategoriesSection() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Audio",
      icon: <FaVolumeUp className="text-5xl text-white" />,
      bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      query: "audio",
    },
    {
      name: "Lighting",
      icon: <FaLightbulb className="text-5xl text-white" />,
      bg: "bg-gradient-to-br from-yellow-400 to-orange-500",
      query: "lighting",
    },
  ];

  return (
    <div className="w-full py-12 px-6 bg-secondary text-white">

<div className="overflow-hidden whitespace-nowrap mb-8">
  <div className="inline-block animate-marquee">
    <span className="text-accent text-3xl font-semibold mr-8">
      Click, Easily Access the best selection.
    </span>
  </div>
</div>


      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/items?category=${cat.query}`)}
            className={`w-64 h-48 rounded-xl p-6 cursor-pointer shadow-xl transform hover:scale-105 transition-all duration-300 ${cat.bg} flex flex-col justify-center items-center`}
          >
            {cat.icon}
            <p className="text-xl font-semibold mt-4">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
