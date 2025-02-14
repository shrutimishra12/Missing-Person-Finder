import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const Login = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const handleLogin = () => {
        localStorage.setItem("auth", "true"); // Save authentication state
        navigate("/dashboard");
    };


    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-8 rounded-2xl shadow-lg w-96"
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <motion.button
                    onClick={handleLogin}
                    disabled={!email}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 text-white font-semibold rounded-lg transition-all ${email ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    Login
                </motion.button>
            </motion.div>
        </div>
    );
};


export default Login;
