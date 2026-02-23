import React from "react";
import { Link } from "react-router-dom";

const ServiceFift = () => {
  return (
    <main>
      <section className=" text-700  text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="mb-12 text-lg lg:text-xl">
          Connect with our experts and explore the right banking solution for
          you.
        </p>
        <Link
          to={"/contact"}
          className="text-teal-700 px-6 py-3 rounded font-semibold bg-gray-100 hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default ServiceFift;
