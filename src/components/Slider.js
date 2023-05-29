import { Carousel }  from 'react-bootstrap';
import services from '../data/services.json';
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {


    const nextIcon = <FontAwesomeIcon icon={faCaretRight} size="3x" className="carousel-control-arrow" />;
    const prevIcon = <FontAwesomeIcon icon={faCaretLeft} size="3x" className="carousel-control-arrow" />;

    return (
        <section className='Carousel-Home'> 
        <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
            {services.map((record, i) => 
            <Carousel.Item interval={3000} key={record.id} className='slider-item'>
                <img src={record.path} className="d-block w-100" alt={record.title} />
                <Carousel.Caption>
                    <h3>{record.title}</h3>
                    <p>{record.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            )}
        </Carousel>
        </section>
    );
}
