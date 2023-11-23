import { FETCH_PAGE_CLIENTS } from "../Actions/ClientActions";
import { LOGOUT } from "../Actions/HomePageActions";

const initialState = {
  allClient: "",
};

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE_CLIENTS:
      return {
        ...state,
        allClient: action.payload,
      };
    case LOGOUT:
      return {
        allClient: action.payload,
      };
    default:
      return state;
  }
};
export default ClientReducer;
