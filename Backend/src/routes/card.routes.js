const express = require("express");
const router = express.Router();

const {
  getUserCards,
  getCard,
  toggleCardStatus,
  requestCard,
} = require("../controllers/card.controller");

router.get("/cards/:userId", getUserCards);
router.get("/card/:cardId", getCard);
router.patch("/card/toggle/:cardId", toggleCardStatus);
router.post("/card/request", requestCard);

module.exports = router;