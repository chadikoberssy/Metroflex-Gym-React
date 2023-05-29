import { Container } from 'react-bootstrap';
import SectionTitle from './SectionTitle'; 
import { Row,Button, Col } from 'react-bootstrap';
import { FaCaretRight } from 'react-icons/fa';
import academyImg from '../images/academy.jpeg';

export default function Academy() {
    return (
    <section className='academy' id="academy">
        <Container className='text-center text-md-start'>
            <Row className=''>
                <Col xs={12} md={12} lg={6}>
                    <SectionTitle Title="Our Academy" Subtitle="Your passion, your future! We brings you a prestigious, new degree!" />
                    <Row className='mb-5'>
                        <Col xs={12} md={12} lg={12}>
                            <span className='display2'><FaCaretRight />Physical Education</span>
                            <p className='description ps-0 ps-md-4'>
                            Have you always loved physical education and wished you can do it for the rest of your life?<br/    >Well, now you can!
                            </p>
                            <Button className='ms-0 ms-md-4 w-50' variant="primary">Learn More</Button>
                        </Col>
                    </Row>
                    <Row className='mb-5 mb-lg-0'>
                        <Col xs={12} md={12} lg={12}>
                            <span className='display2'><FaCaretRight />Certificates</span>
                            <p className='description ps-0 ps-md-4'>
                            An education in physical fitness prepares students for a professional career in training. Unlike a lot of people perceive; 
                            a PE degree is completely crucial when wanting to deal with students looking to become athletes, athletes looking to be 
                            better and compete, and amateurs who want to incorporate physical fitness in their lifestyle.
                            </p>
                            <Button className='ms-0 ms-md-4 w-50' variant="primary">Learn More</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={12} lg={6} className='academyImg d-flex align-items-center '>
                    <img src={academyImg} alt="academyImg" className='academyImg' />

                </Col>
            </Row>
            
        </Container>
    </section>   
    );
}
