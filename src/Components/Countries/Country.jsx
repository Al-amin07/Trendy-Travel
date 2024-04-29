import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Country = ({country}) => {
    const { country_name, image, short_description} = country
  return (
    <Link to={`/countries/${country_name}`}>
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className='h-[260px]'
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country_name}</h2>
        <p>{short_description}</p>
        
      </div>
    </div>
    </Link>
  );
};

Country.propTypes = {
    country: PropTypes.object
}

export default Country;
