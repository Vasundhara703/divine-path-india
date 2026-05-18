import { useNavigate } from "react-router-dom";

function ExploreNavbar() {

  const navigate = useNavigate();

  return (

    <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-10 py-5 flex justify-between items-center border-b border-gray-800">

      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-3xl font-bold cursor-pointer"
      >
        🛕 DivinePath India
      </h1>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-10 text-lg">

        <button
          onClick={() => window.scrollTo({
            top: 700,
            behavior: "smooth",
          })}
          className="hover:text-indigo-400"
        >
          About
        </button>

        <button
          onClick={() => window.scrollTo({
            top: 1800,
            behavior: "smooth",
          })}
          className="hover:text-indigo-400"
        >
          Founders
        </button>

        <button
          onClick={() => window.scrollTo({
            top: 2800,
            behavior: "smooth",
          })}
          className="hover:text-indigo-400"
        >
          Categories
        </button>

      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">

        <button
          onClick={() => navigate("/login")}
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-black hover:bg-gray-300 px-5 py-2 rounded-xl"
        >
          Signup
        </button>

      </div>

    </div>
  );
}

export default ExploreNavbar;