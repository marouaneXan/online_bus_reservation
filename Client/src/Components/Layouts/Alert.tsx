import React from "react";

interface Props {
  message: string;
  color: string;
}
const Alert = (props: Props) => {
  return (
    <div
      className={`p-4 mb-4 text-sm text-${props.color}-700 bg-blue-100 rounded-lg dark:bg-${props.color}-200 dark:text-${props.color}-800`}
      role="alert"
    >
      {props.message}
    </div>
  );
};

export default Alert;
