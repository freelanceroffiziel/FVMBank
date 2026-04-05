// api/transactionApi.js
const API_URL = import.meta.env.VITE_API_URL;

export const fetchRecentTransactions = async (userId) => {
  if (!userId) throw new Error("User ID is required");

  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/v1/recent/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (!res.ok)
    throw new Error(data.message || "Failed to fetch recent transactions");

  return data.transactions || [];
};
