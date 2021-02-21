import React, { useState, Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';
import { Row, Col, Container } from 'reactstrap';

const PageTitle = styled.h1`
	position: absolute;
	z-index: 999;
	top: 40rem;
	left: 0;
	right: 0;
	margin: auto;
	font-size: 6rem;
	color: white;
	text-align: center;
	text-shadow: 0px 5px 8px black;
`;

const FirstName = styled.span`
	font-size: 4rem;
	color: #2a378c;
	text-transform: uppercase;
	text-shadow: 0px 2px 2px black;
`;

const LastName = styled.span`
	font-size: 4rem;
	color: gray;
	text-transform: lowercase;
	text-shadow: 0px 2px 2px black;
`;

const TitleName = styled.h6`
	font-size: 2rem;
	text-align: center;
	color: #2a378c;
`;

const AboutBio = styled.p`
	font-size: 2rem;
`;

class Page extends Component {

	render() {
    	return (
    		<React.Fragment>
        		<Meta />
				<Header />
				<Row>&nbsp;</Row>
				<Row>&nbsp;</Row>
				<Container fluid className="main-header">
					{this.props.children}
				</Container>
				<Row>&nbsp;</Row>
				<Footer />
			</React.Fragment>
    	);
	}
}

export default Page;
