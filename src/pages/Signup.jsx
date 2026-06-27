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

      alert("User Registered Successfully 🚀");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Signup
      </h1>

      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="email"
          placeholder="Enter Email"
          className="border p-3 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="border p-3 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white p-3 rounded">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;