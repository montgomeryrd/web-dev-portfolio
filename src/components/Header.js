import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <span className="monty">
                                <span className="r">r</span>
                                <span className="dot">.</span>
                                <span className="m">m</span>
                                <span className="o">o</span>
                                <span className="n">n</span>
                                <span className="t">t</span>
                                <span className="y">y</span>
                            </span>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/about">
                                <Nav.Link>
                                    <span>A Little About Me</span>
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/works">
                                <Nav.Link>
                                    <span>Featured Projects</span>
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/skills">
                                <Nav.Link>
                                    <span>Skillsets & Education</span>
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