import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../Context/UserContext';
import useBuyer from './../../../Hooks/useBuyer';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const [isBuyer] = useBuyer(user?.email)

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
          {
            isBuyer && <Link to ='/dashboard'><button className="btn btn-outline mr-3">Order List</button></Link>
          }
          {
            !isBuyer &&  <Link to ='/dashboard'><button className="btn btn-outline mr-3">DashBoard</button></Link>
          }
               
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
