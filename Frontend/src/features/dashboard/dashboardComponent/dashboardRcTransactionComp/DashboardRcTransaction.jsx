// components/dashboard/DashboardRecentTransactions.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../context/useAuth";
import { fetchRecentTransactions } from "../../../../api/transactionApi";

const DashboardRcTransactions = () => {
  const { user } = useAuth();

  const {
    data: transactions = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recentTransactions", user?.id],
    queryFn: () => fetchRecentTransactions(user.id),
    enabled: !!user,
  });

  if (isLoading)
    return (
      <p className="mt-10 text-center text-gray-600">
        Loading recent transactions...
      </p>
    );

  if (error)
    return <p className="mt-10 text-center text-red-500">{error.message}</p>;

  if (!transactions.length)
    return (
      <p className="mt-10 text-center text-gray-500">
        No recent transactions found.
      </p>
    );

  return (
    <main className="p-4 bg-white rounded-lg shadow">
      <h2 className="mb-3 text-lg font-bold text-teal-900">
        Recent Transactions
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="text-white bg-teal-900">
            <tr>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t">
                <td className="p-2">
                  {new Date(tx.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="p-2">{tx.description}</td>
                <td className="p-2">{tx.type}</td>
                <td
                  className={`p-2 ${
                    tx.type.toLowerCase() === "deposit" ||
                    tx.type.toLowerCase() === "credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {tx.amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td
                  className={`p-2 ${
                    tx.status.toLowerCase() === "completed"
                      ? "text-green-600"
                      : tx.status.toLowerCase() === "pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DashboardRcTransactions;
