import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import SectionOne from './components/SectionOne';
import Projects from './screens/Projects';
import SectionTwo from './components/SectionTwo';
import About from './screens/About';
import SectionThree from './components/SectionThree';
import Education from './screens/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SectionOne />
      <Projects />
      <SectionTwo />
      <About />
      <SectionThree />
      <Education />
      <Footer />
    </div>
  );
}

export default App;