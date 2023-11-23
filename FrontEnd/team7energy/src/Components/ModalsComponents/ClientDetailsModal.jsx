import { Button, Col, ListGroup, Modal, Row } from "react-bootstrap";

const ClientDetailsModal = (props) => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={props.show}>
      <Modal.Header>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <img className="img-fluid rounded-circle" src={props.client.companyLogo} />
          </div>
          <Modal.Title id="contained-modal-title-vcenter">{props.client.companyName}</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <h4>Info:</h4>
        <Row>
          <Col xs={12} md={6}>
            <h5>CEO details:</h5>
            <ListGroup>
              <ListGroup.Item>{props.client.contactName}</ListGroup.Item>
              <ListGroup.Item>{props.client.contactSurname}</ListGroup.Item>
              <ListGroup.Item>{props.client.contactEmail}</ListGroup.Item>
              <ListGroup.Item>{props.client.contactPhone}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={6}>
            <h5>Company details:</h5>
            <ListGroup>
              <ListGroup.Item>{props.client.email}</ListGroup.Item>
              <ListGroup.Item>{props.client.phone}</ListGroup.Item>
              <ListGroup.Item>{props.client.annualTurnHover}</ListGroup.Item>
              <ListGroup.Item>{props.client.lastContractDate}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12}>
            <ListGroup>
              <ListGroup.Item>{props.client.email}</ListGroup.Item>
              <ListGroup.Item>{props.client.phone}</ListGroup.Item>
              <ListGroup.Item>{props.client.annualTurnHover}</ListGroup.Item>
              <ListGroup.Item>{props.client.lastContractDate}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.setClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ClientDetailsModal;
