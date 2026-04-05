const Account = require("../models/account.model");

const generateIBAN = async () => {
  let iban;
  let exists = true;

  while (exists) {
    // Example: GB + 2 check digits + 4-letter bank code + 14-digit account number
    iban = `GB${Math.floor(10 + Math.random() * 90)}FVM${Math.floor(10000000000000 + Math.random() * 8999999999999)}`;
    
    const existing = await Account.findOne({ iban });
    if (!existing) exists = false;
  }

  return iban;
};

module.exports = generateIBAN;