import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
	Row,
	Col
} from 'reactstrap';
import Sample from '../components/portfolio';
import logos from '../components/logo-design';
import graphics from '../components/graphic-design';
import websites from '../components/website-design';

const Examples = () => (
	<div>
		<Jumbotron fluid className="bg-gray">
			<h1 className="page-title">Examples</h1>
		</Jumbotron>
	    <Container>
			<Row>
				<Col>
					<h2 className="display-4 text-primary">Logo Design</h2>
					<Sample sampler={logos} />
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="display-4 text-primary">Graphic Design</h2>
					<Sample sampler={graphics} />
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="display-4 text-primary">Web Design</h2>
					<Sample sampler={websites} />
				</Col>
			</Row>
	    </Container>
	</div>
);

export default Examples;
