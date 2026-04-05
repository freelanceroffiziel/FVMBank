const API_URL = import.meta.env.VITE_API_URL;

export const getAccountsByUser = async (userId) => {
  if (!userId) throw new Error("User ID is required");

  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/v1/getaccountsbyuser/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch accounts");

  // Make sure it returns an array of accounts
  return data; // data should be { accounts: [...] }
};

export const getAccountByNumberOrIban = async (query) => {
  if (!query) throw new Error("IBAN or account number is required");

  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/v1/account/${query}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Recipient not found");

  // Return the account object directly
  return data.account;
};


export const createAccount = async (accountData) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/v1/createaccount`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(accountData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to create account");
  return data;
};

export const deleteAccount = async (accountNumber) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/v1/accounts/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ accountNumber }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to delete account");
  return data;
};