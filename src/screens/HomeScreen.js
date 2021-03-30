import { Jumbotron } from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <>
            <Jumbotron id="home" className="home-screen-container">
                <h2 className=" lead">Hi, my name is</h2>          
                <h1>Richard Montgomery</h1>
                <p>
                    I am a web developer living on the Kitsap Peninsula in Washington State.
                    I enjoy building functional web applications using interactive, adaptive
                    and responsive design.
                </p>
                <div className="home-arrow">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </Jumbotron>
        </>
    )
}

export default HomeScreen;