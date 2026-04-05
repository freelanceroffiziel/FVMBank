const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllActivities = async () => {
  const token = localStorage.getItem("token"); // if your backend uses JWT
  const res = await fetch(`${API_URL}/api/v1/getAllHistorys`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch activities");

  return data; 
};

export const fetchActivitiesByAccount = async (accountId) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/history/account/${accountId}`, {
      credentials: "include",
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Failed to fetch activities");

    return data.history;
  } catch (error) {
    throw new Error(error.message || "Fetch account activities failed");
  }
};
