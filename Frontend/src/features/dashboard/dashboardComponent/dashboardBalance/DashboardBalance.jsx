import React from "react";
import { RiDice3Fill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { getAccountsByUser } from "../../../../api/accountApi";
import useAuth from "../../../../context/useAuth";

const DashboardBalance = () => {
  const { user } = useAuth();

  const { data: accounts = [], isLoading, error } = useQuery({
    queryKey: ["accounts", user?.id],
    queryFn: () => getAccountsByUser(user.id),
    enabled: !!user,
  });

  if (isLoading)
    return <p className="mt-10 text-center text-gray-600">Loading balance...</p>;

  if (error)
    return <p className="mt-10 text-center text-red-500">{error.message}</p>;

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <main className="space-y-6 ">
      <section className="flex items-center justify-between p-5 text-white shadow-lg bg-gradient-to-r from-teal-600 to-teal-400 rounded-xl">
        <div>
          <p className="text-sm opacity-80">Total Balance</p>
          <h1 className="mt-1 text-2xl font-bold lg:text-3xl">
            {totalBalance.toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </h1>
        </div>
        <div className="p-2 text-2xl rounded-lg bg-white/20">
          <RiDice3Fill />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {accounts.map((acc) => (
          <div
            key={acc._id}
            className="flex items-center justify-between p-4 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <div>
              <p className="text-sm text-gray-500 capitalize">{acc.accountType} account</p>
              <p className="text-xs text-gray-400">{acc.accountNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-teal-600">
                {acc.balance.toLocaleString("en-US", { style: "currency", currency: "USD" })}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default DashboardBalance;