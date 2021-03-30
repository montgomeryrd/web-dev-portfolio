import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Projects from './screens/Projects';
import About from './screens/About';
import Education from './screens/Education';
import { useEffect, useRef } from 'react';
import './App.css';

function App() {

  let y = useRef(window.pageYOffset);

  const trackingScrollY = () => {
    y.current = Math.round(window.pageYOffset);
    console.log(y);
  };

  useEffect(() => {
    window.addEventListener('scroll', trackingScrollY);
    // window.addEventListener('scroll', addButt);
  }, []);

  // const addButt = () => {
  //   if (y.current > 500) {
  //     const box = document.querySelector('.box-2');
  //     const text = document.createElement('p');
  //     text.innerHTML = 'butt';
  //     box.appendChild(text);
  //     return window.removeEventListener('scroll', addButt);
  //   }
  // }  

  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <About />
      <Education />
      <Footer />
    </div>
  );
}

export default App;