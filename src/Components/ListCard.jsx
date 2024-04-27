import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ListCard = ({ list, i, handleDelete }) => {
  const {
    _id,
    
    spotname,
    country,

    location,
    cost,
    
  } = list;



  return (
    <tr className="hover:bg-base-200">
      <th>{i + 1}</th>
      <td className="text-lg font-medium">{spotname}</td>
      <td className="text-lg font-medium">{country}</td>
      <td className="text-lg font-medium">{cost}</td>
      <td className="text-lg font-medium">{location}</td>
      <td className="text-lg font-medium">
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
