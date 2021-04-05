import { useState } from 'react';
import me from '../assets/images/../../assets/images/me.jpg';
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
            <section className={menu ? "expand-menu menu-container" : "retract-menu menu-container"}>
                <div className="hamburger-menu" onClick={operateMenu}>
                    <div className="hamburger-menu-lines"></div>
                </div>

                <div className="menu">
                    <h2 className="select-1">View My Projects</h2>
                    <h2 className="select-2">About Me</h2>
                    <h2 className="select-3">Education</h2>
                </div>
            </section>

            <section className="img-container">
                <img className="profile-pic" src={me} alt="profile pic" />
            </section>
        </header>
    )
}

export default Header;