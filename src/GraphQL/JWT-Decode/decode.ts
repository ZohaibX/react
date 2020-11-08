import jwtDecoded from "jwt-decode";

export function gettingUserData() {
  try {
    const jwt: any = localStorage.getItem("token");
    return jwtDecoded(jwt); // this is a new npm import ooper
  } catch (e) {
    // if user doesn't have a token in his local storage -- then server will be crashed
    // to handle this exception -- we must have a try catch block
    // we don't need any alerts -- we just want system to run if user is logged in or not
    // for that reason -- we must have a try catch block -- it doesn't matter if it contains something or not
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}
