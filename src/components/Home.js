import me from '../assets/images/../../assets/images/me.jpg';
import './Home.css';

const Home = ({ theme, button }) => {
    return (
        <div id="home-container" className={theme}>

            {/* <video src={pexels} muted loop autoPlay></video>
            <div className="overlay"></div> */}

            <section className="image-container">
                <img className="profile-pic" src={me} alt="profile pic" />
            </section>

            <section className="jumbotron">
                <h1 className="name">Richard Montgomery</h1>
                <h2 className="job-title">Software Developer</h2>
                <a className="location" href="https://www.google.com/maps/place/Kitsap+County,+WA/@47.6866071,-123.2897091,9z/data=!4m5!3m4!1s0x54904f05579719ab:0xf361976886df6ce5!8m2!3d47.6476607!4d-122.6412583" target="_blank" rel="noreferrer">
                    <i className="fas fa-map-marker-alt"></i>Kitsap Peninsula, WA
                </a>
            </section>
            
            <section className="fontawesome-icons">
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
                <h3 className="title">TECH STACK</h3>
                <div className="stack">
                    <span className="item">HTML5</span>
                    <span className="item">CSS3</span>
                    <span className="item">JavaScript</span>
                    <span className="item">SASS</span>
                    <span className="item">Github</span>
                    <span className="item">NodeJS</span>
                    <span className="item">React</span>
                    <span className="item">MongoDB</span>
                    <span className="item">Firebase</span>
                </div>
            </section>

            {button}

            <section className="ext-links">
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
        </div>
    );
};

export default Home;