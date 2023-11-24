import { Container, Row } from "react-bootstrap";
import TopBar from "../TopBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyClient from "./MyClient";

const Client = () => {
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
          <MyClient />
        </Row>
      </Container>
    </div>
  );
};
export default Client;
