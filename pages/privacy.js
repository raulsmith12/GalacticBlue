import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem
} from 'reactstrap';

const Privacy = props => (
	<div>
		<Jumbotron fluid className="bg-gray">
			<h1 className="page-title">Privacy Policy</h1>
		</Jumbotron>
	    <Container>
			<Row>
				<Col>
					<p className="display-5">This privacy notice discloses the privacy practices for GalacticBlue, our partner websites and any businesses we are associated with. This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>
					<ListGroup flush>
						<ListGroupItem className="display-5">What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</ListGroupItem>
						<ListGroupItem className="display-5">What choices are available to you regarding the use of your data.</ListGroupItem>
						<ListGroupItem className="display-5">The security procedures in place to protect the misuse of your information.</ListGroupItem>
						<ListGroupItem className="display-5">How you can correct any inaccuracies in the information.</ListGroupItem>
					</ListGroup>
					<h5 className="display-4">Information Collection, Use, and Sharing</h5>
					<p className="display-5">We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
					<p className="display-5">We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>
					<p className="display-5">Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
					<h5 className="display-4">Your Access to and Control Over Information</h5>
					<p className="display-5">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
					<ListGroup flush>
						<ListGroupItem className="display-5">See what data we have about you, if any.</ListGroupItem>
						<ListGroupItem className="display-5">Change/correct any data we have about you.</ListGroupItem>
						<ListGroupItem className="display-5">Have us delete any data we have about you.</ListGroupItem>
						<ListGroupItem className="display-5">Express any concern you have about our use of your data.</ListGroupItem>
					</ListGroup>
					<h5 className="display-4">Security</h5>
					<p className="display-5">We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
					<p className="display-5">While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
					<p className="display-5">If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at 385.275.8665 or <a className="display-5" href="mailto:contact@galacticblue.net">via email</a>.</p>
				</Col>
			</Row>
	    </Container>
	</div>
);

export default Privacy;