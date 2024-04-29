import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ListCard = ({ list, i, handleDelete }) => {
  const {
    _id,
    
    spotname,
    country_name,

    location,
    cost,
    
  } = list;



  return (
    <tr className="hover:bg-base-200">
      <th>{i + 1}</th>
      <td className="text-sm md:text-bg lg:text-lg font-medium">{spotname}</td>
      <td className="text-sm md:text-bg lg:text-lg font-medium">{country_name}</td>
      <td className="text-sm md:text-bg lg:text-lg font-medium">{cost}</td>
      <td className="text-sm md:text-bg lg:text-lg font-medium">{location}</td>
      <td className="text-sm md:text-bg lg:text-lg font-medium">
        <div className="join join-vertical lg:join-horizontal">
          <button onClick={() => handleDelete(_id)} className="btn join-item text-white bg-red-500">Delete</button>
          <Link to={`/update/${_id}`}>
          <button  className="btn join-item text-white bg-green-500">Update</button>
          </Link>
          
        </div>
      </td>
    </tr>
  );
};

ListCard.propTypes = {
  list: PropTypes.object,
  handleDelete: PropTypes.function,
  i: PropTypes.number
}

export default ListCard;
