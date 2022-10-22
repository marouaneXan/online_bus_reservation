import React from "react";
import busVid from "../assets/landing_page_vd.mp4";
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={busVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col space-y-6 justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold">Register</h1>
        <form
          className="flex flex-col space-y-2 items-center max-w-[500px] mx-auto w-full border p-8
          rounded-md text-black bg-gray-100/90"
        >
          <div className="flex">
            <div className="flex items-center mr-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ml-2 text-sm font-medium text-gray-500"
              >
                Madame
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-2-radio"
                className="ml-2 text-sm font-medium text-gray-500"
              >
                Mister
              </label>
            </div>
          </div>

          <div className="w-full flex space-x-1">
            <input
              className="border rounded-md p-2 w-full"
              type="text"
              placeholder="First name"
            />
            <input
              className="border rounded-md p-2 w-full"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="w-full flex space-x-1">
            <input
              className="border rounded-md p-2 w-full"
              type="date"
              placeholder="Birthday"
            />
            <input
              className="border rounded-md p-2 w-full"
              type="text"
              placeholder="Phone"
            />
          </div>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            placeholder="Nationality"
          />
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            placeholder="Adress"
          />
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            placeholder="Email"
          />
          <input
            className="border rounded-md p-2 w-full"
            type="password"
            placeholder="password"
          />
          <button className="p-3 w-full border bg-gradient-to-r text-white rounded-md from-[#5651e5] to-[#709dff]">
            Register
          </button>
          <div className="mt-6 text-grey-dark">
            Already have an account?
            <Link className="text-blue-600 hover:underline" to="/">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
