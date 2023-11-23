import { Col, Container, Row } from "react-bootstrap";
import TopBar from "./TopBar";
import LeftSideBar from "./homepageSubComponents/LeftSideBar";
import { useEffect } from "react";
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
  return (
    <div>
      <TopBar />
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <LeftSideBar />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default HomePage;
