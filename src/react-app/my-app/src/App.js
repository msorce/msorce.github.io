import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { particlesOptions } from "./particle-options";
const date = new Date();

function App() {
  return (
    <div className="App">
      <Particles className="particles-container" 
        params={particlesOptions}/>
      <div className="name">MARK SORCE <span>Software Engineer</span></div>
      <nav>
        <a href="https://goo.gl/3qfvPY" 
          target="_blank" 
          rel="noopener noreferrer">resume</a>
        <a href="https://www.linkedin.com/in/msorce" 
          target="_blank" 
          rel="noopener noreferrer">linkedin</a>
        <a href="https://github.com/msorce" 
          target="_blank" 
          rel="noopener noreferrer">github</a>
        <a href="mailto:%6Dsorc%65ma%69%6Ch%61ndler@gm%61%69l.com" 
          target="_blank" 
          rel="noopener noreferrer">email</a>
        <a href="https://codepen.io/msorce/" 
          target="_blank" 
          rel="noopener noreferrer">codepen</a>
      </nav>
      <copy> &copy; {date.getFullYear()} </copy>
    </div>
  );
}

export default App;
