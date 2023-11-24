import { Component } from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import ClientDetailsModal from "../ModalsComponents/ClientDetailsModal";

class SingleClient extends Component {
  state = {
    show: false,
  };
  setShow = () => {
    this.setState({ show: true });
  };
  setClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <Col className="g-3" xs={12} md={4}>
          <Card
            style={{ height: "400px" }}
            className="mb-3"
            onClick={() => {
              this.setShow();
            }}
          >
            <Card.Header className=" d-flex justify-content-center">
              <img
                className="img-fluid"
                style={{ height: "200px" }}
                src={this.props.client.companyLogo}
                alt="company-logo"
              />
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item className="border-0">Company Name : {this.props.client.companyName}</ListGroup.Item>
                <ListGroup.Item className="border-0">
                  CEO : {this.props.client.contactName} {this.props.client.contactSurname}
                </ListGroup.Item>
                <ListGroup.Item className="border-0">Email : {this.props.client.email}</ListGroup.Item>
                <ListGroup.Item className="border-0">Phone Number : {this.props.client.phone}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <ClientDetailsModal setClose={this.setClose} show={this.state.show} client={this.props.client} />
      </>
    );
  }
}
export default SingleClient;
