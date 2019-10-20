import React, { useState } from 'react'
import Scanner from './Scanner';
import { Modal, Button } from "react-bootstrap"

// export default class Modal extends Component {

//   const show = useState(false);
//   handleClose = () => setShow(false);
//   handleShow = () => setShow(true);

//   render() {
//     return (
//       <div>
//         <Button variant="primary" onClick={handleShow}>
//           Launch Scanner
//         </Button>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Scanner />
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     )
//   }
// }


export default function Webcam() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Scan Your Code</Modal.Title>
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
    </>
  );
}