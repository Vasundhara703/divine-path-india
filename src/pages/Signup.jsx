import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Signup() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const handleSignup = () => {

    if (
      !name ||
      !email ||
      !password
    ) {

      alert(
        "Please fill all fields"
      );

      return;
    }

    alert(
      "Account Created Successfully ✨"
    );

    navigate("/login");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CARD */}
      <motion.div

        initial={{
          opacity: 0,
          y: 50,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl w-[90%] max-w-md shadow-2xl text-white"
      >

        <h1 className="text-5xl font-bold text-center">
          Create Account ✨
        </h1>

        <p className="text-center mt-4 text-gray-300">
          Join DivinePath India 🇮🇳
        </p>

        {/* NAME */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full mt-8 px-5 py-4 rounded-2xl bg-white/20 border border-white/20 outline-none"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="w-full mt-5 px-5 py-4 rounded-2xl bg-white/20 border border-white/20 outline-none"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full mt-5 px-5 py-4 rounded-2xl bg-white/20 border border-white/20 outline-none"
        />

        {/* BUTTON */}
        <motion.button

          whileHover={{
            scale: 1.05,
          }}

          whileTap={{
            scale: 0.95,
          }}

          onClick={handleSignup}

          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 py-4 rounded-2xl text-xl font-semibold"
        >
          Signup 🚀
        </motion.button>

        {/* LOGIN LINK */}
        <p className="text-center mt-6 text-gray-300">

          Already have an account?

          <span
            onClick={() =>
              navigate("/login")
            }
            className="text-indigo-400 cursor-pointer ml-2"
          >
            Login
          </span>

        </p>

      </motion.div>

    </div>
  );
}

export default Signup;