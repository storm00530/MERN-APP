import http from "../http-common";

const register = (data) => {
  return http.post("/register", data);
};

const login = (data) => {
  return http.post("/login", data);
};

const auth = () => {
  return http.get("/auth");
};

const logout = () => {
  return http.get("/logout");
};

const router = {
  register,
  login,
  auth,
  logout,
};

export default router;
