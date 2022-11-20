import React from "react";
import { sidebarLinks } from "../../constant/SidebarLinks";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && (
        <>
          <aside
            id="sidebar"
            className="flex hidden fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-64 h-full duration-200 lg:flex transition-width"
            aria-label="Sidebar"
          >
            <div className="flex relative flex-col flex-1 pt-0 min-h-0 bg-gray-50">
              <div className="flex overflow-y-auto flex-col flex-1 pt-8 pb-4">
                <div className="flex-1 px-3 bg-gray-50" id="sidebar-items">
                  <ul className="pb-2 space-y-2 pt-1">
                    {sidebarLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="flex items-center py-2.5 px-4 text-base font-normal text-dark-500 rounded-lg hover:bg-gray-200  bg-white shadow-lg shadow-gray-200 hover:!bg-white group transition-all duration-200"
                          // sidebar-toggle-collapse
                        >
                          <div className="bg-white shadow-lg shadow-gray-300 bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] !text-white  text-dark-700 w-8 h-8 p-2 mr-1 rounded-lg">
                            <link.icon />
                          </div>
                          <span
                            className={`ml-3 text-dark-500 ${
                              location.pathname === link.path ? "font-bold" : ""
                            } text-sm `}
                            // sidebar-toggle-item
                          >
                            {link.content}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div className="hidden fixed inset-0 z-10 bg-gray-900 opacity-50"></div>
        </>
      )}
    </>
  );
};

export default Sidebar;
