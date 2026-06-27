import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-2xl text-white text-center w-[90%] max-w-2xl shadow-2xl">
        <h1 className="text-5xl font-bold mb-5">
          TaskFlow 🚀
        </h1>

        <p className="text-lg mb-8">
          Manage your tasks smartly and boost your productivity.
        </p>

        <div className="flex justify-center gap-5">
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;