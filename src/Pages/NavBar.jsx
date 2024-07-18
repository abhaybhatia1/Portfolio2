import React from 'react';

function NavBar({ setOption }) {
  const handleOptionClick = (selectedOption) => {
    console.log('NavBar click:', selectedOption);  // Debugging line
    setOption(selectedOption);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-6 shadow-md py-3 bg-gray-200'>
      {/* Logo or Title (if needed) */}
      
      {/* Navigation Links */}
      <div className='flex flex-wrap gap-5 md:gap-4 justify-center md:justify-start text-sm md:text-base'>
        <div onClick={() => handleOptionClick('Home')} className='text-gray-700 hover:text-blue-600 cursor-pointer'>Home</div>
        <div onClick={() => handleOptionClick('Skills')} className='text-gray-700 hover:text-blue-600 cursor-pointer'>Skills</div>
        <div onClick={() => handleOptionClick('Experience')} className='text-gray-700 hover:text-blue-600 cursor-pointer'>Experience</div>
        <div onClick={() => handleOptionClick('Projects')} className='text-gray-700 hover:text-blue-600 cursor-pointer'>Projects</div>
        <div onClick={() => handleOptionClick('Certificates')} className='text-gray-700 hover:text-blue-600 cursor-pointer'>Certificates</div>
        <div onClick={() => handleOptionClick('Education')} className='text-gray-700 hover:text-blue-600 cursor-pointer'>Education</div>
        <div onClick={() => handleOptionClick('Contact')} className='text-gray-700 hover:text-blue-600 cursor-pointer'>Contact</div>
      </div>
    </div>
  );
}

export default NavBar;
