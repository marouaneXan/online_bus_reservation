import React from "react";
import { FieldConfig, useField, ErrorMessage } from "formik";

interface Prop  {
  label?: string;
  id?:string
  name:string
  type:string
}

const TextField = (props: Prop) => {
  const [field, meta] = useField(props.label ?? "");
  return (
    <div className="w-full">
      <label
        htmlFor={field.name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.label}
      </label>
      <input
        {...field}
        {...props}
        className={`shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5 ${
          (meta.touched && meta.error) ?? "border-red-500"
        }`}
      />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        <ErrorMessage name={props.name} />
      </span>
    </div>
  );
};

export default TextField;
