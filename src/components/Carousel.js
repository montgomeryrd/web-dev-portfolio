import { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import Education from './Education';
import './Carousel.css';

const Carousel = ({ theme }) => {
    const [index, setIndex] = useState(0);
    // const [margin, setMargin] = useState(0);    
    
    useEffect(() => {
        const left = document.querySelector('.carouse-left');
        const right = document.querySelector('.carouse-right');
        const elements = document.querySelector('.carousel-pages');

        index === 0 ? left.style.display = 'none' : left.style.display = 'flex';
        index === 2 ? right.style.display = 'none' : right.style.display = 'flex';

        if (index === 0) {
            elements.style.marginLeft = `${0}px`;
            elements.style.transition = `${1}s ease-in-out`;
        }

        if (index === 1) {
            elements.style.marginLeft = `${-450}px`;
            elements.style.transition = `${1}s ease-in-out`;
        }

        if (index === 2) {
            elements.style.marginLeft = `${-900}px`;
            elements.style.transition = `${1}s ease-in-out`;
        }

    }, [index])
 
    return (
        <div className="carousel-container">
            <section className="carousel-page-view">
                <div className="carousel-pages">
                    <Home theme={theme} />
                    <About theme={theme} />
                    <Education theme={theme} />
                </div>
            </section>

            <section className="carousel-buttons-container">
                <div className="carousel-buttons">
                    <button className="carouse-left" onClick={() => {setIndex(prev => prev - 1)}}>◀️</button>
                </div>
                <div className="watching-kill-la-kill-so-im-improvising-a-spacer-rather-than-find-proper-css"></div>
                <div className="carousel-buttons">
                    <button className="carouse-right" onClick={() => {setIndex(prev => prev + 1)}}>▶️</button>
                </div>
            </section>
        </div>
    );
};

export default Carousel;