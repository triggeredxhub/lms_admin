import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const role = await login(email, password);
    navigate(`/${role}`);
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </div>
  );
}
