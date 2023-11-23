import { Button, Col, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../Redux/Actions/HomePageActions";
import LeftSideBar from "./homepageSubComponents/LeftSideBar";
import { useState } from "react";

const TopBar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Col>
          <Button variant="primary" onClick={handleShow} className="">
            User info
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <LeftSideBar />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
              lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Navbar.Brand>
          <img className="logo" src="/src/assets/logo.png" alt="Logo Team7Energy" />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <Nav.Link
              onClick={() => {
                dispatch({ type: LOGOUT, payload: "" });
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopBar;
