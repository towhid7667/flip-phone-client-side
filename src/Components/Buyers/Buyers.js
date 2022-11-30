import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Loading/Loading';

const Buyers = () => {
    const {data : buyers = [], isLoading} = useQuery({
        queryKey : ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://flip-phone-server-towhid7667.vercel.app/users/buyers',{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="w-11/12 mx-auto">
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {buyers.map((buyer, i) => (
                  <tr key={buyer._id}>
                    <th>{i + 1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td><button className="btn btn-xs btn-danger ">Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Buyers;