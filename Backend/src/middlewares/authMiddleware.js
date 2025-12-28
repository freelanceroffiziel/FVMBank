const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(400).json({
      message: `Authorization header missing`,
    });
  }

  const token = authHeader && authHeader.split(" ")[1];
  try {
    if (!token) {
      return res.status(400).json({
        message: `Token not found`,
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json({ message: "Token unsuccessfully decoded" });
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(500).json({
      message: `Internal server error`,
      error: error.message,
    });
  }
};

module.exports = authMiddleware;
