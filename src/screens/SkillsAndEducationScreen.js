import { Col } from 'react-bootstrap';
import Education from '../components/Education';
import education from '../education';

const SkillsAndEducationScreen = () => {
    return (
        <>
            <h2 className="pl-3 lead">Skills and Education</h2>          
            <ul className="ml-4 mr-4 mt-1  font-awesome-icons" style={{listStyle: "none"}}>
                <li className="px-2"><i className="fab fa-github"></i></li>
                <li className="px-2"><i className="fab fa-html5"></i></li>
                <li className="px-2"><i className="fab fa-css3"></i></li>
                <li className="px-2"><i className="fab fa-js"></i></li>
                <li className="px-2"><i className="fab fa-node"></i></li>
                <li className="px-2"><i className="fab fa-react"></i></li>
                <li className="px-2"><i className="fab fa-mdb"></i></li>
                <li className="px-2"><i className="fab fa-sass"></i></li>
                <li className="px-2"><i className="fas fa-database"></i></li>
            </ul>
            <section className="py-3">
                <Col>
                    {education.map((course, index) => 
                        <Education education={course} key={index} />
                    )}
                </Col>
            </section>
        </>
    )
}

export default SkillsAndEducationScreen;