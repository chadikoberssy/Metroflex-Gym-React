import React from 'react'

import Header from '../components/Header';
import Slider from '../components/Slider';
import HomeSupplements from '../components/Supplements';
import Academy from '../components/Academy';
import Faq from '../components/Faq';
import PageFooter from '../components/PageFooter';

export const Home = () => {
  return (
    <>
        <Header />
        <Slider />
        <HomeSupplements /> 
        <Academy />
        <Faq />
        <PageFooter />
    </>
  )
}

export default Home;
