import React, { useState } from 'react'
import Scanner from './Scanner';
import { Modal, Button } from "react-bootstrap"
// import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

export default function Webcam() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modal-box">
      <p id="caption"> If your apparel has a GS code on the care label, 
      <br></br>you can scan it here to pull up its unique product page.</p>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Click Here Scan Your QRcode
      </Button>
      <Modal show={show} onHide={handleClose} className="webcam-modal" centered>
        <Modal.Header>
          <Modal.Title>Scan Your Barcode</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Scanner />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}