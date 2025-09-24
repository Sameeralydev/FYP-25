import { motion } from "framer-motion"
import divider from "../assets/divider.svg"
import React from "react";

const Login = () => {
// State for form fields
const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");

// Handle form submit
const handleSubmit = (e) => {
    e.preventDefault();
    // Store user info in localStorage
    localStorage.setItem("user", JSON.stringify({ username, password }));
    // Optionally, you can redirect or show a message here
};

return (
    <div className="min-h-screen  bg-white dark:bg-[#1A1A1A] pt-20 flex flex-col items-center">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#232323] rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center"
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Login to Your Account</h2>
            <img src={divider} alt="" className="mb-6 w-24" />
            <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#181818] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Enter your username"
                        autoComplete="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#181818] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {(username && password) && (
                    <button
                        type="submit"
                        className="w-full py-2 mt-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                        onClick={() => window.location.href = "/dashboard"}
                    >
                        Login
                    </button>
                )}
            </form>
        </motion.div>
    </div>
)
}

export default Login