import { Col, Container, Row } from "react-bootstrap";
import TopBar from "./TopBar";
import LeftSideBar from "./homepageSubComponents/LeftSideBar";

const HomePage = () => {
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
