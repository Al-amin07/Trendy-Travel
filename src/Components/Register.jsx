import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const { handleregister, logOut } = useContext(AuthContext)

    const handleUserRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        const  user = { name, email, photo, password};
        console.log(user)
        handleregister(email, password)
        .then(result => {
            logOut()
            .then()
            .catch()
        })
        .catch(error => console.log(error))
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
        </div>
      </div>
    </div>
  );
};

export default Register;
