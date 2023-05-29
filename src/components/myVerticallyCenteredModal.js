import { Container, Row,Button, Col, Modal, ModalHeader } from 'react-bootstrap';
import { FaCaretRight } from 'react-icons/fa';

export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body className="show-grid shadow">
        <Container className='p-0'>
          <div className='closeButtonDiv'>
            <button type="button" className="btn-close close" aria-hidden="true" onClick={props.onHide}></button>
          </div>
          
          <Row className='p-4 pt-0 text-center text-lg-start'>
            <Col xs={12} md={12} lg={4} className='my-auto'>
              <img src={props.image} alt={props.name} className='img-fluid product-img'/>
            </Col>
            <Col xs={12} md={12} lg={8} className='my-auto'>
                <div className='product-name py-3 mt-3 mt-lg-0'>
                    <span>{props.name}</span><br/>
                </div>
                <div className='product-description mt-3'>
                    <span className='label'><FaCaretRight />Main Function: </span><span className='product-info'>{props.mainfunction}</span><br/>
                    <span className='label'><FaCaretRight />Flavor: </span><span className='product-info'>{props.flavor}</span><br/>
                    <span className='label'><FaCaretRight />Serving Size: </span><span className='product-info'>{props.servingsize}</span><br/>
                    <span className='label'><FaCaretRight />Totla Servings per Container: </span><span className='product-info'>{props.servings}</span><br/>
                    <span className='label'><FaCaretRight />Nutrition Facts: </span><span className='product-info'>{props.nutritionfacts}</span><br/>
                </div>
                
                <Button className='productbtn mt-3 w-50' variant="primary">Buy</Button>
            </Col>
            
          </Row>
        </Container>
      </Modal.Body>
        
      </Modal>
    );
  }