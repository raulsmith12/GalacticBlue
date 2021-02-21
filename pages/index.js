import React, { Component } from 'react';
import {
    Jumbotron,
    Container
} from 'reactstrap';
import Slider from "../components/Slider";
import Offers from "../components/Offers";

const Home = props => (
	<div>
	    <Jumbotron>
	        <Slider />
	    </Jumbotron>
	    <Container>
	        <h1 className="display-2 text-primary">PROFESSIONAL WEB AND GRAPHIC BRANDING FOR YOUR PROFESSIONAL NEEDS</h1>
	        <p className="display-4">GalacticBlue is not just a web development and graphic design firm, custom-suited for your professional web and graphic needs. We are more of a collaboration; a trusted member of your marketing and branding team. Our team of web development and graphic design professionals have combined over 10 years of web and graphic experience in the field and stay up-to-date on the latest trends and standards.</p>
	        <h2 className="display-3 text-primary">What Can GalacticBlue Offer You?</h2>
			<Offers />
	    </Container>
	</div>
);

export default Home;
