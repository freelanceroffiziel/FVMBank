import React from "react";

const Notification = () => {
  return (
    <main className="pt-[14.2vh] lg:pt-[16vh] min-h-screen">
      <section className="mx-auto bg-white shadow-lg rounded-lg p-6">

        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-teal-900">Notifications</h1>
          <p className="text-gray-500 text-sm">
            Stay updated with your account activities
          </p>
        </div>

        {/* Notifications List */}
        <div className="space-y-4 mb-10">

          {/* Notification 1 */}
          <div className="border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-teal-900">
                Payment Successful
              </p>
              <p className="text-sm text-gray-500">
                Your transfer of $120 to John Smith was successful.
              </p>
            </div>

            <span className="text-sm text-gray-400">
              2 mins ago
            </span>
          </div>

          {/* Notification 2 */}
          <div className="border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-teal-900">
                Card Transaction
              </p>
              <p className="text-sm text-gray-500">
                Your card was charged $15 for Netflix subscription.
              </p>
            </div>

            <span className="text-sm text-gray-400">
              10 mins ago
            </span>
          </div>

          {/* Notification 3 */}
          <div className="border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-teal-900">
                New Login Detected
              </p>
              <p className="text-sm text-gray-500">
                Your account was accessed from a new device.
              </p>
            </div>

            <span className="text-sm text-gray-400">
              1 hour ago
            </span>
          </div>

          {/* Notification 4 */}
          <div className="border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 transition">
            <div>
              <p className="font-semibold text-teal-900">
                Card Request Approved
              </p>
              <p className="text-sm text-gray-500">
                Your new virtual card request has been approved.
              </p>
            </div>

            <span className="text-sm text-gray-400">
              Yesterday
            </span>
          </div>

        </div>

        {/* Notification Actions */}
        <div className="grid md:grid-cols-2 gap-4">

          <button className="bg-teal-900 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
            Mark All as Read
          </button>

          <button className="bg-gray-200 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Clear Notifications
          </button>

        </div>

      </section>
    </main>
  );
};

export default Notification;