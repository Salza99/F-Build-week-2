export const FETCH_PAGE_CLIENTS = "FETCH_PAGE_CLIENTS";
export const COMPANY_SEARCH_RESULT = "COMPANY_SEARCH_RESULT";

export const fetchAllClients = (token) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("http://localhost:3002/clients?size=10", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: FETCH_PAGE_CLIENTS, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const searchByCompanyName = (token, wordToSearch) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("http://localhost:3002/clients/companyname?name=" + wordToSearch, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: COMPANY_SEARCH_RESULT, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
