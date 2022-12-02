
import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import NavbarDash from "../Components/Shared/Navbar/NavbarDash";
import { AuthContext } from "./../Context/UserContext";
import useAdmin from "./../Hooks/useAdmin";
import useBuyer from "./../Hooks/useBuyer";
import useSeller from "./../Hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    fetch(`https://flip-phone-server-towhid7667.vercel.app/users/${user?.email}`)
    .then(res => res.json() )
    .then(data => setUserData(data))
  }, [user])
  return (
    <div>
     <NavbarDash></NavbarDash>

      <div className="drawer drawer-mobile lg:pt-5 md:pt-0 pt-0">
        <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dash-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin && (
              <li>
                <Link to="/dashboard/allusers">All users</Link>
              </li>
            )}
            {isBuyer && (
              <li>
                <Link to="/dashboard/buyerorderList">Your Orders</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to={`/dashboard/sellerorder/${userData.name}`}>My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/uploadItem">Upload Item</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
