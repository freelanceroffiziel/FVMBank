const Account = require("../models/account.model"); 

const generateAccountNumber = async () => {
  let accountNumber;
  let exists = true;

  while (exists) {
    accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    const existingAccount = await Account.findOne({ accountNumber });
    if (!existingAccount) exists = false;
  }

  return accountNumber;
};

module.exports = generateAccountNumber;