import { Accordion,Container } from 'react-bootstrap';
import SectionTitle from './SectionTitle';

export default function Faq() {
    return (
        <section className='faq'>
            <Container className='pb-5 pt-5 pt-lg-0'>
                <div className='text-center text-md-start'>
                    <SectionTitle Title="FAQ" Subtitle="We are here to help. Try finding your answer in the FAQ section" />
                </div>
                <Accordion>
                <Accordion.Item eventKey="0" className='faq-item mb-3 shadow'>
                    <Accordion.Header className='faq-item-header' >What is the best training program ?</Accordion.Header>
                    <Accordion.Body>
                    There no "best" training program in general. Each plan is customized to match the client's needs and goals. Plus, each program is different based on your body type, height, weight, fitness level and more atributes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1"  className='faq-item mb-3 shadow'>
                    <Accordion.Header className='faq-item-header'>How much does it costs to start?</Accordion.Header>
                    <Accordion.Body>
                    We have multiple plans to fit every client's needs. Please check services section to see what fits you the most.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Container>
        </section>
        
        
    );
}
