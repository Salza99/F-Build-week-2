import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../Redux/Actions/HomePageActions";
import LeftSideBar from "./homepageSubComponents/LeftSideBar";
import { useState } from "react";
import CanvasUserDetails from "./homepageSubComponents/CanvasUserDetail";
import { ChevronDoubleRight } from "react-bootstrap-icons";
const TopBar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <ChevronDoubleRight variant="primary" onClick={handleShow} />
        <CanvasUserDetails show={show} handleShow={handleShow} handleClose={handleClose} />

        <Navbar.Brand className="me-2">
          <img className="logo" src="/src/assets/logo.png" alt="Logo Team7Energy" />
        </Navbar.Brand>
        <Form
          className="d-flex me-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
