import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Projects from './screens/Projects';
import About from './screens/About';
import Education from './screens/Education';
import './App.css';

function App() {
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