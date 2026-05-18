import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import Explore from "./pages/Explore";
import Login from "./components/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import TempleDetails from "./pages/TempleDetails";
import JourneyPlanner from "./pages/JourneyPlanner";
import JourneyComplete from "./pages/JourneyComplete";

function App() {

  const [darkMode,setDarkMode]=
  useState(true);

  return (

    <div
      className={
        darkMode
        ? "dark"
        : ""
      }
    >

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={<LandingPage />}
          />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/temple/:id"
            element={<TempleDetails />}
          />

          <Route
            path="/journey/:id"
            element={<JourneyPlanner />}
          />

          <Route
            path="/journey-complete"
            element={<JourneyComplete />}
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute>

                <Home
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />

              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;