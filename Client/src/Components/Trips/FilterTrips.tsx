import React from "react";

const FilterTrips = () => {
  return (
    <div className="mx-auto w-full border p-8 rounded-md text-black bg-gray-100/90">
      <h1 className="text-center text-xl font-semibold">Filter Trips</h1>
      <div className="mb-4">
        <h1 className="py-4 text-[14px] font-medium">COMPANIES</h1>
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-500"
          >
            CTM
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-500"
          >
            ASFAR
          </label>
        </div>
      </div>
      <hr />
      <div className="mb-4">
        <h1 className="py-4 text-[14px] font-medium">DEPARTURE TIME</h1>
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-500"
          >
            18:00
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-500"
          >
            19:00
          </label>
        </div>
      </div>
      <hr />
      <div>
        <h1 className="py-4 text-[14px] font-medium">EQUIPMENT</h1>
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-500"
          >
            18:00
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-500"
          >
            19:00
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterTrips;
