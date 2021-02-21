import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
	Row,
	Col
} from 'reactstrap';
import ContactForm from "../components/Form";

const Contact = props => (
	<div>
		<Jumbotron fluid className="bg-gray">
			<h1 className="page-title">Contact GalacticBlue</h1>
		</Jumbotron>
	    <Container>
			<Row>
				<Col>
					<ContactForm />
				</Col>
			</Row>
	    </Container>
	</div>
);

export default Contact;
