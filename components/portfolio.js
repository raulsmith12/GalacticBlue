import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Sample = (props) => {
    const {
        sampler
    } = props;

    const [modalHead, setModalHead] = useState('');
    const [modalImage, setModalImage] = useState('');
    const [modalBody, setModalBody] = useState('');
    const [modalUrl, setModalUrl] = useState('');
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const showModal = (title, image, body, siteUrl) => {
        setModalHead(title);
        setModalImage(image);
        setModalBody(body);
        setModalUrl(siteUrl);
        setModal(true);
    }

    return (
        <div>
            {sampler.map((item, index) => (
                <div className="gallery-img" key={index}>
                    <a onClick={() => showModal(item.name, item.src, item.caption, item.siteUrl)}>
                        <img src={item.thumbnail} width="100%" />
                    </a>
                </div>
            ))}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className="bg-primary">
                    <h5 className="display-4 text-white">
                        <img src="https://galacticblue.net/img/gb-logo-3-dark.png" height="32" />
                        {modalHead}
                    </h5>
                </ModalHeader>
                <ModalBody>
                    <img src={modalImage} width="100%" />
                    <p className="text-primary display-5">{modalBody}</p>
                </ModalBody>
                <ModalFooter>
                    {modalUrl &&
                        <a href={modalUrl} className="bth-primary px-1 py-1 display-5" target="_blank">Visit the Site</a>
                    }
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Sample;
