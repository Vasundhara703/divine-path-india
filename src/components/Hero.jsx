import { motion } from "framer-motion";

function Hero() {

  return (

    <div className="relative h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop"
        alt="Temple"
        className="absolute inset-0 w-full h-full object-cover"
      />


      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/60" />


      {/* CONTENT */}

      <div className="relative z-10 text-center text-white px-6">

        <motion.h1
          initial={{
            opacity:0,
            y:-50
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1
          }}
          className="text-5xl md:text-7xl font-bold"
        >

          Explore Spiritual India 🇮🇳

        </motion.h1>


        <motion.p
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          transition={{
            delay:1
          }}
          className="mt-6 text-xl md:text-2xl max-w-4xl leading-relaxed mx-auto"
        >

          Discover temples,
          pilgrimage destinations,
          holy places and spiritual journeys
          across India.

        </motion.p>

      </div>

    </div>

  );

}

export default Hero;