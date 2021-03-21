import http from "../http-common";
const register = (data) => {
  return http.post("/register", data);
};

const login = (data) => {
  return http.post("/login", data,{withCredentials: true, credentials: 'include'});
};

const auth = () => {
  return http.get("/auth",{withCredentials: true, credentials: 'include'});
};

const update = (data) => {
  return http.post("/update",data,{withCredentials: true, credentials: 'include'});
};

const logout = () => {
  return http.get("/logout",{withCredentials: true, credentials: 'include'});
};

const router = {
  register,
  login,
  auth,
  logout,
  update
};

export default router;
