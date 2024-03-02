import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const PlaceCard = ({ title, img, location, description, pricevnd, type }) => {
  return (
    <>
      <Link
        to={`/places/${title}`}
        onClick={() => window.scrollTo(0, 0)}
        state={{ img, title, location, description, pricevnd, type }}
      >
        <div className="shadow-lg cursor-pointer">
          <div className="overflow-hidden">
            <img
              src={img}
              alt=""
              className="h-[220px] mx-auto w-full object-cover hover:scale-110 hover:skew-x-2 duration-700 transition"
            />
          </div>
          <div className="p-4 space-y-3">
            <h1 className="font-bold text-xl">{title}</h1>
            <div className="flex items-center gap-2 opacity-70">
              <IoLocationSharp />
              <p>{location}</p>
            </div>
            <p className="line-clamp-2">{description}</p>
            <div className="flex justify-between items-center border-t-2 pt-3 ">
              <div className="opacity-70">
                <p>{type}</p>
              </div>
              <div className="font-bold text-2xl">
                <p>{pricevnd}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PlaceCard;
