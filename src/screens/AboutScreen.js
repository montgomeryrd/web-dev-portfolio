import { Jumbotron } from 'react-bootstrap';

const AboutScreen = () => {
    return (
        <>
            <Jumbotron id="about" className="about-screen-container">
                <h1 className="display-4">At a glimpse</h1>
                <p>
                    a short video
                </p>
                <p>
                    summary
                </p>
            </Jumbotron>
        </>
    )
}

export default AboutScreen;