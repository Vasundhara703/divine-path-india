import { useNavigate } from "react-router-dom";

function Navbar({

  darkMode,
  setDarkMode

}) {

  const navigate =
    useNavigate();

  const logout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    navigate("/");
  };

  return (

    <div className="bg-indigo-700 text-white px-10 py-5 flex justify-between items-center shadow-lg sticky top-0 z-50">

      {/* LOGO */}

      <h1 className="text-3xl font-bold">

        🛕 DivinePath India

      </h1>


      {/* RIGHT SIDE BUTTONS */}

      <div className="flex items-center gap-5">

        {/* DARK MODE BUTTON */}

        <button

          onClick={() =>

            setDarkMode(
              !darkMode
            )

          }

          className="bg-white/20 hover:bg-white/30 px-5 py-2 rounded-xl transition-all"

        >

          {

            darkMode

            ?

            "☀️ Light Mode"

            :

            "🌙 Dark Mode"

          }

        </button>


        {/* LOGOUT */}

        <button

          onClick={logout}

          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl"

        >

          Logout

        </button>

      </div>

    </div>

  );

}

export default Navbar;