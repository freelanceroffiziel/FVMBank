const isAdmin = (req, res, next) => {
  try {
    // Make sure user exists (authMiddleware must run first)
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized: No user data",
      });
    }

    // Check admin role
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied: Admins only",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = isAdmin;
