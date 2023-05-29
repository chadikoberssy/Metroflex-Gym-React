import React from 'react'

import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import Testimonials from '../components/testimonials';
import { Hero } from '../components/hero';
import { InfoCard } from '../components/infoCards3';

import img1 from '../images/aboutus.jpeg';
import { Container, Row, Col } from 'react-bootstrap';

export const About = () => {
  return (
    <>
        <Header />
        <Hero id="aboutUs" class="aboutUs" title="About Us" path={img1} />
        <InfoCard id="aboutus-info" class="aboutus-info" title="Our Core Values" subtitle="Since 1979, our core values have been the foundation for everything we do." />
        <Testimonials title="What our clients are saying" subtitle="Some clients feedback after trying Metroflex's experience" />
        <PageFooter />
    </>
  )
}

export default About;
