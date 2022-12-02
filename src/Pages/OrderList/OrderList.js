import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const OrderList = () => {
    const products = useLoaderData()

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
        <div className="w-11/12 mx-auto py-20">
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Phone</th>
                  <th>Seller Name</th>
                  <th>Location</th>
                  <th>Deal Price</th>
                  <th>Action</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr key={product._id}>
                    <th>{i + 1}</th>
                    <td><div className="avatar">
  <div className="w-24 rounded">
    <img src= {product.img} alt='' />
  </div>
</div></td>
                    <td>{product.title}</td>
                    <td>{product.sellerName}</td>
                    <td>{product.Location}</td>
                    <td>${product.dealPrice}</td>
                    <td><button onClick={() => handleDelete(product._id)}  className="btn btn-xs btn-danger ">Delete</button></td>
                    <td><button onClick={() => handleDelete(product._id)}  className="btn btn-xs btn-success ">pay</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default OrderList;