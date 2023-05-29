import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import PageFooter from '../components/PageFooter';

import image from '../images/aboutus.jpeg';

export function Hero( props ){
  return (
    <>
        <section id={props.id} className={props.class + " hero"} style={{ backgroundImage:`url(${props.path})` }}>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <h1 className='hero-title'>{props.title}</h1>
                        <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>       
            </Container>
        </section>
    </>
  )
}

export default Hero;
