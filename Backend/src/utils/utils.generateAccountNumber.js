const User = require("../models/user.model");

const generateAccountNumber = async () => {
  let accountNumber;
  let exists = true;

  while (exists) {
    accountNumber = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
    const existingUser = await User.findOne({ accountNumber });
    if (!existingUser) exists = false;
  }

  return accountNumber;
};

module.exports = generateAccountNumber;
