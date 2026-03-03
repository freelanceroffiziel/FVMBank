import React, { useEffect, useState } from "react";
import {
  RiLoginBoxFill,
  RiShieldUserFill,
  RiLockFill,
  RiLockUnlockFill,
  RiDeleteBin6Fill,
  RiInformationFill,
} from "react-icons/ri";
import Loader from "../../../../components/miniComponents/Loader";
// import useAuth from "../../../../context/useAuth";
import defaultImg from "../../../../assets/icons/icons-careers.webp";

const API_URL = import.meta.env.VITE_API_URL;

const historyConfig = {
  LOGIN: { icon: <RiLoginBoxFill />, color: "text-teal-600", badge: "User" },
  ADMIN_LOGIN: {
    icon: <RiShieldUserFill />,
    color: "text-teal-700",
    badge: "Admin",
  },
  LOCK_USER: { icon: <RiLockFill />, color: "text-red-500", badge: "Admin" },
  UNLOCK_USER: {
    icon: <RiLockUnlockFill />,
    color: "text-teal-500",
    badge: "Admin",
  },
  DELETE_USER: {
    icon: <RiDeleteBin6Fill />,
    color: "text-red-600",
    badge: "Admin",
  },
  fund: { icon: <RiLoginBoxFill />, color: "text-teal-500", badge: "Fund" },
  withdraw: { icon: <RiLockFill />, color: "text-red-500", badge: "Withdraw" },
  swap: { icon: <RiShieldUserFill />, color: "text-yellow-500", badge: "Swap" },
};

const formatDate = (date) =>
  new Date(date).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

const HistoryLogs = () => {
  // const {history, historyLoading, historyError } = useAuth();
  // const [expandedLog, setExpandedLog] = useState(null);

  // useEffect(() => {
  //   if (!user?.token) return;
  //   if (user.role !== "admin") return;
  //   fetchHistory();
  // }, [user?.token, user?.role, fetchHistory]);

  // const toggleExpand = (id) => setExpandedLog(expandedLog === id ? null : id);

  return (
    <main className="mt-12">
      <section className="bg-white rounded-xl shadow-sm border border-teal-100 p-4">
        <h2 className="text-xl font-semibold text-teal-900 mb-4 sticky top-0 bg-white z-10">
          History Logs
        </h2>

        {/* {historyLoading && <Loader />} */}

        {/* {historyError && !historyLoading && (
          <p className="text-red-600 text-center py-10">{historyError}</p>
        )} */}

        {!historyLoading && !historyError && (
          <div className="border border-teal-100 rounded-lg overflow-hidden">
            <div className="max-h-[76vh] overflow-y-auto">
              <table className="min-w-full border-collapse">
                <thead className="bg-teal-50 text-teal-800 text-sm uppercase tracking-wide sticky top-0 z-10">
                  <tr>
                    <th className="px-4 py-3 border-b border-teal-100">Type</th>
                    <th className="px-4 py-3 border-b border-teal-100">Message</th>
                    <th className="px-4 py-3 border-b border-teal-100">Role</th>
                    <th className="px-4 py-3 border-b border-teal-100">Date</th>
                  </tr>
                </thead>

                <tbody className="text-sm text-gray-700">
                  {history.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-12 text-gray-500">
                        No history logs available.
                      </td>
                    </tr>
                  ) : (
                    history.map((log) => {
                      const config = historyConfig[log.type] || {
                        icon: <RiInformationFill />,
                        color: "text-gray-500",
                        badge: "System",
                      };

                      return (
                        <React.Fragment key={log._id}>
                          <tr
                            className="hover:bg-teal-50 transition-colors cursor-pointer"
                            onClick={() => toggleExpand(log._id)}
                          >
                            <td className="px-4 py-3 border-b border-teal-100">
                              <div className="flex items-center gap-2 font-medium">
                                <span className={`text-lg ${config.color}`}>
                                  {config.icon}
                                </span>
                                {log.type}
                              </div>
                            </td>

                            <td className="px-4 py-3 border-b border-teal-100">
                              {log.description || log.message || "-"}
                            </td>

                            <td className="px-4 py-3 border-b border-teal-100">
                              <span
                                className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${
                                  config.badge === "Admin"
                                    ? "bg-teal-700"
                                    : config.badge === "Fund"
                                    ? "bg-teal-500"
                                    : config.badge === "Withdraw"
                                    ? "bg-red-500"
                                    : config.badge === "Swap"
                                    ? "bg-yellow-500"
                                    : "bg-gray-500"
                                }`}
                              >
                                {config.badge}
                              </span>
                            </td>

                            <td className="px-4 py-3 border-b border-teal-100 text-gray-500">
                              {formatDate(log.createdAt)}
                            </td>
                          </tr>

                          {/* Expanded / Print All Section */}
                          {expandedLog === log._id && (
                            <tr>
                              <td
                                colSpan="4"
                                className="bg-teal-50 px-6 py-4 border-b border-teal-100"
                              >
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                  {Object.entries(log).map(([key, value]) => (
                                    <div key={key}>
                                      <span className="font-semibold capitalize">
                                        {key.replace(/_/g, " ")}:
                                      </span>{" "}
                                      {key === "profileImage" && value ? (
                                        <img
                                          src={`${API_URL}/api/images/${value}`}
                                          onError={(e) => (e.target.src = defaultImg)}
                                          className="w-16 h-16 rounded-full border object-cover inline-block ml-2"
                                        />
                                      ) : value === null || value === undefined ? (
                                        "—"
                                      ) : typeof value === "object" ? (
                                        JSON.stringify(value, null, 2)
                                      ) : (
                                        value.toString()
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default HistoryLogs;
