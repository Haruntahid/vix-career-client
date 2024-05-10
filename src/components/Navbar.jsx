import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user, logOut } = useAuth();
  return (
    <div className="bg-bg-color">
      <div className="navbar text-txt-color container mx-auto py-5">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/all-jobs"}>All Jobs</NavLink>
              </li>

              {user && (
                <>
                  <li>
                    <NavLink to={"/add-job"}>Add A Job</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my-job"}>My Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink>Applied Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink>Profile</NavLink>
                  </li>
                </>
              )}

              <li>
                <NavLink>Blogs</NavLink>
              </li>

              {!user && (
                <li>
                  <NavLink to={"/register"}>Register</NavLink>
                </li>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-bold text-btn-color">
            VixCareer
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all-jobs"}>All Jobs</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to={"/add-job"}>Add A Job</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-job"}>My Jobs</NavLink>
                </li>
                <li>
                  <NavLink>Applied Jobs</NavLink>
                </li>
                <li>
                  <NavLink>Profile</NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink>Blogs</NavLink>
            </li>
            {!user && (
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  className="h-14 w-14 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>

              <button
                onClick={logOut}
                className="btn ml-4 bg-btn-color text-white hover:bg-black"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-btn-color text-white hover:bg-black"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
