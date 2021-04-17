import me from '../assets/images/../../assets/images/me.jpg';
import './Home.css';

const Home = () => {
    return (
        <div id="home-container">
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
                        <h3 className="home-location">
                            <i className="fas fa-map-marker-alt"></i> Kitsap Peninsula, WA
                        </h3>
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
                            <span className="tech">JAVASCRIPT</span>
                            <span className="tech">SASS</span>
                            <span className="tech">GITHUB</span>
                            <span className="tech">NODEJS</span>
                            <span className="tech">REACT</span>
                            <span className="tech">MONGODB</span>
                            <span className="tech">FIREBASE</span>
                        </div>
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
                </div>

                <section className="home-footer">
                    <div className="arrow"></div>
                </section>

            </main>
        </div>
    );
};

export default Home;