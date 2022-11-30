import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from './../Loading/Loading';
import { toast } from 'react-hot-toast';

const Sellers = () => {
    const {data : sellers = [], isLoading,refetch} = useQuery({
        queryKey : ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://flip-phone-server-towhid7667.vercel.app/users/sellers',{
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

    const handleDelete = id =>{
        fetch(`https://flip-phone-server-towhid7667.vercel.app/users/${id}`,{
            method : 'DELETE',
            headers : {
              authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
              toast.success('user Deleted')
              refetch();
            }
          })
       
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
                {sellers.map((seller, i) => (
                  <tr key={seller._id}>
                    <th>{i + 1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td><button onClick={()=> handleDelete(seller._id)} className="btn btn-xs btn-danger ">Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Sellers;