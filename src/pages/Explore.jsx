import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ExploreNavbar from "../components/ExploreNavbar";
import founderImage from "../assets/vasu.jpg";

function Explore() {

  const navigate = useNavigate();

  const templeImages = [

    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1583391733981-849840e7e5c4?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200&auto=format&fit=crop",

  ];

  return (

    <>
    
      <ExploreNavbar />

      <div className="bg-black text-white overflow-hidden">

        {/* HEADER */}
        <div className="text-center py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">

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
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Welcome to
            <br />
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
              delay: 0.5,
            }}
            className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >

            Discover India's spiritual beauty,
            sacred temples, divine history,
            holy rivers and pilgrimage journeys.

          </motion.p>

        </div>

        {/* MOVING TEMPLE SECTION */}
        <div className="py-20 bg-gray-950 overflow-hidden">

          <h2 className="text-5xl font-bold text-center mb-14">
            Sacred Places of India 🛕
          </h2>

          <motion.div
            animate={{
              x: [0, -2000],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex gap-8 w-max"
          >

            {[...templeImages,
              ...templeImages,
            ].map((img, index) => (

              <div
                key={index}
                className="min-w-[420px] h-[280px] rounded-3xl overflow-hidden shadow-2xl"
              >

                <img
                  src={img}
                  alt="Temple"
                  className="w-full h-full object-cover hover:scale-110 duration-500"
                />

              </div>

            ))}

          </motion.div>

        </div>

        {/* ABOUT SECTION */}
        <div className="bg-gradient-to-b from-gray-950 to-black py-24 px-8">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >

              <img
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200&auto=format&fit=crop"
                alt="Temple"
                className="rounded-3xl shadow-2xl"
              />

            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Discover the
                <br />
                Spiritual Soul
                <br />
                of India 🇮🇳
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-gray-300">

                India is home to thousands
                of ancient temples,
                pilgrimage destinations,
                sacred rivers and divine
                traditions.

                Explore spiritual cities,
                Jyotirlingas and holy
                places connected to
                Indian culture and history.

              </p>

            </motion.div>

          </div>

        </div>

       {/* FOUNDERS SECTION */}
<div className="bg-black py-24 px-8">

  <h2 className="text-6xl font-bold text-center mb-16">
    Meet The Founder ✨
  </h2>

  <div className="flex justify-center">

    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="bg-gray-900 p-10 rounded-3xl shadow-2xl text-center max-w-xl w-full"
    >

      {/* IMAGE */}
      <img
        src={founderImage}
        alt="Founder"
        className="w-52 h-52 rounded-full mx-auto object-cover border-4 border-indigo-500 shadow-2xl"
      />

      {/* NAME */}
      <h3 className="text-4xl font-bold mt-8">
        Vasundhara Mishra
      </h3>

      {/* ROLE */}
      <p className="text-indigo-400 mt-3 text-xl">
        Founder  <br />
       FULL STACK DEVELOPER
      </p>

      {/* DESCRIPTION */}
      <p className="mt-6 text-gray-300 leading-relaxed text-lg">

        Creator of DivinePath India 🇮🇳

        Passionate about spirituality,
        immersive UI/UX experiences,
        modern frontend development
        and building meaningful digital
        journeys connected with Indian culture.

      </p>

    </motion.div>

  </div>



        </div>

        {/* CATEGORY SECTION */}
        <div className="bg-gray-950 py-24 px-8">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            Explore Categories 🛕
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* CARD 1 */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="bg-black p-8 rounded-3xl shadow-2xl"
            >

              <div className="text-6xl">
                🕉️
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Jyotirlingas
              </h3>

              <p className="mt-4 text-gray-300">
                Sacred Shiva temples
                across India.
              </p>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="bg-black p-8 rounded-3xl shadow-2xl"
            >

              <div className="text-6xl">
                🌊
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Holy Ghats
              </h3>

              <p className="mt-4 text-gray-300">
                Discover sacred rivers
                and divine ceremonies.
              </p>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="bg-black p-8 rounded-3xl shadow-2xl"
            >

              <div className="text-6xl">
                🛕
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Ancient Temples
              </h3>

              <p className="mt-4 text-gray-300">
                Explore historical and
                spiritual architecture.
              </p>

            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="bg-black p-8 rounded-3xl shadow-2xl"
            >

              <div className="text-6xl">
                🚩
              </div>

              <h3 className="text-3xl font-bold mt-6">
                Pilgrimage
              </h3>

              <p className="mt-4 text-gray-300">
                Experience sacred yatras
                and spiritual journeys.
              </p>

            </motion.div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-20">

            <button
              onClick={() =>
                navigate("/login")
              }
              className="bg-indigo-600 hover:bg-indigo-700 px-10 py-5 rounded-2xl text-2xl shadow-xl"
            >
              Login ✨
            </button>

            <button
              onClick={() =>
                navigate("/signup")
              }
              className="bg-white text-black hover:bg-gray-300 px-10 py-5 rounded-2xl text-2xl shadow-xl"
            >
              Signup 🚀
            </button>

          </div>

        </div>

        {/* FOOTER */}
        <div className="bg-black text-center py-8 border-t border-gray-800">

          <p className="text-gray-400">
            © 2026 DivinePath India 🇮🇳
          </p>

        </div>

      </div>

    </>

  );
}

export default Explore;