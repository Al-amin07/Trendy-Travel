import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const AllCards = ({country}) => {
    console.log(country);
    const { _id, photo, country_name, spotname, location, short, cost, season } = country;
  return (
    <div className="card flex  flex-col lg:flex-row card-side bg-base-100 shadow-xl ">
      <figure>
        <img className="md:w-full lg:w-[400px]  h-[250px]"
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-semibold">{spotname}</h2>
        <p className="text-2xl font-medium text-green-700">{country_name}</p>
        <p className="text-lg font-semibold">{location}</p>
        <p className="md:w-full lg:w-3/4 text-[#8C9293]">{short}</p>
        <div className="flex flex-col md:flex-row">
            <p className="text-xl font-medium text-yellow-600">Average Cost : {cost}</p>
            <p className="text-xl font-medium text-green-700">Seosonality : {season}</p>
        </div>
        <div className="card-actions ">
          <Link to={`/cardDetails/${_id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

AllCards.propTypes = {
    country: PropTypes.object
}

export default AllCards;
