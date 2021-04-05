import pexels from '../assets/videos/pexels-pavel-danilyuk-5495781.mp4';
// import html5 from '../assets/icons/html5.png';
// import css3 from '../assets/icons/css3.png';
// import javascript from '../assets/icons/javascript.png';
// import react from '../assets/icons/react.png';
// import node from '../assets/icons/nodejs.png';
// import mongodb from '../assets/icons/mongodb.png';
// import sass from '../assets/icons/sass.png';
import './Home.css';

const Home = () => {
    return (
        <div id="home-container" className="desktop mobile" style={{height: `${100}vh`}}>
            <main className="home-container" role="main">

                <video src={pexels} muted loop autoPlay></video>
                <div className="overlay"></div>

                <section className="home-jumbotron">
                    <h2 className="home-intro">Hi, my name is</h2>
                    <h1 className="home-name">RICHARD MONTGOMERY</h1>
                    <p className="home-paragraph">
                        I am a web developer living on the Kitsap Peninsula 
                        in Washington State. I enjoy building functional web 
                        applications using interactive, adaptive and responsive design.
                    </p>
                </section>

                <section className="alt-links">
                    <a className="github links" href="https://github.com/montgomeryrd" target="_blank" rel="noreferrer">
                        <i className="icons fab fa-github-square"></i>
                    </a>
                    <a className="linkedin links" href="https://www.linkedin.com/in/montgomeryrd/" target="_blank" rel="noreferrer">
                        <i className="icons fab fa-linkedin-in"></i>
                    </a>
                    <a className="twitter links" href="https://twitter.com/ReallyGreenCode" target="_blank" rel="noreferrer">
                        <i className="icons fab fa-twitter"></i>               
                    </a>
                    
                    <a className="resume links" href="https://docs.google.com/document/d/14xeZcrS5G_fks0mnwhQnKD8FiJymT83mCovkMyAKpTY/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <i className="icons fas fa-code"></i>   
                    </a>
                </section>

                <section className="home-footer">
                    <div className="arrow"></div>
                </section>

                {/* <section className="home-libraries">
                    <img src={html5} alt="HTML5" />
                    <img src={css3} alt="CSS3" />
                    <img src={javascript} alt="JavaScript" />
                    <img src={react} alt="React" />
                    <img src={node} alt="Node.js" />
                    <img src={mongodb} alt="MongoDB" />
                    <img src={sass} alt="SASS" />
                </section> */}
            </main>
        </div>
    );
};

export default Home;