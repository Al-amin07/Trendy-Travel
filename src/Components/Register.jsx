import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const Register = () => {
    const { handleregister, logOut } = useContext(AuthContext)

    const handleUserRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
       
        handleregister(email, password)
        .then(result => {
            console.log(result.user)
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
              })
              .then(() => {
                // Profile updated!
                logOut()
                .then(() => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Register",
                        showConfirmButton: false,
                        timer: 1500
                      });
                })
                .catch()
                // ...
              }).catch((error) => {
                console.log(error)
              })
        })
        .catch(error => toast(error.message))
    }

  return (
    <div className="hero  py-8 bg-gradient-to-r from-[#59B1DF] to-[#D839F5] ">
      <div className=" w-full flex flex-col items-center">
        <div className="text-center  lg:text-left">
          <h1 className="text-5xl font-bold mb-4 text-white">Register now!</h1>
      
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleUserRegister} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <h2 className="mb-6 pl-8">Already have an account?? Please <Link className="text-blue-700 font-bold underline" to='/login'>Login</Link></h2>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
