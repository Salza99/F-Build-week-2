export const SAVE_TOKEN = "SAVE_TOKEN";

export const fetchLogin = (stateEmail, statePassword) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("http://localhost:3002/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: stateEmail,
          password: statePassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const token = await resp.json();
        dispatch({ type: SAVE_TOKEN, payload: token });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchRegister = (name, surname, email, password, username) => {
  return async () => {
    try {
      const resp = await fetch("http://localhost:3002/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          surname,
          password,
          email,
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        console.log("utente registrato");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchRegisterClient = (
  contactName,
  contactSurname,
  contactEmail,
  contactPhone,
  phone,
  companyName,
  VATNumber,
  email,
  annualTurnHover,
  pec,
  companyLogo,
  businessName
) => {
  return async () => {
    try {
      const resp = await fetch("http://localhost:3002/auth/client", {
        method: "POST",
        body: JSON.stringify({
          contactName,
          contactSurname,
          contactEmail,
          contactPhone,
          phone,
          companyName,
          VATNumber,
          email,
          annualTurnHover,
          pec,
          companyLogo,
          businessName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        console.log("cliente registrato");
      }
    } catch (err) {
      console.log(err.getMessage());
    }
  };
};
