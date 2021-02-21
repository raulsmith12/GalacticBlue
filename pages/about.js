import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
	Row,
	Col
} from 'reactstrap';

const About = props => (
	<div>
		<Jumbotron fluid className="bg-gray">
			<h1 className="page-title">About GalacticBlue</h1>
		</Jumbotron>
	    <Container>
			<Row>
				<Col md="6">
					<p className="display-4">Combining years of experience in the web development, graphic design, and brand marketing departments with unparalleled and friendly customer service, GalacticBlue is an obvious choice when the time comes for your company to get a new logo or website. Or both. Here are our web and graphic marketing professionals.</p>
				</Col>
				<Col md="6">
					<Row>
						<Col md="3">
							<img src="https://galacticblue.net/img/raul_smith-150x150.jpg" width="100%" alt="Raul Smith" className="rounded-circle" />
						</Col>
						<Col md="9">
							<h3 className="mb-0 text-center about-title"><span>Raul|</span><span>Smith</span></h3>
							<img src="https://galacticblue.net/img/about-byline.jpg" width="100%" alt="About Byline" />
							<h3 className="text-center">CEO | Lead Developer/Designer</h3>
						</Col>
					</Row>
					<p className="about-para">A developer with ten years of experience in designing and developing websites for small businesses. Has designed logos for music groups and companies and developed websites for companies ranging from working-out-of-the-garage to companies with staff of over 20.</p>
				</Col>
			</Row>
	    </Container>
	</div>
);

export default About;
