import { FETCH_PAGE_CLIENTS } from "../Actions/ClientActions";

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
    default:
      return state;
  }
};
export default ClientReducer;
