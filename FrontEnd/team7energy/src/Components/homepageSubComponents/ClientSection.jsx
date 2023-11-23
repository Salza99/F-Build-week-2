import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClients } from "../../Redux/Actions/ClientActions";
import SingleClient from "./SingleClient";

const ClientSection = () => {
  const loginState = useSelector((state) => state.login.respLogin);
  const dispatch = useDispatch();
  const clientState = useSelector((state) => state.client.allClient);
  const [showClients, setShowClients] = useState(false);
  useEffect(() => {
    if (loginState.authorizationToken.token) {
      dispatch(fetchAllClients(loginState.authorizationToken.token));
    }
    if (clientState !== "") {
      setShowClients(true);
    }
  }, []);
  return (
    <div>
      {showClients &&
        clientState.content.map((client) => {
          return <SingleClient client={client} key={client.id} />;
        })}
    </div>
  );
};
export default ClientSection;
