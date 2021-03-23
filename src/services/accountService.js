import http from "../http-common";
const register = (data) => {
  return http.post("/register", data);
};

const login = (data) => {
  return http.post("/login", data, {
    withCredentials: true,
    credentials: "include",
  });
};

const auth = () => {
  return http.get("/auth", { withCredentials: true, credentials: "include" });
};

const update = (data) => {
  return http.post("/update", data, {
    withCredentials: true,
    credentials: "include",
  });
};

const logout = () => {
  return http.get("/logout", { withCredentials: true, credentials: "include" });
};

const forgotPassword = (email) => {
  return http.post("/forgot-password", email, {
    withCredentials: true,
    credentials: "include",
  });
};

const resetPassword = (data) => {
  return http.post("/reset-password", data, {
    withCredentials: true,
    credentials: "include",
  });
};

const validateResetToken = (data) => {
  return http.post("/validate-reset-token", data, {
    withCredentials: true,
    credentials: "include",
  });
};

export const accountService = {
  register,
  login,
  auth,
  logout,
  update,
  forgotPassword,
  resetPassword,
  validateResetToken,
};
