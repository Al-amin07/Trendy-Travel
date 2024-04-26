
import { useLoaderData } from "react-router-dom";

const AllTourist = () => {

    const allTourists = useLoaderData()

 
    return (
        <div>
            {allTourists.length}
        </div>
    );
};

export default AllTourist;