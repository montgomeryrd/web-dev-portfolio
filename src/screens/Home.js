import './Home.css';

const Home = () => {
    return (
        <div id="home-container" className="desktop mobile" style={{height: `${100}vh`}}>
            <main className="home-content" role="main">
                <h2 className="home-intro">Hi, my name is</h2>
                <h1 className="home-name">RICHARD MONTGOMERY</h1>
                <p className="home-text">
                    <span id="home-text-one">I am a web developer </span>
                    <span id="home-text-two">living on the Kitsap Peninsula </span>
                    <span id="home-text-three">in Washington State. </span>
                    <span id="home-text-four">I enjoy building </span>
                    <span id="home-text-five">functional web applications </span>
                    <span id="home-text-six">using interactive, </span>
                    <span id="home-text-seven">adaptive and responsive design.</span>
                </p>
            </main>
        </div>
    );
};

export default Home;