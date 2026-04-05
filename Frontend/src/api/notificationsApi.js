const API_URL = import.meta.env.VITE_API_URL;

export const fetchNotifications = async () => {
  const response = await fetch(`${API_URL}/api/v1/notifications`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  const data = await response.json();
  return data.notifications;
};

export const clearAllNotifications = async () => {
  const response = await fetch(`${API_URL}/api/v1/notifications/clear`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to clear notifications");
  }

  return true; // Just return true on success
};

export const markAllNotificationsAsRead = async () => {
  const response = await fetch(`${API_URL}/api/v1/notifications/mark-all-read`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to mark all notifications as read");
  }

  return true;
};