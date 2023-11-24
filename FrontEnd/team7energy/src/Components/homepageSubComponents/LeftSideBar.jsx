import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeProfile } from "../../Redux/Actions/HomePageActions";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const homepageState = useSelector((state) => state.homepage.userContent);

  useEffect(() => {
    console.log(loginState.respLogin.authorizationToken.token);
    if (loginState.respLogin.authorizationToken.token) {
      dispatch(fetchMeProfile(loginState.respLogin.authorizationToken.token));
    }
  }, [loginState.respLogin.authorizationToken.token]);

  return (
    <Row>
      {homepageState.avatarUrl && (
        <>
          <Col xs={12}>
            <Card>
              <div className="d-flex justify-content-center">
                <Card.Img className="img-fluid rounded-circle w-75" variant="top" src={homepageState.avatarUrl} />
              </div>
              <Card.Body>
                <Card.Title>{homepageState.username}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{homepageState.email}</ListGroup.Item>
                <ListGroup.Item>
                  {homepageState.name} {homepageState.surname}
                </ListGroup.Item>
                <ListGroup.Item>profile: {homepageState.role}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to="/yourBills">Your Client</Link>
              </Card.Body>
            </Card>
          </Col>
        </>
      )}
    </Row>
  );
};
export default LeftSideBar;
