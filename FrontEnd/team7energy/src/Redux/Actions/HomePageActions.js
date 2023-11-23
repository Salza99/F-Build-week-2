export const MY_PROFILE_INFO = "MY_PROFILE_INFO";
export const LOGOUT = "LOGOUT";

export const fetchMeProfile = (token) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("http://localhost:3002/users/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: MY_PROFILE_INFO, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
