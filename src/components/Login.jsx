import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {

      localStorage.setItem(
        "isLoggedIn",
        true
      );

      navigate("/home");

    } else {

      alert(
        "Invalid Email or Password"
      );
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden md:flex md:w-1/2 relative">

        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop"
          alt="Temple"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-10">

          <h1 className="text-6xl font-bold text-center">
            DivinePath India 🇮🇳
          </h1>

          <p className="mt-6 text-2xl text-center leading-relaxed">
            Begin your spiritual
            journey across India.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 bg-gray-100 flex justify-center items-center p-8">

        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

          <h2 className="text-4xl font-bold text-center text-indigo-700">
            Login ✨
          </h2>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border-2 border-gray-300 rounded-2xl px-5 py-4 mt-8"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border-2 border-gray-300 rounded-2xl px-5 py-4 mt-5"
          />

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl text-xl"
          >
            Login
          </button>

          <p className="text-center text-gray-500 mt-6">
            Demo Login:
            <br />
            admin@gmail.com
            <br />
            123456
          </p>
<p className="text-center mt-6 text-gray-300">

  Don't have an account?

  <span
    onClick={() =>
      navigate("/signup")
    }
    className="text-indigo-400 cursor-pointer ml-2"
  >
    Signup
  </span>

</p>
        </div>
      </div>
    </div>
  );
}

export default Login;