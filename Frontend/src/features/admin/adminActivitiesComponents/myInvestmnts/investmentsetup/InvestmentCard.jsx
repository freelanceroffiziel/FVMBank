import React from "react";

const InvestmentCard = ({
  title,
  amount,
  date,
  interestRate,
  progress,
  icon,
}) => {
  return (
    <section className="bg-white shadow rounded p-4">
      <div className="flex flex-row items-center justify-between">
        {/* Left: Icon + Details */}
        <div className="flex flex-row items-center gap-3.5">
          <span
            className="text-2xl text-white bg-teal-600 p-4 rounded"
            aria-label={`${title} icon`}
          >
            {icon}
          </span>

          <ul className="mt-2">
            <li>
              <p className="font-semibold">{title}</p>
            </li>

            {interestRate && (
              <li>
                <p className="text-gray-500">{interestRate} interest rate</p>
              </li>
            )}

            <li className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-teal-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{progress}% complete</p>
            </li>
          </ul>
        </div>

        {/* Right: Amount + Date */}
        <div className="text-right">
          <span className="text-lg font-bold text-teal-900">{amount}</span>
          {date && <p className="text-sm text-gray-500">{date}</p>}
        </div>
      </div>
    </section>
  );
};

export default InvestmentCard;
