import { useLoaderData } from "react-router-dom";


const AllTourDetails = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            hello
        </div>
    );
};

export default AllTourDetails;
