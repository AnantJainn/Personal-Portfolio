import { Container,Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import A_logo1 from "../assets/img/A_logo1.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={A_logo1} alt="Logo" />
                    </Col>
                    <Col sn={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/anant-jain-bb49b9205"><img src={navIcon1} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100009331331596"><img src={navIcon2} /></a>
                            <a href="https://instagram.com/anant__jainn?igshid=YmMyMTA2M2Y="><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}