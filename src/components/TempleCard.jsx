import { motion } from "framer-motion";

import {
  useNavigate,
} from "react-router-dom";

function TempleCard({
  place,
  index,
  deletePlace,
}) {

  const navigate =
    useNavigate();

  return (

    <motion.div
      initial={{
        opacity:0,
        y:50,
      }}
      animate={{
        opacity:1,
        y:0,
      }}
      transition={{
        duration:0.5,
      }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 duration-300"
    >

      {/* IMAGE */}
      <img
        src={
          place.image ||

          `https://picsum.photos/600/400?random=${index}`
        }

        alt={
          place.name
        }

        className="w-full h-72 object-cover"
      />

      <div className="p-6">

        {/* TITLE */}
        <h2 className="text-2xl font-bold">

          {place.name}

        </h2>

        {/* STATE */}
        <p className="text-indigo-600 font-semibold mt-2">

          📍 {place.state}

        </p>

        {/* DEITY */}
        <p className="mt-3">

          🛕 Deity:{" "}

          {place.famousFor ||
            "Unknown"}

        </p>

        {/* CATEGORY */}
        <p className="mt-2">

          🏛️ Category:{" "}

          {place.category ||
            "Traditional"}

        </p>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-700 leading-7 line-clamp-3">

          {place.description ||

            "A spiritually significant temple in India."}

        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-6">

          {/* OPEN JOURNEY */}
          <button

            onClick={() =>
              navigate(
                `/journey/${place._id}`
              )
            }

            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl"
          >

            Open Journey 🚀

          </button>

          {/* VIEW DETAILS */}
          <button

            onClick={() =>
              navigate(
                `/temple/${place._id}`,
                {
                  state:{
                    place
                  }
                }
              )
            }

            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl"
          >

            View Details ✨

          </button>

          {/* OPEN MAPS */}
          <a

            href={
              place.mapLink
            }

            target="_blank"
            rel="noreferrer"

            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
          >

            Open Maps 🗺️

          </a>

          {/* DELETE */}
          <button

            onClick={() =>
              deletePlace(
                place._id
              )
            }

            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"
          >

            Delete ❌

          </button>

        </div>

      </div>

    </motion.div>

  );

}

export default TempleCard;