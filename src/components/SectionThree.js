import React from 'react';
import './Sections.css';

const SectionThree = () => {
    return (
        <div className="desktop mobile">
            <ul className="section-three-fontawesome-icons" style={{listStyle: "none"}}>
                <li><i className="fab fa-github"></i></li>
                <li><i className="fab fa-html5"></i></li>
                <li><i className="fab fa-css3"></i></li>
                <li><i className="fab fa-js"></i></li>
                <li><i className="fab fa-node"></i></li>
                <li><i className="fab fa-react"></i></li>
                <li><i className="fas fa-database"></i></li>
                <li><i className="fab fa-mdb"></i></li>
                <li><i className="fab fa-sass"></i></li>
            </ul>
        </div>
    )
}

export default SectionThree;