import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../Context/UserContext';
import useBuyer from './../../../Hooks/useBuyer';
import {FaRegUserCircle} from 'react-icons/fa'

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const [isBuyer] = useBuyer(user?.email)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  return (
    <div className="navbar bg-base-100 drop-shadow-md lg:px-10 md:px-5 px-0 z-50 fixed">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl font-bold"><span className="bg-primary px-4 py-1 rounded-lg text-white">FLIP</span> PHONE</Link>
      </div>
      <div className="flex justify-around ">
       
        {
          user?.uid?<>
          {
            isBuyer && <Link to ='/orderlist'><button className="btn btn-outline ml-24 lg:ml-0 md:ml-0 lg:w-11/12 md:w-4/12 w-4/12">Order List</button></Link>
          }
          {
            !isBuyer &&  <Link to ='/dashboard'><button className="btn btn-outline ml-16 lg:ml-0 md:ml-0 lg:w-10/12 md:w-3/12 w-6/12">DashBoard</button></Link>
          }
               
           <button onClick={handleLogOut} className="btn bg-primary mr-5 lg:w-4/12 md:w-3/12 w-2/12 text-white border-0">Log out</button>
          </>
          :
          <Link to ='/login'><button className="btn btn-primary">Log in</button></Link>
        }
       <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className=" text-3xl"> 
         <FaRegUserCircle></FaRegUserCircle>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
         <h1 className="text-center">{user?.email}</h1>
        </li>
        <li> <Link to='/blogs' className="btn btn-primary">Blogs</Link></li>
      </ul>
    </div>
      </div>
    </div>
  );
};

export default Navbar;
