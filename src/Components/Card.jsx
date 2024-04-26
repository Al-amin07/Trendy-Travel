import PropTypes from "prop-types";
import { IoTime } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    _id,
    photo,
    dname,
    spotname,
    country,
    short,
    location,
    cost,
    season,
    time,
    visitor,
    email,
  } = data;
  return (
    <div className="shadow-2xl">
      <div>
        <img className="w-full h-[200px]" src={photo} alt="" />
      </div>
      <div className="px-6 space-y-4 mt-3">
        <h2 className="text-3xl font-semibold">{spotname}</h2>
        <h2 className="text-2xl font-medium">Country : {country}</h2>
        <h2>Location : {location}</h2>
        <h2 className="text-[#9B9D9D]">{short}</h2>
        
       <div className="flex justify-between">
       <div className="flex gap-0 btn rounded-full bg-[#E0EEFF] text-[#32A8FF]">
          <h2 className="mr-2 font-bold">Cost : </h2>
          <MdAttachMoney className="text-2xl" />
          <h2  className="font-bold text-lg">{cost}</h2>
        </div>

        <div className="flex gap-0 btn rounded-full bg-[#FFF3E0] text-[#FFAC33]">
          
          <IoTime className="text-2xl" />
          <h2 className="font-bold text-lg">{time}</h2>
        </div> 
       </div>
       <div className="w-full">
        <Link to={`/cardDetails/${_id}`} className="btn w-full bg-[#23BE0A] rounded-full text-white text-lg font-bold mb-4">
        <button >View Details</button>
        </Link>
       </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
