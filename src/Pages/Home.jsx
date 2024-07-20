import React from 'react';
import Icon from '../FakeDB/icons/icon';
import CV from '../Assets/CV/Abhay_Bhatia_CV.pdf'
const icons = Icon;

function Home({ setOption }) {
  const handleOptionClick = (selectedOption) => {
    setOption(selectedOption);
  };

  const cards = [
    { title: 'Skills', link: '/', icon: icons.skills },
    { title: 'Projects', link: '/', icon: icons.projects },
    { title: 'Experience', link: '/', icon: icons.experience },
    { title: 'Contact', link: '/', icon: icons.contact },
  ];

  return (
    <div className='bg-white text-black min-h-[92vh] flex items-center justify-center'>
      <div className='bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl w-full'>
        <div className='text-center mb-8'>
          <p className='text-2xl font-semibold'>
            Hi, I'm <a href='https://www.linkedin.com/in/abhay-bhatia-202935229' className='text-blue-600 hover:text-red-600 hover:underline transition-colors duration-300'>Abhay Bhatia</a>. <br />
            A Fullstack Developer.
          </p> 
          <a href={CV}  target="_blank"  className="text-blue-600 hover:underline">RESUME</a>
          <p className='text-lg leading-relaxed mt-4'>
            I specialize in developing robust and scalable web applications using the latest technologies. With a keen eye for detail and a passion for coding, I strive to deliver exceptional user experiences. My expertise includes both front-end and back-end development, ensuring seamless integration and functionality across all platforms.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cards.map((card, index) => (
            <button key={index} onClick={() => handleOptionClick(card.title)} className='bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-blue-600 hover:text-white transform transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none'>
              {card.icon}
              <span className='mt-2 text-lg font-medium'>{card.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
