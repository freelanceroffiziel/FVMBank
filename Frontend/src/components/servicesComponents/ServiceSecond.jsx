import React from "react";
import { FaPiggyBank, FaCreditCard, FaChartLine, FaHandHoldingUsd } from "react-icons/fa";

const services = [
  { icon: <FaPiggyBank />, title: "Savings Accounts", desc: "Secure and flexible savings options for individuals and businesses." },
  { icon: <FaCreditCard />, title: "Credit Cards", desc: "Exclusive credit cards with rewards and cashback." },
  { icon: <FaChartLine />, title: "Investments", desc: "Grow your wealth with smart investment strategies." },
  { icon: <FaHandHoldingUsd />, title: "Business Loans", desc: "Flexible loans to accelerate your business growth." },
];

const ServiceSecond = () => {
  return (
    <section className="px-4 lg:px-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-teal-700 mb-12">
        Our Core Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <div className="text-teal-700 text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSecond;