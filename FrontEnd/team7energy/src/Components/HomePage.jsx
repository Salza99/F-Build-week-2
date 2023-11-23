import { Card, Col, Container, Row } from "react-bootstrap";
import TopBar from "./TopBar";
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

  const cards = [
    { title: "Card 1", content: "Contenuto della Card 1" },
    { title: "Card 2", content: "Contenuto della Card 2" },
    { title: "Card 3", content: "Contenuto della Card 3" },
    { title: "Card 4", content: "Contenuto della Card 4" },
    { title: "Card 5", content: "Contenuto della Card 5" },
    { title: "Card 6", content: "Contenuto della Card 6" },
    { title: "Card 7", content: "Contenuto della Card 7" },
    { title: "Card 8", content: "Contenuto della Card 8" },
    { title: "Card 9", content: "Contenuto della Card 9" },
  ];

  return (
    <div>
      <TopBar />
      <div className="d-flex justify-content-center h-100">
        <Container fluid>
          {[0, 1, 2].map((rowIndex) => (
            <Row key={rowIndex} className="mb-3">
              {[0, 1, 2].map((colIndex) => {
                const cardIndex = rowIndex * 3 + colIndex;
                if (cardIndex < cards.length) {
                  const card = cards[cardIndex];
                  return (
                    <Col key={colIndex} md={4}>
                      <Card className="mb-3">
                        <Card.Header>{card.title}</Card.Header>
                        <Card.Body>
                          <Card.Text>{card.content}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                } else {
                  return null; // Evita errori se cards è più corto di 9
                }
              })}
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
};
export default HomePage;
