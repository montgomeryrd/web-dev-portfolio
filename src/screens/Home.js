import pexels from '../assets/videos/pexels-pavel-danilyuk-5495781.mp4';
import './Home.css';

const Home = () => {
    return (
        <div id="home-container" className="desktop mobile" style={{height: `${100}vh`}}>
            <main className="home-content" role="main">
                <div className="video-background">
                    <div className="overlay"></div>
                    <video src={pexels} width={`${220}%`} muted loop autoPlay></video>
                </div>
                <div className="home-text">
                    <h2 className="home-intro">Hi, my name is</h2>
                    <h1 className="home-name">RICHARD MONTGOMERY</h1>
                    <p className="home-paragraph">
                        I am a web developer living on the Kitsap Peninsula 
                        in Washington State. I enjoy building functional web 
                        applications using interactive, adaptive and responsive design.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Home;