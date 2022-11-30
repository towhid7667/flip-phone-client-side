import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../../../Context/UserContext';

const DisplayERROR = () => {
    const {logOut}= useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
      }
    return (

        
        <div className='flex flex-col justify-center items-center h-screen'>
            <h2 className='  text-3xl font-bold text-red-600 '>ERROR</h2>
            <button onClick={handleLogOut} className='btn btn-secondary'>LogOut</button>
        </div>
    );
};

export default DisplayERROR;