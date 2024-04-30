// https://i.ibb.co/fqcfxH5/bd.jpg
// https://i.ibb.co/vxnYG0w/com.jpg
// https://i.ibb.co/MDFs5Ph/ind.jpg
// https://i.ibb.co/889b3fr/mal.webp
// https://i.ibb.co/5cZP5qm/thai.jpg
// https://i.ibb.co/6FCPXSf/vet.jpg

import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-final-hf8sxjm69-alaminns-projects.vercel.app/countries')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className=" my-12 lg:my-24">
            <h2 className="text-4xl font-bold text-center mb-6">Countries You like to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {
            countries.map(country => <Country key={country._id} country={country}></Country>)
          } 
        </div>
        </div>
    );
};

export default Countries;