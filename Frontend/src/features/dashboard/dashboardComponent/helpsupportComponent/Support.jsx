import React from "react";

const Support = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">

        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">Help & Support</h1>
          <p className="text-sm text-gray-500">
            Need assistance? Contact our support team or browse FAQs
          </p>
        </div>

        {/* Quick Support Options */}
        <div className="grid gap-6 mb-10 md:grid-cols-3">

          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-teal-900">Live Chat</h3>
            <p className="text-sm text-gray-500">
              Chat instantly with our support team.
            </p>
            <button className="px-4 py-2 mt-3 text-white bg-teal-900 rounded-lg hover:bg-teal-800">
              Start Chat
            </button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-teal-900">Email Support</h3>
            <p className="text-sm text-gray-500">
              Send us an email and we'll respond quickly.
            </p>
            <button className="px-4 py-2 mt-3 text-white bg-green-600 rounded-lg hover:bg-green-500">
              Send Email
            </button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-teal-900">Call Support</h3>
            <p className="text-sm text-gray-500">
              Speak directly with our support team.
            </p>
            <button className="px-4 py-2 mt-3 text-white bg-gray-700 rounded-lg hover:bg-gray-600">
              Call Now
            </button>
          </div>

        </div>

        {/* Contact Form */}
        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Contact Support
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="text"
              placeholder="Subject"
              className="p-3 border rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-teal-900"
            />

            <textarea
              rows="4"
              placeholder="Describe your issue..."
              className="p-3 border rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-teal-900"
            ></textarea>

          </div>

          <button className="px-6 py-3 mt-4 font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800">
            Submit Request
          </button>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-teal-900">
                How do I apply for a loan?
              </h3>
              <p className="text-sm text-gray-500">
                Go to the Loans page and click the "Apply for Loan" button to
                start your application.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-teal-900">
                How can I repay my loan?
              </h3>
              <p className="text-sm text-gray-500">
                Navigate to the Loans section and click "Repay Loan".
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-teal-900">
                How do I contact support?
              </h3>
              <p className="text-sm text-gray-500">
                You can use the contact form above, email us, or start a live
                chat.
              </p>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
};

export default Support;