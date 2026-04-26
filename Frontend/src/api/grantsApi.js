const API_URL = import.meta.env.VITE_API_URL;

export const confirmGrant = async ({ code, token }) => {
  try {
    if (!token) {
      throw new Error("Missing authentication token");
    }

    const res = await fetch(`${API_URL}/api/v1/confirmgrant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ code }),
    });

    const text = await res.text();

    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      throw new Error("Invalid server response");
    }

    if (!res.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Grant confirmation failed");
  }
};

export const getMyGrants = async (token) => {
  const res = await fetch(`${API_URL}/api/v1/mygrants`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
};