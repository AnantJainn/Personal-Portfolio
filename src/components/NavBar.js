import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import A_logo1 from "../assets/img/A_logo1.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("");
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={A_logo1} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-bar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-bar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active-bar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/anant-jain-bb49b9205"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100009331331596"><img src={navIcon2} alt="" /></a>
                            <a href="https://instagram.com/anant__jainn?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="" /></a>
                        </div>
                        <a href="#connect">
                            <button className="vvd" onClick={() => console.log('connect')} href="#connect"><span>Let's Connect</span></button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
