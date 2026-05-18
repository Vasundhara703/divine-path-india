import { motion } from "framer-motion";

function TempleModal({
  place,
  closeModal,
}) {

  if (!place) return null;

  return (

    <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-6">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="bg-white rounded-3xl overflow-y-auto max-h-[90vh] max-w-5xl w-full shadow-2xl"
      >

        {/* IMAGE */}
        <img
          src={`https://picsum.photos/1200/600?random=${Math.random()}`}
          alt="Temple"
          className="w-full h-[350px] object-cover"
        />

        {/* CONTENT */}
        <div className="p-8">

          {/* TITLE */}
          <div className="flex justify-between items-center">

            <h2 className="text-4xl font-bold text-indigo-700">
              {place.Temple_Name ||
                place.name}
            </h2>

            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
            >
              Close
            </button>

          </div>

          {/* DETAILS */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>

              <p className="text-xl mb-4">
                📍 <span className="font-bold">
                  State:
                </span>{" "}
                {place.State ||
                  place.state}
              </p>

              <p className="text-xl mb-4">
                🛕 <span className="font-bold">
                  Deity:
                </span>{" "}
                {place.Deity ||
                  "Unknown"}
              </p>

              <p className="text-xl mb-4">
                🏛️ <span className="font-bold">
                  Architecture:
                </span>{" "}
                {place.Architecture_Style ||
                  "Traditional"}
              </p>

              <p className="text-xl mb-4">
                📜 <span className="font-bold">
                  Established:
                </span>{" "}
                {place.Established_Year ||
                  "Ancient"}
              </p>

            </div>

            <div>

              <p className="text-xl mb-4">
                🎉 <span className="font-bold">
                  Festivals:
                </span>{" "}
                {place.Festivals_Celebrated ||
                  "Temple Festivals"}
              </p>

              <p className="text-xl mb-4">
                🚆 <span className="font-bold">
                  Transport:
                </span>{" "}
                {place.Transport_Info ||
                  "Accessible by road"}
              </p>

              <a
                href={`https://maps.google.com/?q=${place.Latitude},${place.Longitude}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Open Maps 🗺️
              </a>

            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="mt-10">

            <h3 className="text-3xl font-bold mb-5">
              Historical Significance 📖
            </h3>

            <p className="text-gray-700 leading-8 text-lg">
              {place.Historical_Significance ||
                "A spiritually significant temple in India."}
            </p>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default TempleModal;