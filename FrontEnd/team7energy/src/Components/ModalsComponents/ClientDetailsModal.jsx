import { Button, Col, ListGroup, Modal, Row } from "react-bootstrap";

const ClientDetailsModal = (props) => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={props.show}>
      <Modal.Header>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <img className="img-fluid" src={props.client.companyLogo} />
          </div>
          {/* <Modal.Title id="contained-modal-title-vcenter">{props.client.companyName}</Modal.Title> */}
        </div>
      </Modal.Header>
      <Modal.Body>
        <h4 className="border-bottom">Info</h4>
        <Row>
          <Col xs={12} md={6}>
            <h5>CEO details:</h5>
            <ListGroup>
              <ListGroup.Item className="border-0">
                CEO : {props.client.contactName} {props.client.contactSurname}
              </ListGroup.Item>
              <ListGroup.Item className="border-0">Email : {props.client.contactEmail}</ListGroup.Item>
              <ListGroup.Item className="border-0">Phone Number : {props.client.contactPhone}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={6}>
            <h5>Company details:</h5>
            <ListGroup>
              <ListGroup.Item className="border-0">Email : {props.client.email}</ListGroup.Item>
              <ListGroup.Item className="border-0">Phone Number : {props.client.phone}</ListGroup.Item>
              <ListGroup.Item className="border-0">Profit : &#36; {props.client.annualTurnHover},00</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Row>
          <Col xs={12}>
            <Button className="me-2" onClick={props.setClose}>
              Close
            </Button>
            <Button className="ms-2" onClick={props.clientBills}>
              Bills
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};
export default ClientDetailsModal;
