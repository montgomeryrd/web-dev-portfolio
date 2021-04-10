import { useState } from 'react';
import './EducationCard.css';

const EducationCard = ({ image, company, program, courses, website }) => {
    const [toggle, setToggle] = useState(false);

    const lessons = courses.map((course, key) => (
        <li key={key}>{course}</li>
    ));

    return (
        <div className="education-card-container">
            <img className={`education-card-image ${company}`} src={image} alt={image} onClick={() => {setToggle(prev => !prev)}}></img>
            <section className={toggle ? "card-expand" : "card-retract"}>
                <h3 className="education-card-program">{program}</h3>
                <ul className="education-card-courses">{lessons}</ul>
                <a className="education-card-link" href={website}>visit website</a>
            </section>
        </div>
    )
};

export default EducationCard;