import React, { useState } from "react";
import {
  HomeSvg,
  InventorySvg,
  LogoSvg,
  LogoutSvg,
  ManageStoreSvg,
  OrderSvg,
  ReportSvg,
  SettingsSvg,
  SupplierSvg,
} from "./IconsSvgs";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import DarkModeToggler from "./DarkModeToggler";

const Sidebar: React.FC = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebar((prev) => !prev);
  };

  return (
    <>
      {/* Main Sidebar */}
      <div className="dark:bg-[#1E1E1E] dark:text-white xl:w-[20vw] md:w-[30vw] pt-6 flex flex-col items-center bg-white">
        <div className="w-[90%] h-[90%]">
          {/* Logo and Hamburger Menu */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-x-2">
              <LogoSvg width="48px" height="48px" />
              <h2 className="text-primary text-xl font-bold">KANBAN</h2>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              {!isSidebar ? (
                <RxHamburgerMenu
                  className="w-10 h-10 cursor-pointer"
                  onClick={toggleSidebar}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          {/* Sidebar Navigation for Desktop */}
          <div className="hidden md:flex flex-col h-[90%] relative">
            <div className="flex flex-col space-y-6">
              <div className="flex gap-4 items-center">
                <HomeSvg />
                <p>Dashboard</p>
              </div>

              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  `flex gap-4 items-center ${
                    isActive ? "text-blue font-bold" : "font-medium"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <InventorySvg color={isActive ? "#1570EF" : "#A0A0A0"} />
                    <p>Inventory</p>
                  </>
                )}
              </NavLink>

              <div className="flex gap-4 items-center">
                <ReportSvg />
                <p>Reports</p>
              </div>

              <NavLink
                to="/vendors"
                className={({ isActive }) =>
                  `flex gap-4 items-center ${
                    isActive ? "text-blue font-bold" : "font-medium"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <SupplierSvg color={isActive ? "#1570EF" : "#A0A0A0"} />
                    <p>Vendors</p>
                  </>
                )}
              </NavLink>

              <div className="flex gap-4 items-center">
                <OrderSvg />
                <p>Orders</p>
              </div>

              <div className="flex gap-4 items-center">
                <ManageStoreSvg />
                <p>Manage Store</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-[90%] flex flex-col space-y-6 absolute bottom-0">
              <div className="flex gap-4 items-center">
                <SettingsSvg />
                <p>Settings</p>
              </div>
              <div className="flex gap-4 items-center">
                <LogoutSvg />
                <p>Log Out</p>
              </div>
              <div className="flex gap-4 items-center">
                <DarkModeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation for Mobile */}
      {isSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 left-0 w-[100%] bg-white dark:bg-[#1E1E1E] p-4">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-center gap-x-2 mb-8">
                  <div className="flex items-center gap-2">
                    <LogoSvg width="48px" height="48px" />
                    <h2 className="text-primary text-xl font-bold">KANBAN</h2>
                  </div>
                  <RxCross1
                  className="w-10 h-10 cursor-pointer"
                  onClick={toggleSidebar}
                />
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="flex gap-4 items-center">
                    <HomeSvg />
                    <p>Dashboard</p>
                  </div>

                  <NavLink
                    to="/inventory"
                    className={({ isActive }) =>
                      `flex gap-4 items-center ${
                        isActive ? "text-blue font-bold" : "font-medium"
                      }`
                    }
                    onClick={toggleSidebar}
                  >
                    {({ isActive }) => (
                      <>
                        <InventorySvg
                          color={isActive ? "#1570EF" : "#A0A0A0"}
                        />
                        <p>Inventory</p>
                      </>
                    )}
                  </NavLink>

                  <div className="flex gap-4 items-center">
                    <ReportSvg />
                    <p>Reports</p>
                  </div>

                  <NavLink
                    to="/vendors"
                    className={({ isActive }) =>
                      `flex gap-4 items-center ${
                        isActive ? "text-blue font-bold" : "font-medium"
                      }`
                    }
                    onClick={toggleSidebar}
                  >
                    {({ isActive }) => (
                      <>
                        <SupplierSvg color={isActive ? "#1570EF" : "#A0A0A0"} />
                        <p>Vendors</p>
                      </>
                    )}
                  </NavLink>

                  <div className="flex gap-4 items-center">
                    <OrderSvg />
                    <p>Orders</p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <ManageStoreSvg />
                    <p>Manage Store</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="flex gap-4 items-center">
                  <SettingsSvg />
                  <p>Settings</p>
                </div>
                <div className="flex gap-4 items-center">
                  <LogoutSvg />
                  <p>Log Out</p>
                </div>
                <div className="flex gap-4 items-center">
                  <DarkModeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
