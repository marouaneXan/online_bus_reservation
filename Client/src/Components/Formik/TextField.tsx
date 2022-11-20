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
  const [field,meta] = useField(props.label ?? "xan");
  return (
    <div className="w-full">
      <input {...field} {...props} />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        <ErrorMessage name={props.name} />
      </span>
    </div>
  );
};
export default TextField;
