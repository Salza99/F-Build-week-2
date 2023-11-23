import { MY_PROFILE_INFO } from "../Actions/HomePageActions";

const initialState = {
  userContent: {
    id: 0,
    name: "",
    surname: "",
    email: "",
    username: "",
    role: "",
    avatarUrl: "",
  },
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROFILE_INFO:
      return {
        ...state,
        userContent: {
          id: action.payload.id,
          name: action.payload.name,
          surname: action.payload.surname,
          email: action.payload.email,
          username: action.payload.username,
          role: action.payload.role,
          avatarUrl: action.payload.avatarUrl,
        },
      };
    default:
      return state;
  }
};
export default HomePageReducer;
