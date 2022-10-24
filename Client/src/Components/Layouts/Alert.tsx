interface AlertProps {
  message: string;
  bgcolor: string;
  textColor: string;
}
const Alert = (Props: AlertProps) => {
  return (
    <div
      className={`p-4 mb-4 text-sm text-${Props.textColor}-700 bg-${Props.bgcolor}-200 w-full rounded-lg`}
      role="alert"
    >
      {Props.message}
    </div>
  );
};

export default Alert;
