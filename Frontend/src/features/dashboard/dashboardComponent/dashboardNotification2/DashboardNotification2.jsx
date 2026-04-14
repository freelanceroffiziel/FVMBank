import React from "react";
import { RiNotification3Fill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { fetchNotifications } from "../../../../api/notificationsApi";
import useAuth from "../../../../context/useAuth";

const DashboardNotification2 = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
    enabled: !!user,
  });

  // Since fetchNotifications returns array directly
  const notifications = data || [];

  return (
    <main>
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="flex items-center gap-2 mb-3 text-lg font-bold text-teal-900">
          <RiNotification3Fill /> Notifications
        </h2>

        {isLoading && <p className="text-gray-500">Loading notifications...</p>}
        {error && <p className="text-red-500">{error.message}</p>}

        <ul className="space-y-2 text-gray-700 h-[30vh] overflow-y-scroll ">
          {notifications.length === 0 && !isLoading && !error && (
            <li className="text-gray-400">No notifications</li>
          )}

          {notifications.map((notif) => (
            <li
              key={notif._id}
              className={`pb-2 border-b ${
                !notif.isRead ? " border-blue-200" : ""
              }`}
            >
              <p className="font-semibold text-teal-900">{notif.message}</p>
              <p className="text-xs text-gray-400">
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
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default DashboardNotification2;
