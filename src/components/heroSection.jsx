import { useEffect, useState } from "react";
import { motion} from "framer-motion";
import { useNavigate } from "react-router-dom";


const posters = [
  {
    image: "/poster1.jpg",
    title: "Light Up Your Events",
    subtitle: "Explore the best lighting equipment.",
    buttonText: "Rent Lighting",
    route: "/items?category=lighting",
  },
  {
    image: "/poster.jpg",
    title: "Clear Sound, Perfect Vibe",
    subtitle: "Top audio gear for any event.",
    buttonText: "Rent Audio",
    route: "/items?category=audio",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posters.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
    navigate(posters[current].route);
  };

  return (
    <div className="w-full h-[90vh] relative overflow-hidden">
      {posters.map((poster, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={`absolute w-full h-full bg-cover bg-center ${
            index === current ? "z-10" : "z-0"
          }`}
          style={{ backgroundImage: `url(${poster.image})` }}
        >
          <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{poster.title}</h1>
            <p className="text-xl md:text-2xl mb-6">{poster.subtitle}</p>
            <button
              onClick={handleCTA}
              className="px-6 py-3 bg-accent hover:bg-accent-dark transition rounded-full text-white text-lg"
            >
              {poster.buttonText}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
