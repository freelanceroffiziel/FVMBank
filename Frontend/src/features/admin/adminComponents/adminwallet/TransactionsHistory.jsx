import React, { useEffect, useState } from "react";
import useAuth from "../../../../context/useAuth";
// import notransactionsdefault from "../../../../assets/icons/images-removebg-preview.png";

const TransactionsHistory = () => {
  const { transactions, transactionsLoading, fetchTransactions, user } = useAuth();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <main className="mainCon">
      <section className="mainConSon">
        <aside className="recent-transations">
          <div className="bg-white rounded-2xl lg:px-12 lg:py-8 p-4 space-y-10 lg:h-[68vh] h-[60vh] relative overflow-hidden">
            {/* Header */}
            <div className="flex flex-row justify-between sticky top-0 bg-white z-10">
              <h2 className="text-teal-800 lg:text-[18px] text-[22px]">
                Recent Transactions
              </h2>
              <span className="bg-teal-700 hover:bg-teal-900 text-teal-50 px-4 py-1 rounded-full lg:text-[13px] text-[20px] cursor-pointer">
                See all
              </span>
            </div>

            {/* Loading State */}
            {transactionsLoading ? (
              <div className="flex flex-col justify-center items-center h-[48vh]">
                {!imageLoaded && (
                  <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
                )}
                <img
                  src={notransactionsdefault}
                  alt="Loading transactions"
                  className={`h-20 w-20 transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                <p className="text-gray-500 mt-4">Loading transactions...</p>
              </div>
            ) : (
              <div className="transactionshistodivs flex flex-col gap-4 w-full overflow-y-scroll h-[48vh] hide-scrollbar pt-4">
                {transactions.length === 0 ? (
                  <div className="flex flex-col justify-center items-center gap-6 h-full text-center">
                    <img
                      src={notransactionsdefault}
                      alt="notransactionsdefault"
                      className="h-20 w-20"
                    />
                    <span  className=" ">
                      <h4 className="lg:text-[16px] text-[18px] font-medium text-gray-700">
                        No transaction
                      </h4>
                      <p className="lg:text-[14px] text-[20px] text-gray-400 mt-1">
                        Your transaction will appear here
                      </p>
                    </span>
                  </div>
                ) : (
                  transactions.map((tx, index) => {
                    const currencyCode = tx.currency || user?.currency || "USD";
                    const formattedAmount = new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: currencyCode,
                    }).format(tx.amount || 0);

                    const date = tx.createdAt
                      ? new Date(tx.createdAt).toLocaleString()
                      : "Date unavailable";

                    const typeLabel =
                      tx.type === "fund"
                        ? "Funded"
                        : tx.type === "withdraw"
                        ? "Withdrawn"
                        : tx.type === "swap"
                        ? "Swapped"
                        : "Transaction";

                    const colorClass =
                      tx.type === "fund"
                        ? "text-green-600"
                        : tx.type === "withdraw"
                        ? "text-red-500"
                        : "text-teal-700";

                    const statusClass =
                      tx.status === "completed"
                        ? "text-teal-700"
                        : tx.status === "pending"
                        ? "text-yellow-500"
                        : tx.status === "failed"
                        ? "text-red-500"
                        : "text-gray-500";

                    const statusLabel = tx.status
                      ? tx.status.charAt(0).toUpperCase() + tx.status.slice(1)
                      : "Unknown";

                    return (
                      <div
                        key={tx._id || index}
                        className="p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
                      >
                        <div className="flex justify-between items-center">
                          <p className="text-gray-800 font-medium capitalize">
                            {tx.description || typeLabel}
                          </p>
                          <div className="flex flex-col items-end">
                            <p className={`font-semibold ${colorClass}`}>{formattedAmount}</p>
                            <p className={`text-xs font-medium ${statusClass}`}>{statusLabel}</p>
                          </div>
                        </div>

                        <div className="mt-1 text-sm text-gray-500">
                          <p>{tx.description || "No description available"}</p>
                          <p className="text-xs text-gray-400 mt-1">{date}</p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default TransactionsHistory;
