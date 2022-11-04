import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";
import Trips from "./Trips";

const Content = () => {
  const location = useLocation();
  const getComponent = () => {
    switch (location.pathname) {
      case "/":
        return <Dashboard />;
      case "/trips":
        return <Trips />;
    }
  };
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        {getComponent()}
      </div>
    </div>
  );
};

export default Content;
