"use client"
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login submitted", formData);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/01.webp')" }}>
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="usernameOrEmail" placeholder="Username or Email" value={formData.usernameOrEmail} onChange={handleChange} className="p-2 bg-gray-900 text-white w-full rounded" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-2 bg-gray-900 text-white w-full rounded" required />
          <div className="flex justify-between items-center text-white">
            <label className="flex items-center">
              <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} className="mr-2" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-red-500">Forgot password?</a>
          </div>
          <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded w-full hover:bg-red-700">LOGIN</button>
        </form>
        <p className="text-white text-center mt-4">
          Don&apos;t have an account? <a href="/register" className="text-red-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
