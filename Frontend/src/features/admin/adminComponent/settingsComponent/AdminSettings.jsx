import React from "react";

const AdminSettings = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">

        {/* Header */}
        <div className="pb-4 mb-8 border-b">
          <h1 className="text-2xl font-bold text-teal-900">Account Settings</h1>
          <p className="text-sm text-gray-500">
            Manage your profile, security and preferences
          </p>
        </div>

        {/* PROFILE IMAGE */}
        <div className="p-6 mb-8 border rounded-lg">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Change Your Image
          </h2>

          <div className="flex flex-col items-center gap-6 md:flex-row">
            {/* Preview */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-24 h-24 text-2xl font-bold text-white bg-teal-900 rounded-full">
                U
              </div>
              <p className="mt-2 text-sm text-gray-500">Profile Preview</p>
            </div>

            {/* Upload */}
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Choose Profile Image
              </label>

              <input
                type="file"
                className="p-2 border rounded-lg"
              />

              <button className="px-4 py-2 mt-3 text-white bg-teal-900 rounded-lg hover:bg-teal-800">
                Upload Image
              </button>
            </div>
          </div>
        </div>

        {/* UPDATE INFO */}
        <div className="p-6 mb-8 border rounded-lg">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Update Your Information
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="date"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-teal-900"
            />

            <select className="p-3 border rounded-lg focus:ring-2 focus:ring-teal-900">
              <option>Select Country</option>
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>Kenya</option>
            </select>

            <input
              type="text"
              placeholder="Enter address"
              className="p-3 border rounded-lg md:col-span-2 focus:ring-2 focus:ring-teal-900"
            />

          </div>

          <button className="px-6 py-3 mt-4 text-white bg-teal-900 rounded-lg hover:bg-teal-800">
            Update Info
          </button>
        </div>

        {/* CHANGE PASSWORD */}
        <div className="p-6 mb-8 border rounded-lg">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Change Your Password
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <input
              type="password"
              placeholder="New Password"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-teal-900"
            />

            <input
              type="password"
              placeholder="ReType Password"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-teal-900"
            />

          </div>

          <button className="px-6 py-3 mt-4 text-white bg-teal-900 rounded-lg hover:bg-teal-800">
            Update Password
          </button>
        </div>

        {/* NOTIFICATIONS */}
        <div className="p-6 border rounded-lg">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Notification Preferences
          </h2>

          <div className="space-y-3">

            <label className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>

            <label className="flex items-center justify-between">
              <span>SMS Alerts</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>

            <label className="flex items-center justify-between">
              <span>Loan Updates</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>

          </div>
        </div>

      </section>
    </main>
  );
};

export default AdminSettings;