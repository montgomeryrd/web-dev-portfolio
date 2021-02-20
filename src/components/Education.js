import { Card, Nav } from 'react-bootstrap';

const Education = ({ education }) => {
    return (
        <Card className="mb-1 card-container">
            <Card.Body>
                <Card.Title as='h2' className="card-title">
                    <strong>{education.company}</strong>
                </Card.Title>

                <Card.Subtitle as='h5' className="pb-2 card-subtitle">
                    <strong>{education.program}</strong>
                </Card.Subtitle>

                <Card.Text as='div' className="card-list">
                    <ul style={{listStyle: "none"}}>
                        {education.courses.map((course, index) => 
                            <li key={`${course}-${index}`}>
                                {course}
                            </li>
                        )}
                    </ul>
                </Card.Text>
                <Nav>
                    <Nav.Link href={education.website} target="_blank">
                        <Card.Text as='div' className="mb-3 card-link">
                            visit website
                        </Card.Text>
                    </Nav.Link>
                </Nav>
            </Card.Body>
        </Card>
    )
}

export default Education;