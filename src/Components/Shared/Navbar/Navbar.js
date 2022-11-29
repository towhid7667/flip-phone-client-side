import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 drop-shadow-md lg:px-10 md:px-5">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl font-bold"><span className="bg-primary px-4 py-1 rounded-lg text-white">FLIP</span> PHONE</Link>
      </div>
      <div className="flex-none">
        <Link to ='/login'><button className="btn btn-primary">Log in</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
