import { Row,Card,Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import SectionTitle from './SectionTitle';
import MyVerticallyCenteredModal from "./myVerticallyCenteredModal";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import React, { useState } from 'react';

import productsData from '../data/products.json';



export default function HomeSupplements() {



    const [selected, setSelected] = useState([]);

    const [modalState, setModalState] = useState(false);
    

    const createArray = length => [...Array(length)];

    const list = productsData;
    const [products, setProducts] = useState(productsData);

    const handleLike = (id,like) => {
        const newProducts = list.map(product => product.id === id ? product.like = like : product);
        setProducts(newProducts);
    }

    
    const Star = ({ selected = false , onSelect = f => f}) => (
        selected ? <FaStar className="star" color="#ffc000"/> : <FaRegStar className="star" color="#ffc000"/> 
    );


    return (
        <section className="HomeSupplements" id="supplements">
            <Container className='pt-5 pb-5 text-center text-md-start'>
                <SectionTitle Title="Our Supplement Store" Subtitle="We are here to guide you through what you need why you need it, and how to use it so you can have the safest journey using the best supplements." />
                <Row className=''>
                    {productsData.map((record,i) => 
                    <Col xs={12} md={6} lg={3} className='d-flex align-items-stretch' key={record.id}>
                        <Card className='mb-4 w-100 product-card'> 
                        {record.like === false ? (
                                    <FaRegHeart className='ms-auto mt-3 me-3' color='gray' size={20} onClick={() => handleLike(record.id,true)} />
                                ) : (
                                    <FaHeart className='ms-auto mt-3 me-3' color='#ff3d3d' size={20} onClick={() => handleLike(record.id,false)} />
                                )}

                            <img src={record.path} alt={record.name} height="200" className='mx-auto my-4'/>
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title >{record.name}</Card.Title>
                                <span className='price mt-auto'>
                                    {record.price}$
                                </span>
                                <Card.Text className='mb-1'></Card.Text>
                                <div className='rating mt-auto'>
                                    {createArray(5).map((n,i) => <Star key={i} selected={ record.rating > i } />)}
                                </div>
                                <div className='productCtaSection mt-auto'>
                                <Button className='productbtn mt-auto' variant="primary">Buy</Button>
                                <Button 
                                    className='productbtn mt-auto' 
                                    variant="outline-secondary"
                                    onClick={() => {
                                        setSelected(record)
                                        setModalState(true)
                                    }}>
                                    Details
                                </Button>

                                

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}

                    <MyVerticallyCenteredModal
                        show={modalState}
                        name={selected.name}
                        image={selected.path}
                        mainfunction={selected.function}
                        flavor={selected.flavor}
                        servingsize={selected.servingSize}
                        servings={selected.servings}
                        nutritionfacts={selected.nutrition}
                        onHide={() => setModalState(false)}
                    />

                </Row>
                <Row className='mt-5 justify-content-center'>
                    <Col xs={12} md={6} lg={6}>
                        <Button className='w-100 mb-5 mb-md-2 mb-lg-0' variant="primary">View All Products</Button>
                    </Col>
                </Row>
                
            </Container>    
        </section>
    );
}
