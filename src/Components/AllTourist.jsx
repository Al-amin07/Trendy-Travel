
import { useLoaderData } from "react-router-dom";
import AllTourCard from "./AllTourCard";

const AllTourist = () => {

    const allTourists = useLoaderData()

    const handleSort = (e) => {
        console.log(e.target.value)
    }

 
    return (
        <div>
           <div className=" flex items-end">
          <select
            onChange={handleSort}
            className="rounded-lg border-2  py-2 pl-4 text-lg mx-auto mb-8"
           
          >
            <option value="none" selected disabled hidden>
            Sort By
            </option>
            <option value="cost">Average Cost</option>
           
            
          </select>
        </div>
            <div className="space-y-12">
                {
                    allTourists.map(tour => <AllTourCard key={tour._id} tour={tour}> </AllTourCard>)
                }
            </div>
        </div>
    );
};

export default AllTourist;