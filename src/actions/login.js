const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});

