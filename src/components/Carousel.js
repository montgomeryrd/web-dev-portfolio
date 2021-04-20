import { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import Education from './Education';
import './Carousel.css';

const Carousel = ({ theme }) => {
    const [index, setIndex] = useState(0);
    const [margin, setMargin] = useState(0);    
    
    useEffect(() => {
        const left = document.querySelector('.carouse-left');
        const right = document.querySelector('.carouse-right');

        index === 0 ? left.style.display = 'none' : left.style.display = 'flex';
        index === 2 ? right.style.display = 'none' : right.style.display = 'flex';

    }, [index])

    
    const carouseLeft = () => {
        const element = document.querySelector('#home-container');
        setMargin(prev => prev - 350, () => {
            element.style.marginLeft = margin + 'px';
        });
        setIndex(prev => prev - 1);
    };

    const carouseRight = () => {
        const element = document.querySelector('#home-container');
        setMargin(prev => prev + 350, () => {
            element.style.marginLeft = margin + 'px';
        });
        setIndex(prev => prev + 1);
    };
 
    return (
        <div className="carousel-container">
            <section className="carousel-page">
                <Home theme={theme} />
                <About theme={theme} />
                <Education theme={theme} />
            </section>

            <section className="carousel-buttons-container">
                <div className="carousel-buttons">
                    <button className="carouse-left" onClick={carouseRight}>◀️</button>
                </div>
                <div className="watching-kill-la-kill-so-im-improvising-a-spacer-rather-than-find-proper-css"></div>
                <div className="carousel-buttons">
                    <button className="carouse-right" onClick={carouseLeft}>▶️</button>
                </div>
            </section>
        </div>
    );
};

export default Carousel;