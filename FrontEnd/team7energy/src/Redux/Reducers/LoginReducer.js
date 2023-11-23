import { LOGOUT } from "../Actions/HomePageActions";
import { SAVE_TOKEN } from "../Actions/LoginActions";

const initialState = {
  respLogin: {
    authorizationToken: "",
  },
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        respLogin: {
          authorizationToken: action.payload,
        },
      };
    case LOGOUT:
      return {
        respLogin: {
          authorizationToken: action.payload,
        },
      };
    default:
      return state;
  }
};
export default LoginReducer;
