import React, { useEffect } from "react";
import {
  FaBell,
  FaArrowDown,
  FaArrowUp,
  FaExchangeAlt,
  FaWallet,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";
import useAuth from "../../../../context/useAuth";

const Notifications = () => {
  const {
    notifications,
    notificationsLoading,
    notificationsError,
    markNotificationsRead,
  } = useAuth();

  useEffect(() => {
    markNotificationsRead();
  }, [markNotificationsRead]);

  // Left icon based on message type
  const getIcon = (message) => {
    const lower = message.toLowerCase();
    if (lower.includes("withdrawn"))
      return <FaArrowDown className="text-red-500" />;
    if (lower.includes("credited"))
      return <FaArrowUp className="text-green-500" />;
    if (lower.includes("swapped"))
      return <FaExchangeAlt className="text-yellow-500" />;
    return <FaWallet className="text-gray-500" />;
  };

  // Right status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <FaCheckCircle className="text-green-500" title="Success" />;
      case "pending":
        return <FaClock className="text-yellow-500" title="Pending" />;
      case "failed":
        return <FaTimesCircle className="text-red-500" title="Failed" />;
      default:
        return null;
    }
  };

  return (
    <main className="lg:pt-[8vh] pt-[9vh] pb-3 px-1 relative">
      {/* Header */}
      <header className="mb-6 border-b border-gray-300 pb-2 flex items-center gap-2 fixed bg-white shadow rounded-lg p-6 lg:w-[57%] w-full z-20">
        <FaBell className="text-teal-600 text-xl" />
        <h1 className="text-2xl font-semibold text-gray-800">Notifications</h1>
      </header>

      {/* Notifications section */}
      <section className="bg-white shadow-md rounded-lg p-6 mt-14 relative w-fit lg:w-full ">
        <div className="contentPage overflow-y-scroll h-[75vh] hide-scrollbar w-fit lg:w-full">
          {/* Loading state */}
          {notificationsLoading && <p>Loading notifications...</p>}

          {/* Error state */}
          {notificationsError && (
            <p className="text-red-500">Error: {notificationsError}</p>
          )}

          {/* Empty state */}
          {!notificationsLoading &&
            !notificationsError &&
            notifications.length === 0 && <p>No notifications found.</p>}

          {/* Notifications list */}
          {!notificationsLoading &&
            !notificationsError &&
            notifications.length > 0 && (
              <ul className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <li
                    key={notification._id || notification.createdAt}
                    className={`flex items-center justify-between gap-3 py-3 px-2 hover:bg-gray-50 transition-colors duration-150 ${
                      !notification.read ? "bg-gray-100 font-semibold" : ""
                    }`}
                  >
                    {/* Left icon */}
                    <div className="flex-shrink-0">
                      {getIcon(notification.message)}
                    </div>

                    {/* Message and timestamp */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-gray-800 font-medium truncate">
                        {notification.message}
                      </p>
                      {notification.createdAt && (
                        <span className="text-sm text-gray-500">
                          {new Date(notification.createdAt).toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Right-hand status icon */}
                    <div className="flex-shrink-0 ml-2">
                      {getStatusIcon(notification.status)}
                    </div>
                  </li>
                ))}
              </ul>
            )}
        </div>
      </section>
    </main>
  );
};

export default Notifications;
