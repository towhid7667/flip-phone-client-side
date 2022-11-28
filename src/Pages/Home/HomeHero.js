import React from 'react';

const HomeHero = () => {
    return (
        <div className=" w-10/12 mx-auto p-10 hero rounded-lg my-20 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.pexels.com/photos/11026127/pexels-photo-11026127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="lg:max-w-xs rounded-lg shadow-2xl" />
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">New Phones everyday</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default HomeHero;