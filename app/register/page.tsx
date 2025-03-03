"use client"

import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
      }

      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => {
        window.location.href = "/login"; // Redirect to login page
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/01.webp')" }}>
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Create Your Account</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="p-2 bg-gray-900 text-white w-full rounded" />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-2 bg-gray-900 text-white w-full rounded" />
          </div>
          <input type="text" name="username" placeholder="Username *" value={formData.username} onChange={handleChange} className="p-2 bg-gray-900 text-white w-full rounded" required />
          <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className="p-2 bg-gray-900 text-white w-full rounded" required />
          <input type="password" name="password" placeholder="Password *" value={formData.password} onChange={handleChange} className="p-2 bg-gray-900 text-white w-full rounded" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password *" value={formData.confirmPassword} onChange={handleChange} className="p-2 bg-gray-900 text-white w-full rounded" required />
          <label className="flex items-center text-white">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" />
            I&apos;ve read and accept the <span className="text-red-500">terms & conditions*</span>
          </label>
          <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded w-full hover:bg-red-700" disabled={loading}>
            {loading ? "Signing Up..." : "SIGN UP"}
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Already have an account? <a href="/login" className="text-red-500">Login</a>
        </p>
      </div>
    </div>
  );
}
