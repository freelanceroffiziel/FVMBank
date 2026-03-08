import React from "react";

const Settings = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">Settings</h1>
          <p className="text-sm text-gray-500">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Settings */}
        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold text-teal-900">Profile</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="text"
              placeholder="Address"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />
          </div>
        </div>

        {/* Security */}
        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold text-teal-900">Security</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="password"
              placeholder="Current Password"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="password"
              placeholder="New Password"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Notification Preferences
          </h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>

            <label className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>

            <label className="flex items-center justify-between">
              <span>Loan Updates</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 font-semibold text-white transition bg-teal-900 rounded-lg hover:bg-teal-800">
            Save Changes
          </button>

          <button className="px-6 py-3 font-semibold transition bg-gray-200 rounded-lg hover:bg-gray-300">
            Cancel
          </button>
        </div>
      </section>
    </main>
  );
};

export default Settings;
