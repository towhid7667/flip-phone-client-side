import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const UploadItem = () => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const imageHostKey = process.env.REACT_APP_imagebb_key;

      const handleUpload = (data) => {
        const img = data.photo[0];
        const formData = new FormData();
        formData.append("image", img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            if (imgData.success) {
              // console.log(imgData.data.url);
              const product = {
                img: imgData.data.url,
                title: data.title,
                description: data.description,
                originalPrice: data.originalPrice,
                dealPrice : data.bestPrice,
                sellerName: data.sellerName,
                Location: data.location,
                used : data.used,
                category : data.category,
                advertisement : data.advertisement
                
              };
    
              fetch("https://flip-phone-server-towhid7667.vercel.app/allproducts",
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`,
                  },
                  body: JSON.stringify(product),
                })
                .then(res => res.json())
                    .then(result =>{
                        console.log(result);
                        toast.success(`${data.title} is added successfully`);
                        navigate('/')
                      
                    })
                  
            }
          
    
    
          });
    
      };
    
    

    return (
        <div className="lg:w-5/12 md:w-8/12 w-10/12 mx-auto lg:mx-0  p-7 my-5 border shadow-lg">
      <h2 className="my-5 text-2xl">Add Product here</h2>
      <form onSubmit={handleSubmit(handleUpload)}>
        <label className="label">
          <span className="label-text">title</span>
        </label>
        <input
          type="text"
          {...register("title", { required: "title is required" })}
          aria-invalid={errors.title ? "true" : "false"}
          placeholder="title"
          className="input input-bordered w-full"
        />
        {errors.title && <p className="text-red-600">{errors.title?.message}</p>}



        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea rows='2'  cols = '15'
          {...register("description", { required: "description Address is required" })}
          aria-invalid={errors.description ? "true" : "false"}
          placeholder="description"
          className="border-2 rounded-lg px-2 w-full h-40"
        />
        {errors.description && (
          <p className="text-red-600">{errors.description?.message}</p>
        )}

        
        <label className="label">
          <span className="label-text">Original Price</span>
        </label>
        <input
          type="number"
          {...register("originalPrice", { required: "originalPrice Address is required" })}
          aria-invalid={errors.originalPrice ? "true" : "false"}
          placeholder="Original Price"
          className="input input-bordered w-full"
        />
        {errors.originalPrice && (
          <p className="text-red-600">{errors.originalPrice?.message}</p>
        )}
{/* sp;f,s;,fs,s;f, */}

        <label className="label">
          <span className="label-text">Seller Name</span>
        </label>
        <input
          type="text"
          placeholder='Seller name'
          {...register("sellerName", { required: "Seller Name Address is required" })}
          aria-invalid={errors.originalPrice ? "true" : "false"}
          className="input input-bordered w-full"
        />
        {errors.originalPrice && (
          <p className="text-red-600">{errors.originalPrice?.message}</p>
        )}


        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          {...register("location", { required: "originalPrice Address is required" })}
          aria-invalid={errors.location ? "true" : "false"}
          placeholder="Location"
          className="input input-bordered w-full"
        />
        {errors.location && (
          <p className="text-red-600">{errors.originalPrice?.location}</p>
        )}


        <label className="label">
          <span className="label-text">Used</span>
        </label>
        <input
          type="text"
          {...register("used", { required: "originalPrice Address is required" })}
          aria-invalid={errors.used ? "true" : "false"}
          placeholder="Used"
          className="input input-bordered w-full"
        />
        {errors.used && (
          <p className="text-red-600">{errors.originalPrice?.used}</p>
        )}


        <label className="label">
          <span className="label-text">Best Price</span>
        </label>
        <input
          type="number"
          {...register("bestPrice", { required: "bestPrice Address is required" })}
          aria-invalid={errors.bestPrice ? "true" : "false"}
          placeholder="Best Price"
          className="input input-bordered w-full"
        />
        {errors.bestPrice && (
          <p className="text-red-600">{errors.bestPrice?.message}</p>
        )}

        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <select
          {...register("category", { required: "Photo is required" })}
          className="select select-bordered w-full "
        >
           <option>Apple</option>
              <option>Android</option>
              <option>Gaming Phone</option>
        </select>
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input
          type="file"
          {...register("photo", { required: "Photo is required" })}
          aria-invalid={errors.photo ? "true" : "false"}
          className="file-input file-input-bordered file-input-secondary w-full"
        />
        {errors.photo && (
          <p className="text-red-600">{errors.photo?.message}</p>
        )}

<label className="label">
          <span className="label-text">Advertisement</span>
        </label>
        <select
          {...register("advertisement")}
          className="select select-bordered w-full "
        >
           <option>Yes</option>
              <option>No</option>
        </select>

        
        <input
          type="submit"
          value="Add Product"
          className="input input-bordered w-full bg-primary text-white font-bold mt-3 hover:bg-lime-800"
        />
      </form>
    </div>
    );
};

export default UploadItem;