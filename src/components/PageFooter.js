import { Container } from "react-bootstrap";
import { Row,Card,Button, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import React from "react";
import { Link } from 'react-router-dom';


export default function PageFooter() {
    return (
        <footer className="page-footer font-small blue pt-5" style={{backgroundColor: "#444444", color:"white", fontSize:"13px"}}>
            <Container className="text-center text-md-left">
                <Row>
                    <div className="col-lg-8">
                        <div className="row">
                        <div className="col-md-4 col-lg-2 mb-md-0 mb-3">
                        <h6 className="footer-column-title text-uppercase">About Us</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Our Team</a></li>
                            <li><a href="#!">Our Gym</a></li>
                            <li><a href="#!">Our Kitchen</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-2 mb-md-0 mb-3">
                        <h6 className="footer-column-title text-uppercase">Services</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">Training Sessions</a></li>
                            <li><a href="#!">Meal Plans</a></li>
                            <li><a href="#!">Rehab</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-2 mb-md-0 mb-3">
                        <h6 className="footer-column-title text-uppercase">Supplement Store</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">Creatine</a></li>
                            <li><a href="#!">Mass Gainer</a></li>
                            <li><a href="#!">Protein</a></li>
                            <li><a href="#!">Pre-Workout</a></li>
                            <li><a href="#!">Fat Burner</a></li>
                            <li><a href="#!">Vitamins</a></li>
                            <li><a href="#!">All Products</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-2 mb-md-0 mb-3">
                        <h6 className="footer-column-title text-uppercase">Academy</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">Physical Education</a></li>
                            <li><a href="#!">Personal Trainer</a></li>
                            <li><a href="#!">Sports Nutrition</a></li>
                            <li><a href="#!">Post Rehab</a></li>
                            <li><a href="#!">Strenght and Conditioning</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-2 mb-md-0 mb-3">
                        <h6 className="footer-column-title text-uppercase">Contact Us</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">Location</a></li>
                            <li><a href="#!">Send a Message</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-2 mb-md-0 mb-3">
                        <h6 className="footer-column-title text-uppercase">FAQ</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">FAQ</a></li>
                            
                        </ul>
                    </div>
                        </div>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-12 col-lg-4 mt-md-0 mt-3">
                        <h6 className="text-uppercase footer-column-title">Connect with us</h6>
                        <Link to={{ pathname: "/about" }}><FaFacebookSquare size={30} className="social-icon" /></Link>&nbsp;&nbsp;

                        <FaInstagramSquare size={30} className="social-icon" />&nbsp;&nbsp;
                        <FaYoutubeSquare size={30} className="social-icon" />
                    </div>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                © 2022 Copyright&nbsp;<a href="www.google.com">Chadi Koberssy</a>
            </div>
        </footer>
    );
}
