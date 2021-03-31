import pexels from '../assets/videos/pexels-pavel-danilyuk-5495781.mp4';
import './Home.css';

const Home = () => {
    return (
        <div id="home-container" className="desktop mobile" style={{height: `${100}vh`}}>
            <main className="home-container" role="main">
                <section className="home-jumbotron">
                    <video src={pexels} muted loop autoPlay></video>
                    <div className="overlay"></div>
                    <div className="home-jumbotron-text">
                        <h2 className="home-intro">Hi, my name is</h2>
                        <h1 className="home-name">RICHARD MONTGOMERY</h1>
                        <p className="home-paragraph">
                            I am a web developer living on the Kitsap Peninsula 
                            in Washington State. I enjoy building functional web 
                            applications using interactive, adaptive and responsive design.
                        </p>
                    </div>
                </section>
                
                <section className="alt-links">
                    <div className="github links">
                        <a href="https://github.com/montgomeryrd" target="_blank" rel="noreferrer">
                            <i className="icons fab fa-github-square"></i>
                        </a>
                    </div>
                    <div className="linkedin links">
                        <a href="https://www.linkedin.com/in/montgomeryrd/" target="_blank" rel="noreferrer">
                            <i class="icons fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="twitter links">
                        <a href="https://twitter.com/ReallyGreenCode" target="_blank" rel="noreferrer">
                            <i className="icons fab fa-twitter"></i>               
                        </a>
                    </div>
                    <div className="resume links">
                        <a href="https://docs.google.com/document/d/14xeZcrS5G_fks0mnwhQnKD8FiJymT83mCovkMyAKpTY/edit?usp=sharing" target="_blank" rel="noreferrer">
                            <i className="icons fas fa-code"></i>   
                        </a>
                    </div>
                    <div className="blank link"></div>
                </section>
            </main>
        </div>
    );
};

export default Home;