import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeProfile } from "../../Redux/Actions/HomePageActions";

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

  return <div>{homepageState.avatarUrl && <img src={homepageState.avatarUrl} alt="profile-img" />}</div>;
};
export default LeftSideBar;
