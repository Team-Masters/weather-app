import { AUTH_TOKEN } from "./constants";

//* The token gotten from the login */
export const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

//* Calling the token already stored *//
export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
