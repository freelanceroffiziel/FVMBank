import React from "react";

const AdminNotification = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">Notifications</h1>
          <p className="text-sm text-gray-500">
            Stay updated with your account activities
          </p>
        </div>

        {/* Notifications List */}
        <div className="mb-10 space-y-4">
          {/* Notification 1 */}
          <div className="flex items-center justify-between p-4 transition border rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-semibold text-teal-900">Payment Successful</p>
              <p className="text-sm text-gray-500">
                Your transfer of $120 to John Smith was successful.
              </p>
            </div>

            <span className="text-sm text-gray-400">2 mins ago</span>
          </div>

          {/* Notification 2 */}
          <div className="flex items-center justify-between p-4 transition border rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-semibold text-teal-900">Card Transaction</p>
              <p className="text-sm text-gray-500">
                Your card was charged $15 for Netflix subscription.
              </p>
            </div>

            <span className="text-sm text-gray-400">10 mins ago</span>
          </div>

          {/* Notification 3 */}
          <div className="flex items-center justify-between p-4 transition border rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-semibold text-teal-900">New Login Detected</p>
              <p className="text-sm text-gray-500">
                Your account was accessed from a new device.
              </p>
            </div>

            <span className="text-sm text-gray-400">1 hour ago</span>
          </div>

          {/* Notification 4 */}
          <div className="flex items-center justify-between p-4 transition border rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-semibold text-teal-900">
                Card Request Approved
              </p>
              <p className="text-sm text-gray-500">
                Your new virtual card request has been approved.
              </p>
            </div>

            <span className="text-sm text-gray-400">Yesterday</span>
          </div>
        </div>

        {/* Notification Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <button className="py-3 font-semibold text-white transition bg-teal-900 rounded-lg hover:bg-teal-800">
            Mark All as Read
          </button>

          <button className="py-3 font-semibold transition bg-gray-200 rounded-lg hover:bg-gray-300">
            Clear Notifications
          </button>
        </div>
      </section>
    </main>
  );
};

export default AdminNotification;
