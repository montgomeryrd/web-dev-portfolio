import { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import Education from './Education';

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(<Home />);

    
    useEffect(() => {
        const left = document.querySelector('.carouse-left');
        const right = document.querySelector('.carouse-right');
        index === 0 ? left.style.display = 'hide' : left.style.display = 'flex';
        index === 2 ? right.style.display = 'hide' : right.style.display = 'flex';
    }, []);
    
    const carouse = (index) => {
        const pages = ['home', 'about', 'education'];
        const result = pages[index];

        switch(result) {
            case 'home': return setPage(<Home />);
            case 'about': return setPage(<About />);
            case 'education': return setPage(<Education />);
            default: return setPage(<Home />);
        };
    };

    const carouseLeft = () => {
        setIndex(prev => prev - 1, () => {
            carouse(index);
        });
    };

    const carouseRight = () => {
        setIndex(prev => prev + 1, () => {
            carouse(index);
        });
    };

    return (
        <div className="carousel-container">
            <section className="carousel-page">
                {page}
            </section>
            <section className="carousel-buttons">
                <button className="carouse-left" onClick={carouseLeft}>◀️</button>
                <button className="carouse-right" onClick={carouseRight}>▶️</button>
            </section>
        </div>
    );
};

export default Carousel;