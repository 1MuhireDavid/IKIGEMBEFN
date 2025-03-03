"use client";

import Navbar from "@/components/Navbar";
import React from "react";

const Pricing = () => {
  const plans = [
    { name: "Daily Plan", price: "500 RWF", duration: "1 Day", value: "daily" },
    { name: "Weekly Plan", price: "3,000 RWF", duration: "1 Week", value: "weekly" },
    { name: "Monthly Plan", price: "11,000 RWF", duration: "1 Month", value: "monthly" },
  ];

  const handleSubscribe = async (plan: string) => {
      
    try {
      const token = localStorage.getItem('accessToken'); 
      const response = await fetch("http://localhost:8000/api/movies/subscribe/", {
        method: "POST",
        credentials: "include", // Ensures cookies are sent
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Add JWT token to headers if needed
        },
        body: JSON.stringify({ plan }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Subscription Error:", error);
      alert("Failed to initiate subscription.");
    }
  };
  

  return (
    <div className="min-h-screen bg-black text-white py-10">
        <Navbar/>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-600">Pricing Plan</h1>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {plans.map((plan) => (
          <div key={plan.value} className="w-80 border border-red-600 rounded-lg p-6">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-red-500 text-xl font-bold my-2">{plan.price}</p>
            <p className="text-gray-400">{plan.duration}</p>
            <ul className="my-4 space-y-2">
              <li className="flex items-center gap-2">✔ Ads free movies and shows</li>
              <li className="flex items-center gap-2">✔ HD & 4K Streaming</li>
              <li className="flex items-center gap-2">✔ Watch on TV, Laptop & Mobile</li>
            </ul>
            <button
              onClick={() => handleSubscribe(plan.value)}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full"
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
