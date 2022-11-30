import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../Context/UserContext';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  return (
    <div className="navbar bg-base-100 drop-shadow-md lg:px-10 md:px-5">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl font-bold"><span className="bg-primary px-4 py-1 rounded-lg text-white">FLIP</span> PHONE</Link>
      </div>
      <div className="flex-none">
        {
          user?.uid?<>
                <Link to ='/dashboard'><button className="btn btn-outline mr-3">DashBoard</button></Link>
                <button onClick={handleLogOut} className="btn bg-primary text-white border-0">Log out</button>
          </>
          :
          <Link to ='/login'><button className="btn btn-primary">Log in</button></Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
