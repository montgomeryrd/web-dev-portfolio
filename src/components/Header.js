import { useState } from 'react';
import bgImage from '../assets/images/bw-background.jpg';
import './Header.css';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [image, setImage] = useState(false);

    const operateMenu = () => {
        const imageElement = document.querySelector('.img-container');
        setImage(prev => !prev);

        if (!image) {
            imageElement.classList.add('slide-image');
            setTimeout(() => {
                setMenu(prev => !prev);
            }, 0);
        } else {
            setMenu(prev => !prev);
            setTimeout(() => {
                imageElement.classList.remove('slide-image');
            }, 500);
        }
    }
    return (
        <header>
            <div className="menu-container">
                <div className={menu ? "expand-menu" : "retract-menu"}>
                    <div className="hamburger-menu" onClick={operateMenu}>
                        <div className="hamburger-menu-lines"></div>
                    </div>

                    <div className="menu">
                        <a href="#projects-container" className="select-1">View My Projects</a>
                        <a href="#about-container" className="select-2">About Me</a>
                        <a href="#education-container" className="select-3">Education</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;