import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/merkob.png";

const Navbar = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const displayDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <>
      {location.pathname !== "/login" && (
        <nav className="fixed z-30 w-full bg-gray-50">
          <div className="py-3 px-3 lg:px-5 lg:pl-3">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <button
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <Link
                  to="/"
                  className="text-md font-semibold flex items-center lg:mr-1.5"
                >
                  <span className="hidden md:inline-block self-center text-xl font-bold whitespace-nowrap">
                    Merkob.ma
                  </span>
                </Link>
                <form className="hidden lg:block lg:pl-8">
                  <label htmlFor="topbar-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mt-1 lg:w-80">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full pl-10 p-2.5"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center">
                {/* <!-- Search mobile --> */}
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded-2xl lg:hidden hover:text-gray-900 hover:bg-gray-100"
                >
                  <span className="sr-only">Search</span>
                  {/* <!-- Search icon --> */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                
                  
                    {/* <div className="">
                      <button
                        onClick={displayDropdown}
                        className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                        type="button"
                      ></button>
                      {showDropdown && (
                        <div
                          className={
                            "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                          }
                          style={{ minWidth: "12rem" }}
                        >
                          <a
                            href="#pablo"
                            className={
                              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            }
                          >
                            Action
                          </a>
                          <a
                            href="#pablo"
                            className={
                              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            }
                          >
                            Another action
                          </a>
                          <a
                            href="#pablo"
                            className={
                              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            }
                          >
                            Something else here
                          </a>
                          <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
                          <a
                            href="#pablo"
                            className={
                              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                            }
                          >
                            Seprated link
                          </a>
                        </div>
                      )}
                    </div> */}
                  
                
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
