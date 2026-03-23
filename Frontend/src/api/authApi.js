const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/api/v1/loginuser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result; 
};


export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/api/v1/createuser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), 
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result; 
};
