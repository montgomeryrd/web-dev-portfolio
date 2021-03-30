import { useState } from 'react';
import me from '../assets/images/../../assets/images/me.jpg';
import './Header.css';

const Header = () => {
    const [modal, setModal] = useState(false);

    return (
        <header>
            <div className="hamburger-menu" onClick={() => {setModal(prev => !prev)}}>
                <div className="hamburger-lines"></div>
            </div>

            <div className="hamburger-modal" style={{display: modal ? 'flex' : 'none'}}>
                <h2>Projects</h2>
                <h2>About</h2>
                <h2>Education</h2>
            </div>

            <div className="img-container">
                <img className="profile-pic" src={me} alt="profile pic" />
            </div>
        </header>
    )
}

export default Header;