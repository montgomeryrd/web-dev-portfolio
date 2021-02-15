import { Card, Nav } from 'react-bootstrap';

const Education = ({ education }) => {
    return (
        <Card className="mb-1">
            <Card.Body>
                <Card.Title as='h2'>
                    <strong>{education.company}</strong>
                </Card.Title>
                <Card.Text as='div'>
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
                        <Card.Text as='div' style={{marginLeft: "-15px"}}>
                            visit website
                        </Card.Text>
                    </Nav.Link>
                </Nav>
            </Card.Body>
        </Card>
    )
}

export default Education;