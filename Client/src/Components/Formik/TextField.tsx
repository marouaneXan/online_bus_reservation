import React from "react";
import { ErrorMessage, useField } from "formik";
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?:string
}
const TextField: React.FC<InputProps> = ({ ...props }:any) => {
  const [field, meta] = useField<{}>(props);
  //   const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <>
      <input {...field} {...props} />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        <ErrorMessage name={field.name} />
      </span>
    </>
  );
};

export default TextField;
