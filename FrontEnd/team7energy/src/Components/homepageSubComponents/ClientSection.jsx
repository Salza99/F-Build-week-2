import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClients } from "../../Redux/Actions/ClientActions";
import SingleClient from "./SingleClient";
import { Alert } from "react-bootstrap";

const ClientSection = () => {
  const loginState = useSelector((state) => state.login.respLogin);
  const dispatch = useDispatch();
  const clientState = useSelector((state) => state.client);
  const [showClients, setShowClients] = useState(false);
  useEffect(() => {
    if (loginState.authorizationToken.token) {
      dispatch(fetchAllClients(loginState.authorizationToken.token));
      setShowClients(true);
    } else if (clientState.allClient.content.length < 1) {
      setShowClients(false);
    }
  }, [showClients]);

  return (
    <>
      {clientState.allClient.content.length > 1 && showClients ? (
        clientState.allClient.content.length > 0 &&
        clientState.allClient.content.map((client) => {
          return <SingleClient client={client} key={client.id} />;
        })
      ) : clientState.searchedClients.length > 0 ? (
        clientState.searchedClients.map((client) => {
          return <SingleClient client={client} key={client.id} />;
        })
      ) : (
        <Alert variant="danger">No result or empty search bar!! click home to wiew all client</Alert>
      )}
    </>
  );
};
export default ClientSection;
