// mock login and logout
export function login(data) {
  // add cookie
  document.cookie = "swr-test-token=swr;";
  sessionStorage.setItem("email", data.email);
  sessionStorage.setItem("password", data.password);
}
export function logout() {
  // delete cookie
  document.cookie = "swr-test-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  sessionStorage.clear();
}
