function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        Dashboard 🚀
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">12</h2>
          <p>Total Tasks</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">5</h2>
          <p>Completed</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">7</h2>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;