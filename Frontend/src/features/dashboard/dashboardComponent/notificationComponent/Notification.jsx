import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchNotifications,
  markAllNotificationsAsRead,
  clearAllNotifications,
} from "../../../../api/notificationsApi";

const notificationConfig = {
  user: { label: "User Activity", icon: "👤", color: "bg-teal-900" },
  transaction: { label: "Transaction", icon: "💰", color: "bg-green-700" },
  admin: { label: "Admin Action", icon: "🛡️", color: "bg-red-600" },
  system: { label: "System Notification", icon: "⚙️", color: "bg-gray-500" },
};

const formatTimeAgo = (date) => {
  const now = new Date();
  const diff = Math.floor((now - new Date(date)) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
  return `${Math.floor(diff / 86400)} days ago`;
};

const Notification = () => {
  const queryClient = useQueryClient();

  const {
    data: notifications = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 15,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const handleMarkAllRead = async () => {
    console.log("Mark All Read clicked");
    try {
      await markAllNotificationsAsRead();
      queryClient.invalidateQueries(["notifications"]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleClearAll = async () => {
    console.log("Clear Notifications clicked");
    try {
      await clearAllNotifications();
      queryClient.invalidateQueries(["notifications"]);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <main className="pt-[14vh] lg:pt-[16vh]">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 pb-4 mb-4 bg-white border-b">
          <h1 className="text-2xl font-bold text-teal-900">Notifications</h1>
          <p className="text-sm text-gray-500">
            Stay updated with your account activities
          </p>
        </div>

        <div className="overflow-hidden border border-teal-100 rounded-lg">
          <div className="max-h-[51vh] overflow-y-auto p-2 space-y-2">
            {/* Error */}
            {error && (
              <p className="mb-4 text-center text-red-600">{error.message}</p>
            )}

            {/* Loading */}
            {isLoading && notifications.length === 0 && (
              <p className="text-center text-gray-500">
                Loading notifications...
              </p>
            )}

            {/* Empty */}
            {notifications.length === 0 && !isLoading && !error && (
              <p className="text-center text-gray-500">No notifications yet.</p>
            )}

            {/* Notifications */}
            {notifications.map((notif) => {
              const config = notificationConfig[notif.type] || {
                label: "Notification",
                icon: "🔔",
                color: "bg-teal-900",
              };

              return (
                <div
                  key={notif._id}
                  className={`flex items-start justify-between p-4 border rounded-lg transition hover:bg-gray-50 ${
                    !notif.isRead ? "bg-blue-50 border-blue-200" : ""
                  }`}
                >
                  {/* Left side */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 text-white rounded-full ${config.color}`}
                    >
                      {config.icon}
                    </div>

                    <div>
                      {/* Label */}
                      <p className="font-semibold text-teal-900">
                        {config.label}
                      </p>

                      {/* Message */}
                      <p className="text-sm text-gray-600">{notif.message}</p>

                      {/* Time */}
                      <p className="mt-1 text-xs text-gray-400">
                        {formatTimeAgo(notif.createdAt)} •{" "}
                        {new Date(notif.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        •{" "}
                        {new Date(notif.createdAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  {!notif.isRead && (
                    <span className="text-xs font-semibold text-blue-600">
                      New
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 grid gap-4 p-2 mt-2 md:grid-cols-2">
            <button
              onClick={handleMarkAllRead}
              className="py-3 font-semibold text-white transition bg-teal-900 rounded-lg hover:bg-teal-800"
            >
              Mark All as Read
            </button>

            <button
              onClick={handleClearAll}
              className="py-3 font-semibold transition bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Clear Notifications
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Notification;