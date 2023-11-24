import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClients } from "../../Redux/Actions/ClientActions";
import SingleClient from "./SingleClient";

const ClientSection = () => {
  const loginState = useSelector((state) => state.login.respLogin);
  const dispatch = useDispatch();
  const clientState = useSelector((state) => state.client.allClient);

  useEffect(() => {
    if (loginState.authorizationToken.token) {
      dispatch(fetchAllClients(loginState.authorizationToken.token));
    }
  }, []);

  return (
    <>
      {clientState &&
        clientState.content.map((client) => {
          return <SingleClient client={client} key={client.id} />;
        })}
    </>
  );
};
export default ClientSection;
