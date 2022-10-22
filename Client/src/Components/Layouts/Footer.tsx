import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import logoNav from "../../assets/merkob.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location: any = useLocation();
  return (
    <>
      {location.pathname === "/register" || "/login" || "/results_availabilities" ? (
        ""
      ) : (
        <div className="w-full bg-gray-200 py-16">
          <div className="max-w-[1240px] mx-auto flex flex-col px-4">
            <div className="sm:flex text-center justify-between items-center">
              <img src={logoNav} className="w-[100px]" alt="merkob.ma" />
              <div className="flex justify-between w-full sm:max-w-[280px] my-4">
                <FaFacebook
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/marouane-zahaoui-4a3460220/"
                />
                <FaTwitter
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/marouane-zahaoui-4a3460220/"
                />
                <FaYoutube
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/marouane-zahaoui-4a3460220/"
                />
                <FaPinterest
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/marouane-zahaoui-4a3460220/"
                />
                <FaInstagram
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/marouane-zahaoui-4a3460220/"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <ul className="lg:flex">
                <Link to="/register">
                  <li className="p-4 hover:text-gray-500">Home</li>
                </Link>
                <Link to="/register">
                  <li className="p-4 hover:text-gray-500">Contact</li>
                </Link>
                <Link to="/register">
                  <li className="p-4 hover:text-gray-500">Register</li>
                </Link>
                <Link to="/register">
                  <li className="p-4 hover:text-gray-500">Login</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
