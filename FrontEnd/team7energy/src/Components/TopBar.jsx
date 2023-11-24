import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../Redux/Actions/HomePageActions";

import { useState } from "react";
import CanvasUserDetails from "./homepageSubComponents/CanvasUserDetail";
import { ChevronDoubleRight, Search } from "react-bootstrap-icons";
const TopBar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between">
      <Container className="d-flex mx-0 px-0 ">
        <ChevronDoubleRight className="me-5" variant="primary" onClick={handleShow} />
        <CanvasUserDetails show={show} handleShow={handleShow} handleClose={handleClose} />

        <Navbar.Brand className="ms-5 me-5">
          <img className="logo" src="/src/assets/logo.png" alt="Logo Team7Energy" />
        </Navbar.Brand>
        <Form
          className="d-flex me-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Control
            type="search"
            placeholder="Search"
            className="rounded-pill justify-content-center"
            aria-label="Search"
          />
          <Button className="border-0 btn-lg fs-3" variant="outline-black">
            <Search></Search>
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
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
