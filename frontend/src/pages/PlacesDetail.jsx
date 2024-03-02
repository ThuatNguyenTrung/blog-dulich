import { IoLocationSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import Places from "../components/Places/Places";
const PlacesDetail = () => {
  const placelocation = useLocation();
  const { img, title, description, location, pricevnd, type } =
    placelocation.state;
  return (
    <div className="pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover hover:scale-110 duration-700 transition"
        />
      </div>
      <div className="container space-y-4 my-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="flex items-center gap-2 opacity-70">
          <IoLocationSharp />
          <p>{location}</p>
        </div>
        <div className="flex justify-between items-center border-t-2 pt-3 ">
          <p> {type}</p>
          <p className="font-bold text-2xl">{pricevnd}</p>
        </div>
      </div>
      <Places />
    </div>
  );
};

export default PlacesDetail;
