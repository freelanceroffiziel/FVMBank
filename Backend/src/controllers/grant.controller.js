const MailHelper = require("../utils/MailHelper");
const Grant = require("../models/grant.model");

// ================= CREATE GRANT =================
exports.createGrant = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { userId, amount } = req.body;

    if (!userId || !amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid grant data" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const reference = "GR-" + Date.now();

    const confirmationCode = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();

    const grant = await Grant.create({
      user: userId,
      amount,
      reference,
      confirmationCode,
      status: "pending",
    });

    await Notification.create({
      user: userId,
      message: `A grant of $${amount} has been assigned to you. Use your confirmation code to claim it.`,
      type: "grant",
    });

    // ✅ SEND EMAIL
    await MailHelper.sendGrantEmail(user, amount, reference, confirmationCode);

    res.status(201).json({
      message: "Grant created successfully",
      confirmationCode,
      grant,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= CONFIRM GRANT =================
exports.confirmGrant = async (req, res) => {
  try {
    const { code } = req.body;
    const userId = req.user.userId;

    if (!code) {
      return res.status(400).json({ message: "Confirmation code required" });
    }

    const grant = await Grant.findOne({
      user: userId,
      confirmationCode: code,
      status: "pending",
    });

    if (!grant) {
      return res.status(400).json({
        message: "Invalid or already used confirmation code",
      });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 💰 Add balance safely
    user.balance = Number(user.balance || 0) + Number(grant.amount);
    await user.save();

    grant.status = "claimed";
    await grant.save();

    await Notification.create({
      user: userId,
      message: `Your grant of $${grant.amount} has been successfully claimed and added to your account.`,
      type: "grant",
    });

    // ✅ OPTIONAL EMAIL (recommended)
    await MailHelper.sendDepositNotificationEmail(
      user,
      {
        accountNumber: "N/A",
        accountType: "Grant Wallet",
        balance: user.balance,
      },
      grant.amount,
    );

    res.status(200).json({
      message: "Grant claimed successfully",
      newBalance: user.balance,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= REJECT GRANT =================
exports.rejectGrant = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const { grantId } = req.params;

    const grant = await Grant.findById(grantId);
    if (!grant) {
      return res.status(404).json({ message: "Grant not found" });
    }

    if (grant.status !== "pending") {
      return res.status(400).json({
        message: "Only pending grants can be rejected",
      });
    }

    grant.status = "rejected";
    await grant.save();

    const user = await userModel.findById(grant.user);

    await Notification.create({
      user: grant.user,
      message: "Your assigned grant has been cancelled.",
      type: "grant",
    });

    // ✅ EMAIL NOTIFICATION
    if (user) {
      await MailHelper.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "❌ Grant Cancelled",
        html: MailHelper.baseTemplate(
          "Grant Cancelled",
          `<p>Hello ${MailHelper.getFullName(user)},</p>
           <p>Your assigned grant has been cancelled by the admin.</p>`,
        ),
      });
    }

    res.status(200).json({ message: "Grant rejected successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
