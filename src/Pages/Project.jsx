import React, { useState } from 'react';
import Pro from '../Components/pro';
import ProjectsData from '../FakeDB/ProjectsData';

const projectsData = ProjectsData;

function Project() {
  const [clickedProject, setClickedProject] = useState(null);

  const handleClickReadMore = (project) => {
    setClickedProject(project);
  };

  const handleClosePro = () => {
    setClickedProject(null);
  };

  return (
    <div className="container mx-auto p-8">
      {clickedProject ? (
        <Pro project={clickedProject} onClose={handleClosePro} />
      ) : (
        <div>
          <h1 className="text-3xl font-semibold text-center mb-8">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <div className="p-6">
                  <div className="h-[80%]">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">{project.title}</h2>
                    <p className="text-gray-600 mb-4">
                      {project.summary} <br />
                      <button
                        onClick={() => handleClickReadMore(project)}
                        className="text-sm text-blue-500"
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    {project.sourceCodeLink && (
                      <a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-600 hover:bg-gray-50 p-1"
                      >
                        <span className="text-sm font-medium">Source Code</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.75 2a.75.75 0 0 0-.75.75v14.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5H4.5v-13h12v8.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-.75-.75H3.75zM16.5 8a.75.75 0 0 1 .53 1.28l-4.25 4.25a.75.75 0 1 1-1.06-1.06l4.25-4.25a.75.75 0 0 1 .53-.22z"
                          />
                        </svg>
                      </a>
                    )}
                    {project.deployedLink && (
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-600 hover:bg-gray-50 p-1"
                      >
                        <span className="text-sm font-medium">Deployed Link</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.75 2a.75.75 0 0 0-.75.75v14.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5H4.5v-13h12v8.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-.75-.75H3.75zM16.5 8a.75.75 0 0 1 .53 1.28l-4.25 4.25a.75.75 0 1 1-1.06-1.06l4.25-4.25a.75.75 0 0 1 .53-.22z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap">
                    {project.skillsUsed.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm mr-2 mb-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
