import PropTypes from "prop-types";

import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllTourCard = ({ tour }) => {

  const {
    _id,
    photo,
    
    spotname,
    country,
   
    location,
    cost,
   
    time,
    
   
  } = tour;
  // "rewrites": [{"source": "/(.*)", "destination": "/"}]
  return (
    <div className="  px-8 py-8 flex flex-col md:flex-row gap-16 border
   shadow-xl ">
     <div className="bg-base-200 ">
        <img className="h-[250px] w-full lg:w-[250px] rounded-xl" src={photo} alt="" />
     </div>
     <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold ">{spotname}</h2>
        <h2 className="text-xl md:text-2xl font-medium">{country}</h2>
        <h2 className="text-lg text-[#8C9293]">{location}</h2>
        {/* <h2 className=" text-[#8C9293]">{short}</h2> */}
        <div className="flex gap-0">
            <h2 className="mr-2 font-medium">Cost : </h2>
        {/* <MdAttachMoney className="text-2xl"/> */}
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
