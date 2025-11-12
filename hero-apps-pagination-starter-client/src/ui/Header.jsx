import { Link, NavLink } from "react-router";
// import logo from "../assets/logo.png";
import Logo from "./Logo";
import { BiBookContent, BiHome } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { MdInstallDesktop } from "react-icons/md";

const Header = () => {
  const nav = (
    <>
      <li>
        <NavLink to="/" className="text-gray-500 font-semibold">
          <BiHome size={18} className=""></BiHome> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className="text-gray-500 font-semibold">
          <FaAppStore size={20}></FaAppStore> Apps
        </NavLink>
      </li>

      <li>
        <NavLink to="/installations" className="text-gray-500 font-semibold">
          <MdInstallDesktop size={20} /> Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow bg-white py-1">
      <div className="navbar md:w-11/12  mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow gap-3 "
            >
              {nav}
            </ul>
          </div>
          <Link to={"/"}>
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{nav}</ul>
        </div>
        <div className="navbar-end">
          <a className=" btn btn-secondary bg-gradient-to-r from-violate-500 to-blue-500">
            <BsGithub></BsGithub> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
