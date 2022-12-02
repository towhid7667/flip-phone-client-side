import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SellerOrder = () => {
    const sellerorder = useLoaderData()


    const handleDelete = id =>{
        fetch(`https://flip-phone-server-towhid7667.vercel.app/orderlist/${id}`,{
            method : 'DELETE',
            
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
              toast.success('Product Deleted')
              
            }
          })
       
    }
    return (
        <div>
            <div className="w-11/12 mx-auto py-20">
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Phone</th>
                  <th>Deal Price</th>
                  <th>Action</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {sellerorder.map((order, i) => (
                  <tr key={order._id}>
                    <th>{i + 1}</th>
                    <td><div className="avatar">
  <div className="w-24 rounded">
    <img src= {order.img} alt='' />
  </div>
</div></td>
                    <td>{order.title}</td>
                    <td>${order.dealPrice}</td>
                    <td><button onClick={() => handleDelete(order._id)}  className="btn btn-xs btn-danger ">Delete</button></td>
                    <td><button onClick={() => handleDelete(order._id)}  className="btn btn-xs btn-success ">pay</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SellerOrder;