import { useField } from "formik";

interface props {
  id?: string;
  value: string;
  name: string;
  className: string;
  type: string;
}

const RadioField = (props: props) => {
  const [field] = useField(props.id ?? "");
  return (
    <>
      <input {...field} {...props} />

    </>
  );
};
export default RadioField;
