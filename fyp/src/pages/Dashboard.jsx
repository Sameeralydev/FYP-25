
import React from "react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6 text-blue-600">My Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Overview
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Reports
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, {user?.email || "Guest"}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">Users</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">1,245</p>
            <p className="text-sm text-gray-500 mt-1">Active this month</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
            <p className="mt-2 text-3xl font-bold text-green-600">$8,490</p>
            <p className="text-sm text-gray-500 mt-1">This month</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">Projects</h3>
            <p className="mt-2 text-3xl font-bold text-purple-600">27</p>
            <p className="text-sm text-gray-500 mt-1">Ongoing</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
