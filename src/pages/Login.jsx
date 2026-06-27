import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful 🚀");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-800">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[90%] max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome Back 👋
        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5"
        >
          <input
            type="email"
            placeholder="Enter Email"
            className="border p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border p-3 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-black text-white p-3 rounded-lg hover:bg-gray-900">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;