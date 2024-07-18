import React from 'react';

const Pro = ({ project, onClose }) => {
  if (!project) return null; // If project data is not available, return null or handle accordingly

  return (
    <div className="max-w-[85vw] mx-auto p-6 bg-white rounded-lg shadow-md relative">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 px-4 py-2 bg-gray-50 shadow-md text-gray-800 rounded hover:scale-105  transition duration-300"
      >
        Go Back
      </button>
      <h2 className="text-3xl font-bold mb-12 text-center">{project.title}</h2> 
      {project.deployedLink && (
        <p className="text-gray-800 mb-4">
          <strong>Deployed Version:</strong>{' '}
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {project.deployedLink}
          </a>
        </p>
      )}
      {project.sourceCodeLink && (
        <p className="text-gray-800 mb-4">
          <strong>Source Code:</strong>{' '}
          <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {project.sourceCodeLink}
          </a>
        </p>
      )}
      <p className="text-gray-800 mb-4">
        <strong>Technologies Used:</strong> {project.skillsUsed.join(', ')}
      </p>
      <div className="text-gray-800 mb-4">
        <strong>Project Explanation:</strong>
        <ul className="list-disc list-inside mt-2">
          {project.sourceCodeExplanation.map((item, index) => (
            <li key={index} className="mt-2">
              <strong>{item.heading}:</strong> {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pro;
