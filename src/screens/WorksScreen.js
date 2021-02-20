import { Col, Row } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Project from '../components/Project';
import projects from '../projects';

const WorksScreen = () => {
    const items = projects.map(project =>
        <Col key={project._id} sm={12} md={6} lg={4} xl={4}>
            {<Project project={project} />}
        </Col>
    )
    return (
        <>
            <h2 className="pl-3 lead">Featured Projects</h2>  
            <Row  className="works-screen-container">
                <AliceCarousel disableButtonsControls mouseTracking items={items} />
            </Row>
        </>
    )
}

export default WorksScreen;