import { useField,ErrorMessage } from "formik";

interface props {
  label?: string;
  value?: string;
  name: string;
  className: string;
  type: string;
  placeholder: string;
  min?:any,
  max?:any,
}

const TextField = (props: props) => {
  const [field,meta] = useField(props.label ?? "maska");
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <>
      <input {...field} {...props} />
      {/* <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        <ErrorMessage name={errorText} />
      </span> */}
    </>
  );
};
export default TextField;
