import { IoTime } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();

  const {
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
    <div className="shadow-2xl flex gap-8 rounded-xl">
      <div className="flex-1 ">
        <img
          className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
          src={photo}
          alt=""
        />
      </div>

      <div className="px-6 space-y-4 mt-3 flex-1 ">
        <h2 className="text-5xl font-semibold">{spotname}</h2>
        <h2 className="text-3xl font-medium">Country : {country}</h2>
        <h2 className="text-3xl font-medium">Location : {location}</h2>
        <h2 className="text-[#9B9D9D]">{short}</h2>

        <div className="flex flex-col gap-4">
          <div className="flex gap-0  items-center text-[#23BE0A]">
            <h2 className=" text-2xl mr-2 font-bold">#Season : </h2>
  
            <h2 className=" text-2xl font-bold ">{season}</h2>
          </div>

          <div className="flex gap-0 items-center  text-[#23BE0A]">
            <h2 className="text-2xl font-bold">#Total Visitors : </h2>
            <h2 className="text-2xl font-bold ">{visitor}</h2>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex gap-0 btn rounded-full bg-[#E0EEFF] text-[#32A8FF]">
            <h2 className="mr-2 font-bold text-lg">Total Cost : </h2>
            <MdAttachMoney className="text-2xl" />
            <h2 className="font-bold text-lg">{cost}</h2>
          </div>

          <div className="flex gap-0 btn rounded-full bg-[#FFF3E0] text-[#FFAC33]">
            <IoTime className="text-2xl" />
            <h2 className="font-bold text-lg">Travel Time : {time}</h2>
          </div>
        </div>

        {/* <div className="bg-[#F2F2F2] p-6 rounded-xl">
            <h1 className="text-2xl font-bold mb-2">User Details : </h1>
            <div className="flex justify-between">
                <h2 className="text-lg font-medium">Name : {dname}</h2>
                <h2 className="text-lg font-medium">Email : {email}</h2>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default CardDetails;
