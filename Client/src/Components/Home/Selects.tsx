import casablanca from "../../assets/casa.webp";
import marrakech from "../../assets/marrakech.webp";
import tanger from "../../assets/tanger.webp";
import rabat from "../../assets/rabat.webp";
import safi from "../../assets/safi.webp";
import essaouira from "../../assets/essaouira.webp";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={casablanca} text="Casablanca" />
      <SelectsCard bg={marrakech} text="Marrakech" />
      <SelectsCard bg={tanger} text="Tanger" />
      <SelectsCard bg={rabat} text="Rabat" />
      <SelectsCard bg={safi} text="Safi" />
      <SelectsCard bg={essaouira} text="Essaouira" />
    </div>
  );
};

export default Selects;
