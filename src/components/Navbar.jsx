import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-bg-color text-txt-color">
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
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>All Jobs</NavLink>
            </li>
            <li>
              <NavLink>Applied Jobs</NavLink>
            </li>
            <li>
              <NavLink>Add A Job</NavLink>
            </li>
            <li>
              <NavLink>My Jobs</NavLink>
            </li>
            <li>
              <NavLink>Blogs</NavLink>
            </li>
            <li>
              <NavLink>Profile</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold text-btn-color">
          VixCareer
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>All Jobs</NavLink>
          </li>
          <li>
            <NavLink>Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink>Add A Job</NavLink>
          </li>
          <li>
            <NavLink>My Jobs</NavLink>
          </li>
          <li>
            <NavLink>Blogs</NavLink>
          </li>
          <li>
            <NavLink>Profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-btn-color text-white hover:bg-black">Login</a>
      </div>
    </div>
  );
}

export default Navbar;
