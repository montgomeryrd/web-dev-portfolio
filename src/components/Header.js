import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <span className="header-logo">
                                <span className="r">r</span>
                                <span className="dot">.</span>
                                <span className="monty">monty</span>
                            </span>
                        </Navbar.Brand>
                    </LinkContainer>

                    <div className="mobile menu-wrap">
                        <input type="checkbox" className="toggler"/>
                        <div className="hamburger">
                            <div></div>
                        </div>
                        <div className="menu">
                            <div className="ml-auto">
                                <nav className="hamburger-links">
                                    <a className="hamburger-link" href="#home">Home</a>
                                    <a className="hamburger-link" href="#about">About Me</a>
                                    <a className="hamburger-link" href="#works">My Works</a>
                                    <a className="hamburger-link" href="#skills">Education</a>
                                </nav>                                
                            </div>
                        </div>
                    </div>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/about">
                                <Nav.Link>
                                    <span className="px-3 about-nav">A Little About Me</span>
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/works">
                                <Nav.Link>
                                    <span className="px-3 works-nav">Featured Projects</span>
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/skills">
                                <Nav.Link>
                                    <span className="px-3 skills-nav">Skillsets & Education</span>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>

                    {/* <div className="menu-wrap">
                        <input type="checkbox" className="toggler"/>
                        <div className="hamburger">
                            <div></div>
                        </div>
                        <div className="menu">
                            <div>
                                <div>
                                    <Nav className="ml-auto">
                                        <LinkContainer to="/about">
                                            <Nav.Link>
                                                <span className="nav-hamburger-item">About Me</span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to="/works">
                                            <Nav.Link className="nav-hamburger-item">
                                            <span className="nav-item">My Apps</span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to="/skills">
                                            <Nav.Link className="nav-hamburger-item">
                                            <span className="nav-item">Skills/Education</span>
                                            </Nav.Link>
                                        </LinkContainer>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;