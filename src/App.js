import { useState } from 'react';
import Header from './components/Header';
// import Home from './components/Home';
import Carousel from './components/Carousel';
// import SectionOne from './components/SectionOne';
// import Projects from './components/Projects';
// import SectionTwo from './components/SectionTwo';
// import About from './components/About';
// import SectionThree from './components/SectionThree';
// import Education from './components/Education';
// import Footer from './components/Footer';
import './App.css';

function App() {
	const [count, setCount] = useState(1);
	const [theme, setTheme] = useState('primary');
	
	const setPageStyling = (count) => {
		const themes = ['primary', '3d-elements', 'glassmorphism', 'dark-mode', 'colorless', 'bauhaus', 'on-white', 'immersive', 'big-bold'];
		const theme = themes[count % themes.length];
		setCount(prev => prev + 1);
		setTheme(theme);
		return theme;
	};

	const button = <button className="change-theme" onClick={() => {setPageStyling(count)}}>change theme</button>

	return (
		<div className="App">
			<Header theme={theme} />
			<Carousel />
			{/* <Home theme={theme} button={button} /> */}
			{/* <SectionOne theme={theme} />
			<Projects theme={theme} />
			<SectionTwo theme={theme} />
			<About theme={theme} />
			<SectionThree theme={theme} />
			<Education theme={theme} />
			<Footer theme={theme} /> */}
		</div>
	);
}

export default App;