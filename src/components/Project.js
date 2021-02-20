import { Card, Nav } from 'react-bootstrap';

const Project = ({ project }) => {
    return (
        <Card className="my-3 works-card-container">
            <Nav>
                <Nav.Link href={project.website} target="_blank">
                    <Card.Img src={project.image} variant='top' />
                </Nav.Link>
            </Nav> 

            <Card.Body className="p-3">        
                <Card.Title as='div' className="ml-3" style={{fontSize: "1.4rem"}}>
                    <strong className="text-info">{project.name}</strong>
                </Card.Title>
                
                <Card.Text as='p' className="ml-3">
                    {project.tools}
                </Card.Text>

                <Card.Text as='p' className="ml-3 mr-3">
                    {project.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project;