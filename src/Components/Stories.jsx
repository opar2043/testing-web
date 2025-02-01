import React from 'react';

const Stories = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Volunteer',
      message: 'Helping others has been a life-changing experience.i am very alert about my work and responsibility. so its an honor for me to work with them',
      image: 'https://i.ibb.co.com/Hq16zSy/men-1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Client',
      message: 'The support I received made my transition so much easier.i hope i will work again with this brilliant team. All the best ',
      image: 'https://i.ibb.co.com/s6jWsyD/men-3.jpg'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-12 rounded-lg shadow-lg my-10 bg-gradient-to-r from-green-100 to-green-300">
   <div className='flex flex-col justify-center items-center text-green-600'>
   <h2 className="text-5xl font-extrabold  mb-6">Stories</h2>
   <p className="mb-8 text-xl font-semibold">Hear from our volunteers and clients about their experiences. we arte very carefull about our duty and work</p>
   </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-10'>
       {
        testimonials && testimonials.map((test , idx)=>       <div key={idx} className="card card-side flex-col md:flex-row bg-base-100 shadow-xl">
        <figure>
          <img
            src={test.image}
            className='w-full md:w-[420px] object-cover h-full'
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{test.name} 
          <div className="badge badge-secondary">{test.role}</div>
          </h2>

          <p className='text-gray-700'>-{test.message}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-green-400 text-green-900 px-4">About Details</button>
          </div>
        </div>
      </div>)
       }
    </div>
    </div>
  );
};

export default Stories;
