import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './portfolio/Home';
import './portfolio/portfolio.css';
import './App.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;