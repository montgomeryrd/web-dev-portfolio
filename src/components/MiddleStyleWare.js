import { useState } from 'react';

import Header from './Header';
import Home from './Home';
import SectionOne from './SectionOne';
import Projects from './Projects';
import SectionTwo from './SectionTwo';
import About from './About';
import SectionThree from './SectionThree';
import Education from './Education';
import Footer from './Footer';

const MiddleStyleWare = () => {
    const [styling, setStyling] = useState("");

    return (
        <>
            <Header styling={styling} />
            <ul className="theme-list">
                <li className="theme theme-1" onClick={setStyling("3d-elements")}>3D Elements</li>
                <li className="theme theme-2" onClick={setStyling("glassmorphism")}>Glassmorphism</li>
                <li className="theme theme-3" onClick={setStyling("dark-mode")}>Dark Mode</li>
                <li className="theme theme-4" onClick={setStyling("colorless")}>Colorless UI</li>
                <li className="theme theme-5" onClick={setStyling("bauhaus")}>Bauhaus</li>
                <li className="theme theme-6" onClick={setStyling("on-white")}>Colors on White</li>
                <li className="theme theme-7" onClick={setStyling("immersive")}>Immersive</li>
                <li className="theme theme-8" onClick={setStyling("big-bold")}>Big Bold Typography</li>
            </ul>
            <Home styling={styling} />
            <SectionOne styling={styling} />
            <Projects styling={styling} />
            <SectionTwo styling={styling} />
            <About styling={styling} />
            <SectionThree styling={styling} />
            <Education styling={styling} />
            <Footer styling={styling} />
        </>
    )
}

export default MiddleStyleWare;