import me from '../assets/images/../../assets/images/me.jpg';
import './Home.css';

const Home = ({ styling }) => {
    return (
        <div id="home-container" className={styling}>
            <main className="home-container" role="main">

                {/* <video src={pexels} muted loop autoPlay></video>
                <div className="overlay"></div> */}

                <div className="home-jumbotron">
                    <section className="img-container">
                        <img className="profile-pic" src={me} alt="profile pic" />
                    </section>

                    <section className="home-quick-details">
                        <h2 className="home-name">Richard Montgomery</h2>
                        <h3 className="home-title">Software Developer</h3>
                        <p className="home-text">
                            I enjoy building functional web applications 
                            using interactive, adaptive and responsive design.
                        </p>
                        <a className="home-location" href="https://www.google.com/maps/place/Kitsap+County,+WA/@47.6866071,-123.2897091,9z/data=!4m5!3m4!1s0x54904f05579719ab:0xf361976886df6ce5!8m2!3d47.6476607!4d-122.6412583" target="_blank" rel="noreferrer">
                            <i className="fas fa-map-marker-alt"></i> Kitsap Peninsula, WA
                        </a>
                    </section>

                    <section className="home-fontawesome-icons">
                        <a href="https://github.com/montgomeryrd" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-alt"></i>
                        </a>
                    
                        <a href="https://www.linkedin.com/in/montgomeryrd/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                
                        <a href="https://twitter.com/richard04755318" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </section>

                    <section className="tech-stack-container">
                        <h3 className="home-stack">TECH STACK</h3>
                        <div className="home-stack-items">
                            <span className="tech">HTML5</span>
                            <span className="tech">CSS3</span>
                            <span className="tech">JavaScript</span>
                            <span className="tech">SASS</span>
                            <span className="tech">Github</span>
                            <span className="tech">NodeJS</span>
                            <span className="tech">React</span>
                            <span className="tech">MongoDB</span>
                            <span className="tech">Firebase</span>
                        </div>
                    </section>

                    <section className="mobile alt-links">
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
                </div>

                <section className="home-footer">
                    <div className="arrow"></div>
                </section>

            </main>
        </div>
    );
};

export default Home;