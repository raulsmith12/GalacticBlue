import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Row, Col, Modal, ModalBody } from 'reactstrap';
import swal from 'sweetalert';

const API_PATH = 'https://galacticblue.net/api/contact/index.php';

const ContactForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [contactTime, setContactTime] = useState('');
    const [contactMethod, setContactMethod] = useState('');
    const [message, setMessage] = useState('');
    const [mailSent, setMailSent] = useState(false);

    const handleContactTime = (e) => setContactTime(e.target.value);
    const handleContactMethod = (e) => setContactMethod(e.target.value);
    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { customerName, customerEmail, customerPhone, contactTime, contactMethod, message }
        })
        .then(result => {
            setMailSent(result.data.sent),
            swal('Thank you!', 'We have received your message. You should hear back from us within the next two or three business days.', 'success')
        })
        .catch(error => swal('Uh oh!', 'Something went wrong. Maybe try sending your message again?', 'danger'));
    };

    return (
        <Form className="form" onSubmit={e => handleFormSubmit(e)}>
            <Row>
                <Col>
					<h6 className="text-center display-5">385.275.8665&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:contact@galacticblue.net">contact@galacticblue.net</a></h6>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="customerName" className="display-4">Name</Label>
                        <Input type="text" name="customerName" id="customerName" bsSize="lg" placeholder="Please Enter a Name" required value={customerName} onChange={e => setCustomerName(e.target.value)} />
                        <FormFeedback>Name is required to submit form</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="customerEmail" className="display-4">Email</Label>
                        <Input type="email" name="customerEmail" id="customerEmail" bsSize="lg" placeholder="Please Enter an Email" required value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                        <FormFeedback>Please enter a valid email address to submit form</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label for="customerPhone" className="display-4">Phone</Label>
                        <Input type="phone" name="customerPhone" id="customerPhone" bsSize="lg" placeholder="Please Enter a Phone Number" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} />
                    </FormGroup>
                    <h4>Preferred Time to Contact You?</h4>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="timeRadio" value="day" checked={contactTime==='day'} onChange={handleContactTime} />{' '}
                            &nbsp;&nbsp;<span className="display-5">Day</span>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="timeRadio" value="afternoon" checked={contactTime==='afternoon'} onChange={handleContactTime} />{' '}
                            &nbsp;&nbsp;<span className="display-5">Afternoon</span>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="timeRadio" value="evening" checked={contactTime==='evening'} onChange={handleContactTime} />{' '}
                            &nbsp;&nbsp;<span className="display-5">Evening</span>
                        </Label>
                    </FormGroup>
                    <h4>Which Way Do You Prefer We Contact You?</h4>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="contactRadio" value="email" checked={contactMethod==='email'} onChange={handleContactMethod} />{' '}
                            &nbsp;&nbsp;<span className="display-5">Email</span>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="contactRadio" value="phone" checked={contactMethod==='phone'} onChange={handleContactMethod} />{' '}
                            &nbsp;&nbsp;<span className="display-5">Phone</span>
                        </Label>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label for="messageArea" className="display-4">Message</Label>
                        <Input type="textarea" name="messageArea" id="messageArea" bsSize="lg" style={{height: '200px'}} placeholder="Please Leave a Message, a Comment, a Compliment, or a Suggestion" value={message} onChange={e => setMessage(e.target.value)} />
                    </FormGroup>
                    <Button color="primary">Submit</Button>{' '}
                </Col>
            </Row>
            <div>
                {mailSent}
            </div>
        </Form>
    )
}

export default ContactForm;
