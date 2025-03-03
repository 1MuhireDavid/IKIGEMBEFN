import React from "react";

const Features: React.FC = () => {
  return (
    <section className="bg-red-600 text-white py-16 text-center">
      <h2 className="text-4xl font-bold">Why Choose Us?</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="p-6 bg-black rounded-xl">
          <h3 className="text-2xl font-semibold">Feature One</h3>
          <p className="mt-2">Description of the amazing feature.</p>
        </div>
        <div className="p-6 bg-black rounded-xl">
          <h3 className="text-2xl font-semibold">Feature Two</h3>
          <p className="mt-2">Another great benefit.</p>
        </div>
        <div className="p-6 bg-black rounded-xl">
          <h3 className="text-2xl font-semibold">Feature Three</h3>
          <p className="mt-2">Why you will love our service.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;