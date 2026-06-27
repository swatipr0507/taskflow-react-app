import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Signup Successful 🚀");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[90%] max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form
          onSubmit={handleSignup}
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

          <button className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;