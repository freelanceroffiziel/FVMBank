const API_URL = import.meta.env.VITE_API_URL;

export const getUserAccounts = async () => {
  try {
    const res = await fetch(`${API_URL}/api/v1/balance`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const result = await res.json();

    if (!res.ok) throw new Error(result.message);

    return result; 
  } catch (error) {
    throw new Error(error.message || "Failed to fetch accounts");
  }
};