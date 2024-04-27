import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { FaGoogle } from "react-icons/fa6";

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Login = () => {

    const { handleLogin, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleUserLogin = e => {
        e.preventDefault();
        const form = e.target;
       
        const email = form.email.value
       
        const password = form.password.value
        handleLogin(email, password)
        .then(result => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Login",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(result.user)
              navigate(location?.state ?  location.state : '/')
        })
        .catch(error => {
            toast(error.message)
        })
        
    }

    const handleGoogleLogin = () => {
      googleLogin()
      .then(result => {
        console.log(result)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        toast(error.message)
      })
    }
    const handleGithubLogin = () => {
      githubLogin()
      .then(result => {
        console.log(result)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        toast(error.message)
      })
    }

    

    
    return (
        <div className="hero  py-8 bg-gradient-to-r from-[#59B1DF] to-[#D839F5] ">
        <div className=" w-full flex flex-col items-center">
          <div className="text-center  lg:text-left">
            <h1 className="text-5xl font-bold mb-4 text-white">Login now!</h1>
        
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleUserLogin} className="card-body w-full">
            
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="px-8">
                <h2 className="text-2xl font-bold text-center mb-4">Login With </h2>
               <div className="flex justify-center gap-4 mb-4">
               <button onClick={handleGoogleLogin} className="btn btn-outline rounded-2xl text-xl"><FaGoogle/>Google Login</button>
                <button onClick={handleGithubLogin}  className="btn btn-outline rounded-2xl text-xl"><FaGithub/>Github Login</button>
               </div>
            </div>
            <h2 className="mb-6 pl-8 text-center">Dont Have Any Account? Please <Link className="text-blue-700 font-bold underline" to='/register'>Register</Link></h2>
          </div>
        </div>
        <ToastContainer/>
      </div>
    );
};

export default Login;