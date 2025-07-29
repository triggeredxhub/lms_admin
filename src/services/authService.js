
import api from "../api/api";

export const login = async (email, password) => {
  const res = await api.post("/api/hris_user/login_hris", { email, password });
  if (res.status === 200) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);
    console.log(res.data.user.role);
    return res.data.user.role;
  } else {
    throw new Error("Login failed");
  }
};


const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ROLE_KEY);
  localStorage.removeItem(USER_TYPE_KEY);
  return true;
};

export default {login, logout};