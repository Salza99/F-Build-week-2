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
            className="mb-3 h-100"
            onClick={() => {
              this.setShow();
            }}
          >
            <Card.Header>
              <img className="img-fluid" src={this.props.client.companyLogo} alt="company-logo" />
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>{this.props.client.companyName}</ListGroup.Item>
                <ListGroup.Item>
                  CEO = {this.props.client.contactName} {this.props.client.contactSurname}
                </ListGroup.Item>
                <ListGroup.Item>email = {this.props.client.email}</ListGroup.Item>
                <ListGroup.Item>phone number = {this.props.client.phone}</ListGroup.Item>
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
