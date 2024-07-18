import React, { useState } from 'react';
import './App.css';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Project';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Certificates from './Pages/Certificates';
import Education from './Pages/Education';

function App() {
  const [option, setOption] = useState('Home');

  console.log('Current option:', option);  // Debugging line

  return (
    <div className='bg-white h-full'>
      <NavBar setOption={setOption} />
      {option === 'Skills' ? (
        <Skills />
      ) : option === 'Projects' ? (
        <Projects />
      ) : option === 'Experience' ? (
        <Experience />
      ): option === 'Contact' ? (
        <Contact />
      ): option === 'Certificates' ? (
        <Certificates />
      ) : option === 'Education' ? (
        <Education />
      ) : (
        <Home setOption={setOption} />
      )}
    </div>
  );
}

export default App;
