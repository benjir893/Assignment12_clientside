import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);

  const handleLogout = () => {
    signout()
      .then(() => {
        alert("you are currently logout");
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li className="px-2 text-lime-300 font-semibold">
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <details className="px-2">
          <summary className=" text-lime-300 font-semibold">
            <Link to={"/department"}>DEPARTMENTS</Link>
          </summary>
          <ul className="p-2">
            <li className="bg-blue-200 border border-solid border-b-2 rounded-xl">
              <Link>HEARTS SECTION</Link>
            </li>
            <li className="bg-blue-200 border border-solid border-b-2 rounded-xl">
              <Link>DIABETIC SECTION</Link>
            </li>
            <li className="bg-blue-200 border border-solid border-b-2 rounded-xl">
              <Link>CAREGIVER SECTION</Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="px-2  text-lime-300 font-semibold">
        <Link>SPECIALISTS</Link>
      </li>
      <li className="px-2  text-lime-300 font-semibold">
        <Link>SERVICES</Link>
      </li>
      <li className="px-2  text-lime-300 font-semibold">
        <Link>ABOUT US</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black bg-opacity-20 fixed z-10 lg:max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-20 h-20 rounded-full"></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-transparent">
            {/* <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li> */}
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/makeappointment"}>
            <button className="btn text-lime-300 font-semibold border border-solid border-1 bg-transparent">
              MAKE APPOINTMENT
            </button>
          </Link>
        </div>
        <div className="navbar-end">
          <span className="text-lime-400">{user?.displayName}</span>
          <img className="w-10 h-10 rounded-full px-1 py-1" src={user?.photoURL} alt="" />
          {user ? (
            <>
              <Link>
                <button
                  onClick={handleLogout}
                  className="btn text-lime-300 font-semibold border border-solid border-1 bg-transparent"
                >
                  LOGOUT
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn text-lime-300 font-semibold border border-solid border-1 bg-transparent">
                  LOGIN
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
