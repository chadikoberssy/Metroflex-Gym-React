import { Row,Card,Button, Col } from 'react-bootstrap';


export default function SectionTitle({ Title,Subtitle }) {
    return (
        <Row className='mb-5'>
            <h1 className='sectionTitle my-4'>{Title}</h1>
            <p className='sectionSubTitle col-lg-6'>{Subtitle}</p>
        </Row>
    );
}
