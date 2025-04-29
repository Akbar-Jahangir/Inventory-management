import { useState, useEffect } from "react";
import SplashScreen from "../components/SplashScreen";
import Signup from "../components/Signup";
import DarkModeToggler from "../components/DarkModeToggler";

function DisplayLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <div className="relative w-[100%] flex justify-center items-center h-screen">
      <div className="max-w-[430px] w-[100%] flex justify-center">
        {showSplash ? <SplashScreen /> : <Signup />}
      </div>

      {/* Dark Mode Toggler Positioned Bottom-Right */}
      <div className="absolute bottom-4 right-4">
        <DarkModeToggler />
      </div>
    </div>
  );
}

export default DisplayLayout;
