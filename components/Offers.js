import React, { useState } from 'react';
import {
	CardDeck,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';
import offers from "./offers-card";

const Offers = () => {
	const [myOffers, setMyOffers] = useState(offers);
	const [modalHead, setModalHead] = useState('');
	const [modalImage, setModalImage] = useState('');
	const [modalBody, setModalBody] = useState('');
	const [show, setShow] = useState(false);

	const showModal = (title, image, body) => {
		setModalHead(title);
		setModalImage(image);
		setModalBody(body);
		setShow(true);
	}

	const toggle = () => setShow(!show);

	return (
		<CardDeck>
			{myOffers.map((item) => (
				<Card body inverse color="primary" className="text-center" key={item.id}>
					<CardImg top width="100%" src={item.img} alt={item.name} />
					<CardBody>
						<CardTitle className="display-5">{item.name}</CardTitle>
						<Button onClick={() => showModal(item.name, item.img, item.content)}>{item.button}</Button>
					</CardBody>
				</Card>
			))}
			<Modal isOpen={show} toggle={toggle}>
				<ModalHeader toggle={toggle} className="bg-primary">
					<h5 className="display-4 text-white">
						<img src="https://galacticblue.net/img/gb-logo-3-dark.png" height="32" />
						{modalHead}
					</h5>
				</ModalHeader>
				<ModalBody>
					<img src={modalImage} alt={modalHead} width="100%" />
					<p className="text-primary display-5">{modalBody}</p>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>Close</Button>
				</ModalFooter>
			</Modal>
		</CardDeck>
	);
}

export default Offers;
