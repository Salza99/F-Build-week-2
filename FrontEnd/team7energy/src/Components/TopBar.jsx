import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../Redux/Actions/HomePageActions";

const TopBar = () => {
  const dispatch = useDispatch();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
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
