
import { useLoaderData } from "react-router-dom";
import AllTourCard from "./AllTourCard";

const AllTourist = () => {

    const allTourists = useLoaderData()



 
    return (
        <div>
            {allTourists.length}
            <div className="space-y-12">
                {
                    allTourists.map(tour => <AllTourCard key={tour._id} tour={tour}> </AllTourCard>)
                }
            </div>
        </div>
    );
};

export default AllTourist;