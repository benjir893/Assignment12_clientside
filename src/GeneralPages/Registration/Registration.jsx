import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Registration = () => {
  const { createUser, userProfileUpdate, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      userProfileUpdate(data.username, data.photourl)
        .then(() => {
          console.log("user profile updated");
          reset();
          navigate(from, { replace: true });
        })
        .catch((error) => console.error(error));
    });
  };
  const handleGooglesignup = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Benjir|Registration</title>
      </Helmet>
      <div
        className="hero bg-base-200 min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/sHrmg32/logo.png)" }}
      >
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-lime-400">
              Yet to Register!
            </h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                  <span>
                    <button
                      onClick={handleGooglesignup}
                      className="btn btn-xs btn-ghost text-lime-500"
                    >
                      Using Google Login
                    </button>
                  </span>
                  <span>
                    <button className="btn btn-xs btn-ghost text-lime-500">
                      Using Github Login
                    </button>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("username", { required: true })}
                  placeholder="enter your name"
                  className="input input-bordered"
                  //   required
                />
                {errors.username?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    {" "}
                    name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  {...register("photourl", { required: true })}
                  placeholder="enter your Photo url"
                  className="input input-bordered"
                  //   required
                />
                {errors.photourl?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    {" "}
                    photo url is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  //   required
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?!.*[:;])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-600">
                    Password must be minimum 6 digits
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className="text-red-600">
                    Password cannot be more then 20 digits
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-600">
                    Password must has uppercase lowercase number and special
                    character combination
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={"Register"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
