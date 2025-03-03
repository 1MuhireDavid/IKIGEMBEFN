import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 text-center">
      <h2 className="text-4xl font-bold">Get Started Today</h2>
      <p className="mt-4 text-lg">Sign up now and take advantage of our premium services.</p>
      <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
        Join Now
      </button>
    </section>
  );
};

export default CTA;