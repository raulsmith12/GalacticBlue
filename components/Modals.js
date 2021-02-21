import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';

const Modals = props => (
	<Modal isOpen={props.isOpen} toggle={props.hideModal}>
		<ModalHeader toggle={props.hideModal} className="bg-primary">
			<h3 className="display-4 text-white">{props.modalName}</h3>
		</ModalHeader>
		<ModalBody>
			<p className="text-primary">{props.modalBody}</p>
		</ModalBody>
		<ModalFooter>
			<Button color="primary" onClick={props.hideModal}>Close</Button>{' '}
		</ModalFooter>
	</Modal>
);

export default Modals;
