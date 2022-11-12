import React from "react";
import { useField, ErrorMessage } from "formik";

interface Prop {
  label?: string;
  id?: string;
  defaultSelect: string;
  name: string;
  type: string;
  x: any;
}

const SelectField = (props: Prop) => {
  const [field, meta] = useField(props.label ?? "");
  return (
    <>
      <label
        htmlFor={field.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {props.label}
      </label>
      <select
        {...field}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>{props.defaultSelect}</option>
        {Object.keys(props.x).map((item, pos) => (
          <option key={pos} value={item}>
            {props.x[item]}
          </option>
        ))}
      </select>
      {/* <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        <ErrorMessage name={field.name} />
      </span> */}
    </>
  );
};

export default SelectField;
