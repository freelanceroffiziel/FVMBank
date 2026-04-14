const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/createuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw new Error(error.message || "Registration failed");
  }
};

export const verifyOtp = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw new Error(error.message || "OTP verification failed");
  }
};

export const resendOtp = async (email) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/resend-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw new Error(error.message || "Resend OTP failed");
  }
};

// 
export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/api/v1/loginuser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const text = await res.text(); // 🔥 IMPORTANT FIX

  let result;
  try {
    result = text ? JSON.parse(text) : {};
  } catch (err) {
    throw new Error("Server returned invalid response");
  }

  if (!res.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result;
};