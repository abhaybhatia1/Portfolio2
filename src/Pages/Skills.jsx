import React from 'react';

function Skills() {
  // Sample data for skills with their levels
  const skillsData = [
    { skill: 'Java', level: 4 }, // Assuming level ranges from 1 to 5
    { skill: 'React js', level: 4 },
    { skill: 'HTML/CSS', level: 4 },
    { skill: 'Node.js', level: 3 },
    { skill: 'Express js', level: 3 },
    { skill: 'Tailwind CSS', level: 4 },
    // { skill: 'GraphQL', level: 3 },
    // { skill: 'TypeScript', level: 4 },
  ];

  return (
    <div className="bg-white text-black min-h-[92vh] flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl  font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((item, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
              <div className="text-lg font-semibold mb-2">{item.skill}</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${i < item.level ? 'text-yellow-400' : 'text-gray-300'} inline`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12.22l-4.156 2.409.796-4.647-3.36-3.279 4.65-.676L10 2.775l2.07 4.153 4.65.676-3.36 3.28.796 4.647L10 12.22z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
