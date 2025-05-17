import React from 'react';

const About = () => {
  return (
    <section className="py-12 my-10 bg-gradient-to-r from-green-200 to-green-300 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Digital IT</h2>
        <p className="text-gray-600 mb-8 ">
          Digital IT is a platform dedicated to providing top-notch digital solutions and IT training.
          We help individuals and businesses enhance their skills, productivity, and efficiency in the digital world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">How It Works</h3>
            <p className="text-gray-600">
              We offer online courses, hands-on projects, and mentorship programs. Users can enroll, learn from experts,
              complete assignment also receive certifications to advance their careers.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Benefits</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Flexible learning at your own pace</li>
              <li>Access to industry-leading experts</li>
              <li>Hands-on projects for practical experience</li>
              <li>Career guidance and job placement assistance</li>
              <li>Enhance technical skills for better job opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
