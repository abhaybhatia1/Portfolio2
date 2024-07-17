import React from 'react';

// Example experience data
const experienceData = [
  {
    company: 'FarEye Technologies Pvt. Ltd.',
    dates: 'February 2024 - July 2024',
    description: [
      'Developed and implemented the Internal Developer Platform (IDP), leveraging React for real-time data updates from AWS S3 Bucket.',
      'Centralized deployment and release information, enhancing company-wide visibility into environments, services, and release types.',
      'Automated validation of order and vehicle data through the Express.js backend server, supporting .xlsx and .csv file formats for data input. Frontend was made with React js.',
      'Improved data accuracy and consistency by providing detailed error reports and correction guidelines.',
      'Simplified data submission with a downloadable template, ensuring users adhere to correct formatting.',
      'Enhanced user experience by offering clear error messages and guiding users through the submission process.',
      'Standardized data handling procedures, minimizing errors and streamlining workflow in handling order and vehicle information.'
    ],
  },
];

function Experience() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Experience</h1>
      <div className='max-h-[91vh] overflow-y-auto'>
        {experienceData.map((experience, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
            <div className="p-6">
              <h2 className="text-xl underline font-semibold text-gray-800 mb-2">{experience.company}</h2>
              <p className="text-gray-600 mb-2 italic">{experience.dates}</p>
              <ul className="list-disc list-inside text-gray-700">
                {experience.description.map((point, idx) => (
                  <li key={idx} className="mb-2">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
