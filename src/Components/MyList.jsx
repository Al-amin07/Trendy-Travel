import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ListCard from "./ListCard";

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const MyList = () => {
  const { user } = useContext(AuthContext);
  

  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
       
      });
  }, [user]);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        fetch(`http://localhost:5000/tourists/${id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const newLists = lists.filter(f => f._id !== id)
        setLists(newLists)
      })
      }
    });
  
  }

  // lists.map(list => <ListCard key={list._id} list={list}></ListCard>)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-3xl font-bold">Spot Name</th>
            <th className="text-3xl font-bold">Country</th>
            <th className="text-3xl font-bold">Cost</th>
            <th className="text-3xl font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {
        lists.map((list, i) => <ListCard key={list._id} handleDelete={handleDelete} list={list} i={i}></ListCard>)
      }
         
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
