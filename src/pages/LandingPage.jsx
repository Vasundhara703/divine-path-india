import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (

    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <div className="relative h-screen">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

          <motion.h1
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-6xl md:text-8xl font-bold"
          >
            DivinePath India 🇮🇳
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="mt-8 text-2xl max-w-4xl leading-relaxed"
          >
            Explore ancient temples,
            sacred journeys,
            spiritual destinations
            and divine history of India.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              navigate("/explore")
            }
            className="mt-12 bg-indigo-600 hover:bg-indigo-700 px-10 py-5 rounded-2xl text-2xl shadow-2xl"
          >
            Begin Journey ✨
          </motion.button>

        </div>
      </div>

    </div>
  );
}

export default LandingPage;