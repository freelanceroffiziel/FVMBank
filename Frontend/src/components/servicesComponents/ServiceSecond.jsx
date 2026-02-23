import React from "react";
import histories from "../../json/grantHistories.json"
const GrantOverview = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">About Grants</h2>
      <p className="text-gray-700">
        Governments and organizations worldwide offer financial grants to
        support startups, individuals, small businesses, and community projects.
        Grants are non-repayable funds designed to accelerate growth,
        innovation, and social impact. We help you achieve that by giving you
        direct access.
      </p>
    </section>
  );
};

const HowToApply = () => {
  return (
    <section className="py-12 px-6 bg-white rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">
        Grant Access & Claiming
      </h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>Check eligibility criteria for the grant program.</li>
        <li>Submit an online application form with project details.</li>
        <li>
          Provide supporting documents like business plan, budget, or community
          proposal.
        </li>
        <li>Wait for approval notification from our grants committee.</li>
        <li>Receive funds and start implementing your project.</li>
      </ol>
    </section>
  );
};

const GlobalGrantHistories = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-teal-700 mb-6">
        Global Grant Success Histories
      </h2>
      <div className="space-y-4">
        {histories.map((history, idx) => (
          <div key={idx} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold text-teal-700">
              {history.project} ({history.country})
            </h3>
            <p className="text-gray-700">{history.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ServiceSecond = () => {
  return (
    <main className="lg:mt-[10vh] mt-[16vh] px-4 lg:px-16">
      <GrantOverview />
      <HowToApply />
      <GlobalGrantHistories />
    </main>
  );
};

export default ServiceSecond;
