import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import SectionTitle from '../components/SectionTitle';

import { FaStar } from "react-icons/fa";
import { FaRegStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import testimonialsData from '../data/testimonials.json';

import Header from '../components/Header';
import PageFooter from '../components/PageFooter';


export function Testimonials(props){

    const nextIcon = <FontAwesomeIcon icon={faCaretRight} size="3x" className="testimonial-control-arrow" />;
    const prevIcon = <FontAwesomeIcon icon={faCaretLeft} size="3x" className="testimonial-control-arrow" />;

    const createArray = length => [...Array(length)];

    const Star = ({ selected = false , onSelect = f => f}) => (
        selected ? <FaStar className="testimonial-rating-star"/> : <FaRegStar className="testimonial-rating-star"/> 
    );

  return (
    <>
        <section id="testimonials" className="testimonials">
            <Container>
                <SectionTitle Title={props.title} Subtitle={props.subtitle} />
            </Container>
            <Carousel className='testimonial-carousel' nextIcon={nextIcon} prevIcon={prevIcon}>
            {testimonialsData.map((record, i) => 
                <Carousel.Item  key={record.id}>
                    <Container>
                    <div className='testimonial-box'>
                        <p className='testimonial-text'><FaQuoteLeft className='quote' />&nbsp;&nbsp;&nbsp;
                        {record.feedback}
                        &nbsp;&nbsp;&nbsp;<FaQuoteRight className='quote' /></p>
                        <div className='testimonial-rating'>
                            {createArray(5).map((n,i) => <Star key={i} selected={ record.rating > i } />)}
                        </div>
                    </div>

                    <div className='testimonial-image'>
                        <img src={`../images/${record.path}`} className='img-fluid rounded-circle' alt="client 1" />
                    </div>

                    <div className='testimonial-name'>
                        <h3>{record.name}</h3>
                        <p className="lead fw-light">{record.title}</p>
                    </div>
                    </Container>
                </Carousel.Item>    

            )}
            </Carousel>
            
        </section>
    </>
  )
}

export default Testimonials;
