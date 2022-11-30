import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { AuthContext } from './../Context/UserContext';
import useAdmin from './../Hooks/useAdmin';
import useBuyer from './../Hooks/useBuyer';
import useSeller from './../Hooks/useSeller';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="drawer drawer-mobile my-10">
        <input id="doc-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="doc-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              {
                isAdmin && <>
                <Link to='/dashboard/allusers'>All users</Link>
                </>
              }
              
            </li>
            <li>
                {
                    isBuyer && <>
                     <Link to='/dashboard/buyerorderList'>Your Orders</Link>
                    </>
                }
            </li>
            <li>
                {
                    isSeller && <>
                     <Link to='/dashboard/sellerorderList'>My Orders</Link>
                     <Link to='/dashboard/uploadItem'></Link>
                     
                    </>
                }
            </li>
          </ul>
        </div>
      </div>
            <Footer></Footer>
            
        </div>
    );
};

export default DashboardLayout;