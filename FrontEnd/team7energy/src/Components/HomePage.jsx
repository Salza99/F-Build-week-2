import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import TopBar from "./TopBar";
import LeftSideBar from "./homepageSubComponents/LeftSideBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const isLogout = useSelector((state) => state.login.respLogin.authorizationToken.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogout) {
      navigate("/");
    }
  }, [isLogout]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <TopBar />
      <Container fluid>
        <Row>
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
        </Row>
      </Container>
    </div>
  );
};
export default HomePage;
