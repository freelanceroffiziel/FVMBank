const API_URL = import.meta.env.VITE_API_URL;

export const transferMoney = async ({
  fromAccountType,
  toAccountNumber,
  amount,
  transactionPin,
}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/api/v1/transferMoney`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ fromAccountType, toAccountNumber, amount, transactionPin }),
  });

  const result = await res.json();

  if (!res.ok) {
    // Throw the message returned by the API
    throw new Error(result.message || "Transfer failed");
  }

  return result;
};