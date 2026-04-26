const Card = require("../models/card.model");


// GET all cards for a user
exports.getUserCards = async (req, res) => {
  try {
    const userId = req.params.userId;

    const cards = await Card.find({ userId });

    res.status(200).json({
      success: true,
      data: cards,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


// GET single card
exports.getCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.cardId);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }

    res.status(200).json({
      success: true,
      data: card,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


// FREEZE / UNFREEZE CARD
exports.toggleCardStatus = async (req, res) => {
  try {
    const { cardId } = req.params;

    const card = await Card.findById(cardId);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    card.status = card.status === "active" ? "frozen" : "active";

    await card.save();

    res.status(200).json({
      success: true,
      message: `Card is now ${card.status}`,
      data: card,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.requestCard = async (req, res) => {
  try {
    const { userId, accountId, cardType } = req.body;

    // verify account belongs to user
    const account = await Account.findOne({
      _id: accountId,
      user: userId,
    });

    if (!account) {
      return res.status(403).json({
        message: "Unauthorized account access",
      });
    }

    const card = await Card.create({
      user: userId,
      account: accountId,
      cardType,
      cardNumber: generateCardNumber(),
      expiry: generateExpiry(),
      cardHolder: "Auto Generated",
    });

    res.status(201).json({
      success: true,
      data: card,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// helperssss
function generateCardNumber() {
  return "**** **** **** " + Math.floor(1000 + Math.random() * 9000);
}

function generateExpiry() {
  const year = new Date().getFullYear() + 4;
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  return `${month}/${String(year).slice(2)}`;
}