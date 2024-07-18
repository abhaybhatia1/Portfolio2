import React from 'react';

function NavBar({ setOption }) {
  const handleOptionClick = (selectedOption) => {
    console.log('NavBar click:', selectedOption);  // Debugging line
    setOption(selectedOption);
  };

  return (
    <div className='flex justify-between items-center px-6 shadow-md py-3 w-full bg-gray-200 h-16'>
      {/* <div className='md:text-xl hidden font-semibold text-gray-800'>ABHAY BHATIA</div> */}
      <div className='flex gap-4 md:gap-7 text-sm'>
        <div onClick={() => handleOptionClick('Home')} className='text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer'>Home</div>
        <div onClick={() => handleOptionClick('Skills')} className='text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer'>Skills</div>
        <div onClick={() => handleOptionClick('Experience')} className='text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer'>Experience</div>
        <div onClick={() => handleOptionClick('Projects')} className='text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer'>Projects</div>
        <div onClick={() => handleOptionClick('Contact')} className='text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer'>Contact</div>
      </div>
    </div>
  );
}

export default NavBar;
