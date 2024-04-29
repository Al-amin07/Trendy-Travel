import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Country = ({country}) => {
    const { country_name, image, short_description} = country;
    useEffect(() => {
      AOS.init({
        duration: '1000'
      })
    }, [])
  return (
    <Link data-aos='fade-up' to={`/countries/${country_name}`}>
    <div className="card flex  card-compact  bg-base-100 shadow-xl">
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
