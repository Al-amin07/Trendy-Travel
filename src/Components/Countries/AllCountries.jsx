import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllCards from "./AllCards";

const AllCountries = () => {
    const { country } = useParams();
    console.log(country.toLowerCase());
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/countries/${country}`)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    return (
       <div className="space-y-6">
        {
            countries.map(country => <AllCards key={country._id} country={country} ></AllCards>)
        }
       </div>
    );
};

export default AllCountries;