import { Offcanvas } from "react-bootstrap";
import LeftSideBar from "./LeftSideBar";
import { Component } from "react";
import { ChevronDoubleLeft } from "react-bootstrap-icons";

class CanvasUserDetails extends Component {
  render() {
    return (
      <Offcanvas show={this.props.show} onHide={this.props.handleClose}>
        <Offcanvas.Header>
          <ChevronDoubleLeft onClick={this.props.handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <LeftSideBar />
        </Offcanvas.Body>
      </Offcanvas>
    );
  }
}
export default CanvasUserDetails;
