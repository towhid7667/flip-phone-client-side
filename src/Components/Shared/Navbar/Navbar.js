import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 drop-shadow-md lg:px-10 md:px-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"><span className="bg-lime-500 px-4 py-1 rounded-lg text-white">FLIP</span> PHONE</a>
      </div>
      <div className="flex-none">
        <Link to ='/login'><button className="btn btn-primary">Log in</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
