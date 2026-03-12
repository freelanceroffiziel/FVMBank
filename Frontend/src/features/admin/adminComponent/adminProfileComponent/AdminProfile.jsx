import React from "react";

const AdminProfile = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">

        {/* Header */}
        <div className="pb-4 mb-8 border-b">
          <h1 className="text-2xl font-bold text-teal-900">User Profile</h1>
          <p className="text-sm text-gray-500">
            View your personal account information
          </p>
        </div>

        {/* Profile Top Section */}
        <div className="flex flex-col items-center gap-6 pb-8 mb-8 border-b md:flex-row">

          {/* Profile Image */}
          <div className="flex items-center justify-center text-3xl font-bold text-white bg-teal-900 rounded-full w-28 h-28">
            U
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-teal-900">User Name</h2>
            <p className="text-gray-500">user@email.com</p>
            <p className="mt-1 text-sm text-gray-400">Account Holder</p>

            <button className="px-4 py-2 mt-3 text-white bg-teal-900 rounded-lg hover:bg-teal-800">
              Edit Profile
            </button>
          </div>

        </div>

        {/* Profile Details */}
        <div className="grid gap-6 md:grid-cols-2">

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold text-teal-900">User Name</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-semibold text-teal-900">user@email.com</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-semibold text-teal-900">+234 000 000 0000</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-semibold text-teal-900">01 Jan 2000</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Country</p>
            <p className="font-semibold text-teal-900">Nigeria</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-semibold text-teal-900">
              123 Example Street
            </p>
          </div>

        </div>

      </section>
    </main>
  );
};

export default AdminProfile;