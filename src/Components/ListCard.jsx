import { Link } from "react-router-dom";

const ListCard = ({ list, i, handleDelete }) => {
  const {
    _id,
    photo,
    dname,
    spotname,
    country,

    location,
    cost,
    season,

    visitor,
    email,
  } = list;

//   const handleDelete = id => {
//     fetch(`http://localhost:5000/tourists/${id}`, {
//         method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }

// const handleUpdate = id => {
//     fetch(`http://localhost:5000/tourists/${id}`, {
//         method: 'PUT',
//         headers: {
//             'content-type' : 'application/json'
//         },
//         body: JSON.stringify()
//     })
// }

  return (
    <tr className="hover:bg-base-200">
      <th>{i + 1}</th>
      <td className="text-lg font-medium">{spotname}</td>
      <td className="text-lg font-medium">{country}</td>
      <td className="text-lg font-medium">{cost}</td>
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

export default ListCard;
