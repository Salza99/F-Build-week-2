import { Container, Row } from "react-bootstrap";
import TopBar from "./TopBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClientSection from "./homepageSubComponents/ClientSection";

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
          <ClientSection />
        </Row>
      </Container>
    </div>
  );
};
export default HomePage;
