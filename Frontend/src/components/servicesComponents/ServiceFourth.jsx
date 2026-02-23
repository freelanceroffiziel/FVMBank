import React from "react";
import { FaUserPlus, FaIdCard, FaWallet, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUserPlus />,
    title: "Sign Up",
    desc: "Create your account online in minutes with our secure registration process.",
  },
  {
    id: 2,
    icon: <FaIdCard />,
    title: "Verify Identity",
    desc: "Submit your ID and necessary documents to verify your account safely.",
  },
  {
    id: 3,
    icon: <FaWallet />,
    title: "Fund Your Account",
    desc: "Deposit funds to start using banking services or apply for loans and grants.",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Start Banking",
    desc: "Access all services, track your progress, and manage finances easily.",
  },
];

const ServiceFourth = () => {
  return (
    <section className="px-4 lg:px-16 py-12 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl lg:text-4xl font-bold text-teal-700 text-center mb-12">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="text-teal-700 text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFourth;