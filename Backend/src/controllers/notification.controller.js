const Notification = require("../models/notification.model");

exports.getNotifications = async (req, res) => {
  try {
    const userId = req.user.userId;

    const notifications = await Notification.find({ user: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: `${notifications.length} notifications found`,
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notifications",
      error: error.message,
    });
  }
};

exports.markAllAsRead = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Update all unread notifications to read
    await Notification.updateMany(
      { user: userId, isRead: false },
      { isRead: true },
    );

    const notifications = await Notification.find({ user: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "All notifications marked as read",
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to mark notifications as read",
      error: error.message,
    });
  }
};

exports.clearNotifications = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Delete all notifications for the user
    await Notification.deleteMany({ user: userId });

    res.status(200).json({
      message: "All notifications cleared",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to clear notifications",
      error: error.message,
    });
  }
};
