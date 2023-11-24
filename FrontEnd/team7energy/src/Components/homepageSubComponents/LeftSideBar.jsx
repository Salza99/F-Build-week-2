import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeProfile } from "../../Redux/Actions/HomePageActions";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

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
            <Card className="border-0">
              <div className="d-flex justify-content-center">
                <Card.Img className="img-fluid rounded-circle w-75" variant="top" src={homepageState.avatarUrl} />
              </div>
              <Card.Body>
                <Card.Title>Username : {homepageState.username}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Resource : {homepageState.name} {homepageState.surname}
                </ListGroup.Item>
                <ListGroup.Item>Email : {homepageState.email}</ListGroup.Item>
                <ListGroup.Item>Role : {homepageState.role}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </>
      )}
    </Row>
  );
};
export default LeftSideBar;
