import PropTypes from "prop-types";
import { MdAttachMoney } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllTourCard = ({ tour }) => {
  console.log(tour);
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
  } = tour;
  return (
    <div className="  px-8 py-8 flex gap-16 border
    ">
     <div className="bg-base-200 p-12">
        <img className="h-[150px] w-[150px] rounded-xl" src={photo} alt="" />
     </div>
     <div className="space-y-3">
        <h2 className="text-3xl font-semibold ">{spotname}</h2>
        <h2 className="text-2xl font-medium">{country}</h2>
        <h2 className="text-lg text-[#8C9293]">{location}</h2>
        <div className="flex gap-0">
            <h2 className="mr-2 font-medium">Cost : </h2>
        <MdAttachMoney className="text-2xl"/>
        <h2 >{cost}</h2>
        </div>
       
        <div className="flex gap-0">
            <h2 className="mr-2 font-medium">Travel Time : </h2>
        <IoTime className="text-2xl"/>
        <h2 >{time}</h2>
        </div>
        <Link to={`/details/${_id}`}>
        <button className="btn bg-[#23BE0A] text-white text-xl rounded-full mt-3">View Details</button>
        </Link>
     </div>
    </div>
  );
};

AllTourCard.propTypes = {
  tour: PropTypes.object,
};

export default AllTourCard;
