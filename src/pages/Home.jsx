import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TempleCard from "../components/TempleCard";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import TempleModal from "../components/TempleModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Home({

darkMode,
setDarkMode

}) {

  const [places, setPlaces] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [categoryFilter, setCategoryFilter] =
    useState("All");

  const [stateFilter, setStateFilter] =
    useState("All");

  const [selectedTemple, setSelectedTemple] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // FETCH TEMPLES
  const fetchPlaces = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8000/api/tasks"
        );

      console.log(
        response.data
      );

      setPlaces(
        response.data
      );

    }

    catch(error){

      console.log(
        error
      );

    }

    finally{

      setLoading(false);

    }

  };

  useEffect(()=>{

    fetchPlaces();

  },[]);

  // DELETE TEMPLE
  const deletePlace =
  async(id)=>{

    try{

      await axios.delete(

        `http://localhost:8000/api/tasks/${id}`

      );

      fetchPlaces();

    }

    catch(error){

      console.log(
        error
      );

    }

  };

  return (

    <div
className={`min-h-screen transition-all duration-500

${
darkMode
? "bg-black text-white"
: "bg-gray-100 text-black"
}`}
>

      {/* NAVBAR */}
<Navbar
darkMode={darkMode}
setDarkMode={setDarkMode}
/>


{/* HERO */}
<Hero/>
{/* TEMPLE VIDEO EXPERIENCE */}

<div className="max-w-7xl mx-auto px-6 mt-20">

<h2 className="text-5xl font-bold text-center mb-10">

Temple Scenery Experience 🎥

</h2>

<Swiper
modules={[Autoplay]}
spaceBetween={30}
slidesPerView={1}
loop={true}
autoplay={{
delay:4000,
disableOnInteraction:false
}}
>

<SwiperSlide>

<div className="rounded-3xl overflow-hidden h-[500px]">

<video
autoPlay
muted
loop
playsInline
className="w-full h-full object-cover"
>

<source
src="/videos/kedarnath.mp4"
type="video/mp4"
/>

</video>

</div>

<h3 className="text-center text-2xl mt-4">

🛕 Kedarnath Experience

</h3>

</SwiperSlide>


<SwiperSlide>

<div className="rounded-3xl overflow-hidden h-[500px]">

<video
autoPlay
muted
loop
playsInline
className="w-full h-full object-cover"
>

<source
src="/videos/badrinath.mp4"
type="video/mp4"
/>

</video>

</div>

<h3 className="text-center text-2xl mt-4">

🛕 Badrinath Experience

</h3>

</SwiperSlide>


<SwiperSlide>

<div className="rounded-3xl overflow-hidden h-[500px]">

<video
autoPlay
muted
loop
playsInline
className="w-full h-full object-cover"
>

<source
src="/videos/somnath.mp4"
type="video/mp4"
/>

</video>

</div>

<h3 className="text-center text-2xl mt-4">

🛕 Somnath Experience

</h3>

</SwiperSlide>

</Swiper>

</div>
      <div className="max-w-7xl mx-auto p-6">

        {/* SEARCH */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* FILTER */}
        <Filters
          categoryFilter={
            categoryFilter
          }

          setCategoryFilter={
            setCategoryFilter
          }

          stateFilter={
            stateFilter
          }

          setStateFilter={
            setStateFilter
          }
        />

        {/* LOADING */}
        {loading && (

          <div className="text-center mt-16">

            <h1 className="text-4xl font-bold">

              Loading Temples... 🛕

            </h1>

          </div>

        )}

        {/* TEMPLE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {!loading &&

          places

          .filter((place)=>{

            const templeName =
              place.name || "";

            const deity =
              place.famousFor || "";

            const state =
              place.state || "";

            const matchesSearch =

              templeName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

            const matchesCategory =

              categoryFilter ===
              "All"

              ||

              deity ===
              categoryFilter;

            const matchesState =

              stateFilter ===
              "All"

              ||

              state ===
              stateFilter;

            return(

              matchesSearch &&
              matchesCategory &&
              matchesState

            );

          })

          .map((place,index)=>(

            <TempleCard

              key={
                place._id ||
                index
              }

              place={
                place
              }

              index={
                index
              }

              deletePlace={
                deletePlace
              }

              setSelectedTemple={
                setSelectedTemple
              }

            />

          ))

          }

        </div>

      </div>

      {/* MODAL */}
      {selectedTemple && (

        <TempleModal

          place={
            selectedTemple
          }

          closeModal={()=>

            setSelectedTemple(
              null
            )

          }

        />

      )}

      {/* FOOTER */}
      <Footer/>

    </div>

  );

}

export default Home;