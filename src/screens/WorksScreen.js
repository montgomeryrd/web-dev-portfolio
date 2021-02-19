import { Col, Row } from 'react-bootstrap';
import Project from '../components/Project';
import projects from '../projects';

const WorksScreen = () => {
    return (
        <>
            <h2 className="pl-3 lead">Featured Projects</h2>  
            <Row  className="works-screen-container">
                {projects.map(project =>
                    <Col key={project._id} sm={12} md={6} lg={4} xl={4}>
                        {<Project project={project} />}
                    </Col>
                )}
            </Row>
        </>
    )
}

export default WorksScreen;