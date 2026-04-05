import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllActivities } from "../../../../api/historysApi";
import useAuth from "../../../../context/useAuth";
import Loader from "../../../../components/miniComponents/Loader";

const ActivityLogs = () => {
  const { loading: authLoading } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["activities"],
    queryFn: fetchAllActivities,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 15,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (authLoading) return <Loader />;

  const activities = data?.transactions || [];

  // Debug (optional)
  console.log("Activities:", activities);

  // Summary counts
  const loginCount = activities.filter(
    (a) => a.type?.toLowerCase() === "login",
  ).length;

  const transactionCount = activities.filter((a) =>
    ["deposit", "withdrawal", "transfer"].includes(a.type?.toLowerCase()),
  ).length;

  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">Activity Logs</h1>
          <p className="text-sm text-gray-500">
            Monitor all activities performed on your account
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 mb-10 md:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Total Activities</p>
            <p className="text-xl font-bold text-teal-900">
              {activities.length}
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Logins</p>
            <p className="text-xl font-bold text-green-600">{loginCount}</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Transactions</p>
            <p className="text-xl font-bold text-blue-600">
              {transactionCount}
            </p>
          </div>
        </div>

        {/* Activity Table */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Recent Activities
          </h2>

          {error && (
            <p className="text-center text-red-600 mb-4">{error.message}</p>
          )}

          {isLoading && activities.length === 0 && (
            <p className="text-center text-gray-500 mb-4">
              Loading activities...
            </p>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="text-white bg-teal-900">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Activity</th>
                  <th className="p-2 text-left">Account</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">IBAN</th>
                  <th className="p-2 text-left">SWIFT</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {activities.map((activity) => (
                  <tr key={activity._id} className="border-t">
                    <td className="p-2">
                      {new Date(activity.createdAt).toLocaleString()}
                    </td>

                    <td className="p-2">{activity.message || "N/A"}</td>

                    <td className="p-2">
                      {activity.account?.accountNumber || "N/A"}
                    </td>

                    <td className="p-2">
                      {activity.account?.accountType || "N/A"}
                    </td>

                    {/* ✅ FIXED IBAN */}
                    <td className="p-2">{activity.account?.iban || "-"}</td>

                    {/* ✅ FIXED SWIFT */}
                    <td className="p-2">
                      {activity.account?.swiftCode || "-"}
                    </td>

                    <td className="p-2">
                      {activity.amount !== undefined && activity.amount !== null
                        ? `$${Number(activity.amount).toFixed(2)}`
                        : "-"}
                    </td>

                    <td
                      className={`p-2 font-semibold ${
                        activity.status?.toLowerCase() === "failed"
                          ? "text-red-600"
                          : activity.status?.toLowerCase() === "pending"
                            ? "text-yellow-600"
                            : "text-green-600"
                      }`}
                    >
                      {activity.status || "Completed"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {activities.length === 0 && !isLoading && !error && (
              <p className="p-4 text-center text-gray-500">
                No activities yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActivityLogs;
