import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import caringIcon from '../images/caring.svg';
import trustIcon from '../images/trust.svg';
import happinessIcon from '../images/happiness.svg';
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';

import image from '../images/aboutus.jpeg';
import SectionTitle from '../components/SectionTitle';

/* <SectionTitle Title={props.title} Subtitle={props.subtitle} /> */

export function InfoCard( props ){
  return (
    <>
        <section id={props.id} className={props.class + " info shadow"}>
            <Container>
            <SectionTitle Title={props.title} Subtitle={props.subtitle} />
                <Row>
                    <Col xs={12} md={4} lg={4}>
                    <Card className='info-card'>
                        <Card.Img variant="top" className='info-card-img mx-auto' src={caringIcon} />
                        <Card.Body>
                            <Card.Title className='info-card-title'>Caring</Card.Title>
                            <Card.Text className='info-card-text' >
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4} lg={4}>
                    <Card className='info-card'>
                        <Card.Img variant="top" className='info-card-img mx-auto' src={trustIcon} />
                        <Card.Body>
                            <Card.Title className='info-card-title'>Trust</Card.Title>
                            <Card.Text className='info-card-text' >
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4} lg={4}>
                    <Card className='info-card'>
                        <Card.Img variant="top" className='info-card-img mx-auto' src={happinessIcon} />
                        <Card.Body>
                            <Card.Title className='info-card-title'>Happiness</Card.Title>
                            <Card.Text className='info-card-text' >
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>       
            </Container>
        </section>
    </>
  )
}

export default InfoCard;
