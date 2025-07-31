import api from "../api/api";

export const login = async (email, password) => {
  const res = await api.post("/api/hris_user/login_hris", { email, password });
  if (res.status === 200) {
    localStorage.setItem("firstName", res.data.user.firstName);
    localStorage.setItem("lastName", res.data.user.lastName);
    localStorage.setItem("userId", res.data.user.userId);
    localStorage.setItem("role", res.data.user.role);
    localStorage.setItem("token", res.data.token);
    console.log(res.data.user.role);

    return res.data.user.role;
  } else {
    throw new Error("Login failed");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  
  return true;
};

export default { login, logout };
