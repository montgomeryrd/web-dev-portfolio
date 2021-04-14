import './Projects.css';

const Projects = () => {
    return (
        <div id="projects-container" className="desktop mobile">
            <main className="projects-content" role="main">
                <div className="row">
                    <div className="p-1">
                        <div className="p-text">
                            <h2>tessio</h2>
                            <p>
                                A mock website for a local pizza.whiskey.beer restaurant. 
                                Designed with a parallax effect on desktop and scroll on mobile.
                            </p>
                            <p>link</p>
                        </div>
                    </div>
                    <div className="space"></div>
                </div>
                <div className="row">
                    <div className="space"></div>
                    <div className="p-1"></div>
                </div>
                <div className="row">
                    <div className="p-1"></div>
                    <div className="space"></div>
                </div>
                <div className="row">
                <div className="space"></div>
                    <div className="p-1"></div>
                </div>
                <div className="row">
                    <div className="p-1"></div>
                    <div className="space"></div>
                </div>
                <div className="row">
                <div className="space"></div>
                    <div className="p-1"></div>
                </div>
            </main>
        </div>
    )
}

export default Projects
