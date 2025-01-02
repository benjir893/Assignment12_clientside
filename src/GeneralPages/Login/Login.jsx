import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const {user, signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const location = useLocation()
  const navigate = useNavigate();  
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: `you are currently logged in`,
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
        navigate(from, {replace:true});
      })
      .catch((error) => console.error(error));
  };

  const handlecaptchaValidate = (event) => {
    const user_captcha_value = event.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Benjir|Login</title>
      </Helmet>
      <div
        className="hero bg-base-200 min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/tPtv9w0/loginbanner2.jpg)",
        }}
      >
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-lime-400">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                  <Link to={"/registration"}>
                    <span className="label-text text-lime-500 font-semibold">
                      Yet to Register?
                    </span>
                  </Link>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handlecaptchaValidate}
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  disabled={disabled}
                  value={"LOGIN"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
