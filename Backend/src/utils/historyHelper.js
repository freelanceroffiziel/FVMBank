const History = require("../models/history.model");

/**
 * Record a user action in the history collection
 * @param {Object} params
 * @param {String} params.userId 
 * @param {String} params.accountId 
 * @param {String} params.type 
 * @param {String} params.message 
 * @param {String} params.status 
 */
const recordHistory = async ({
  userId,
  accountId,
  type,
  message,
  status = "Completed",
}) => {
  try {
    await History.create({
      user: userId,
      account: accountId,
      type,
      message,
      status,
    });
  } catch (error) {
    console.error("Failed to record history:", error.message);
  }
};

module.exports = recordHistory;