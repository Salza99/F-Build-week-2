import { COMPANY_SEARCH_RESULT, FETCH_PAGE_CLIENTS } from "../Actions/ClientActions";
import { LOGOUT } from "../Actions/HomePageActions";

const initialState = {
  allClient: { content: [] },
  searchedClients: [],
};

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE_CLIENTS:
      return {
        ...state,
        allClient: action.payload,
      };
    case COMPANY_SEARCH_RESULT:
      return {
        allClient: { content: [] },
        searchedClients: action.payload,
      };
    case LOGOUT:
      return {
        allClient: { content: [] },
        searchedClients: [],
      };

    default:
      return state;
  }
};
export default ClientReducer;
