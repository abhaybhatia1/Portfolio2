import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

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
      ) : (
        <Home setOption={setOption} />
      )}
    </div>
  );
}

export default App;
