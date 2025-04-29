import React from "react";
import { LogoSvg } from "./IconsSvgs";


const SplashScreen: React.FC = () => {

  
  return (
    <>
      <div className="w-[100%] flex flex-col items-center animate-pulse">
        <LogoSvg width='180'  />
        <h1 className="mt-[30px] font-bold text-3xl text-secondary">KANBAN</h1>
      </div>
    </>
  )
}

export default SplashScreen;
