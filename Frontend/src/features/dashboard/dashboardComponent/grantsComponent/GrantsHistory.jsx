import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyGrants } from "../../../../api/grantsApi";

const GrantsHistory = () => {
  const token = localStorage.getItem("token");

  const {
    data: grants = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["grants"],
    queryFn: () => getMyGrants(token),
    enabled: !!token,
  });

  const safeGrants = Array.isArray(grants) ? grants : [];

  return (
    <main className="h-auto px-3 sm:px-6">
      <section className="bg-white rounded-2xl shadow p-4 sm:p-6 w-full">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-700">
          Your Grants
        </h2>

        {/* HEADER (hidden on small screens) */}
        <div className="hidden sm:grid grid-cols-4 font-semibold text-gray-500 border-b pb-3">
          <span>Amount</span>
          <span>Reference</span>
          <span>Status</span>
          <span>Date</span>
        </div>

        {/* LOADING */}
        {isLoading && (
          <div className="py-6 text-gray-500">Loading grants...</div>
        )}

        {/* ERROR */}
        {isError && (
          <div className="py-6 text-red-500">Failed to load grants</div>
        )}

        {/* DATA */}
        {!isLoading &&
          safeGrants.map((g) => (
            <div
              key={g._id}
              className="border-b py-4 text-gray-700"
            >
              {/* MOBILE VIEW */}
              <div className="sm:hidden flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Amount</span>
                  <span className="font-medium text-teal-900">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(g.amount)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Reference</span>
                  <span className="text-sm text-gray-600">
                    {g.reference}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Status</span>
                  <span
                    className={`font-medium capitalize ${
                      g.status === "claimed"
                        ? "text-green-600"
                        : g.status === "rejected"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {g.status}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Date</span>
                  <span className="text-sm text-gray-500">
                    {new Date(g.createdAt).toDateString()}
                  </span>
                </div>
              </div>

              {/* DESKTOP VIEW */}
              <div className="hidden sm:grid grid-cols-4 items-center">
                <span className="font-medium text-teal-900">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(g.amount)}
                </span>

                <span className="text-sm text-gray-600">
                  {g.reference}
                </span>

                <span
                  className={`font-medium capitalize ${
                    g.status === "claimed"
                      ? "text-green-600"
                      : g.status === "rejected"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {g.status}
                </span>

                <span className="text-sm text-gray-500">
                  {new Date(g.createdAt).toDateString()}
                </span>
              </div>
            </div>
          ))}

        {/* EMPTY STATE */}
        {!isLoading && safeGrants.length === 0 && (
          <div className="text-center text-gray-400 py-6">
            No grants available
          </div>
        )}
      </section>
    </main>
  );
};

export default GrantsHistory;