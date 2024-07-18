import React from 'react';
import educationData from '../FakeDB/Data/EducationData'; // Assuming you have imported educationData correctly

const education = educationData;

function Education() {
  return (
    <div className="w-[85vw] mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Education</h1>
      {education.map((edu, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">{edu.institution}</h2>
          <p className="text-sm text-gray-600 mb-2">{edu.degree}</p>
          <p className="text-sm text-gray-600 mb-2">{edu.duration}</p>
          <p className="text-sm">{edu.grade}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
