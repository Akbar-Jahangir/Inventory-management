import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppInsideLayout: React.FC = () => {
  return (
    <div className="w-[100%] h-fit xl:h-[100vh] bg-lightgray dar flex md:flex-row flex-col dark:bg-[#121212]">
      <Sidebar />
      <div className="w-[100%]">
        <Navbar />
        <div className=" h-[63vh] md:h-[79.9vh]  overflow-y-scroll mx-auto w-[95%] mt-[22px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppInsideLayout;
