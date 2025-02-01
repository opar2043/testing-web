import React from 'react';

const Service = () => {
  const services = [
    { title: 'Pre-Arrival', description: 'Guidance and support before arriving at your destination.' },
    { title: 'Get Settled', description: 'Help with accommodation, transportation, and essential services.' },
    { title: 'Learn English', description: 'Improve language skills with structured learning programs.' },
    { title: 'Look for Work', description: 'Career guidance and job search assistance.' },
  ];

  return (
    <section className="py-12 text-green-600 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold  mb-6 ">Our Services</h2>
        <p className=" mb-8 font-semibold">We provide essential support to help you transition smoothly.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white  p-6 py-10 rounded-lg  border-2 border-green-400 shadow-lg">
              <h3 className="text-2xl  font-semibold text-green-700 mb-5">      <span className='bg-green-300  rounded-full px-2 p-1 text-center'>{idx + 1}.</span>   {service.title}</h3>
              <p className="text-gray-600">-{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
