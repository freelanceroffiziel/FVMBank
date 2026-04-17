const nodemailer = require("nodemailer");
require("dotenv").config();

class MailHelper {
  static url = "http://localhost:7000/send-email";
  // ================= TRANSPORT =================
  static transporter() {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAILSERVICE,
        pass: process.env.EMAILPASSWORD,
      },
    });
  }

  // ================= HELPERS =================
  static getFullName(user) {
    return `${user.firstName || ""} ${user.lastName || ""}`.trim();
  }

  static baseTemplate(title, content) {
    return `
      <div style="font-family:'Segoe UI',sans-serif;max-width:600px;margin:0 auto;background:#f4f6f8;border-radius:10px;overflow:hidden;">
        
        <!-- Header -->
        <div style="background:#008080;color:#fff;padding:20px;text-align:center;">
          <h1 style="margin:0;font-size:22px;">${title}</h1>
        </div>

        <!-- Body -->
        <div style="padding:20px;color:#333;font-size:15px;line-height:1.6;">
          ${content}
        </div>

        <!-- Footer -->
        <div style="background:#008080;color:#fff;text-align:center;padding:15px;font-size:13px;">
          <p style="margin:0;">FVM Bank • Secure & Trusted Banking</p>
        </div>

      </div>
    `;
  }

  static infoCard(inner) {
    return `
      <div style="background:#fff;padding:15px;border-radius:8px;border-left:5px solid #008080;margin:15px 0;">
        ${inner}
      </div>
    `;
  }

  static dangerText(text) {
    return `<span style="color:#d32f2f;font-weight:bold;">${text}</span>`;
  }

  // ================= OTP =================
  static async sendOtpEmail(email, otp) {
    try {
      const content = `
      <p>Hello 👋,</p>
      <p>Your One-Time Password (OTP) for verification is:</p>

      ${this.infoCard(`
        <h1 style="text-align:center;letter-spacing:6px;color:#008080;margin:0;">
          ${otp}
        </h1>
        <p style="text-align:center;margin-top:10px;">
          This code expires in <strong>10 minutes</strong>. Do not share it with anyone.
        </p>
      `)}

      <p>If you did not request this, please ignore this email.</p>
    `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: email,
        subject: "🔐 Your OTP Verification Code",
        html: this.baseTemplate("OTP Verification", content),
      });

      console.log(`📧 OTP email sent to ${email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send OTP email:", err.message);
      return false;
    }
  }

  // ================= WELCOME =================
  static async sendWelcomeEmail(user) {
    try {
      const fullName = this.getFullName(user);

      const content = `
      <p>Hello <strong>${fullName}</strong>,</p>

      <p>Welcome to <strong>FVM Bank</strong> 🎉</p>
      <p>Your account has been successfully created and verified.</p>

      ${this.infoCard(`
        <p><strong>Status:</strong> Active</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Role:</strong> ${user.role || "user"}</p>
      `)}

      <p>You can now log in and start using your dashboard.</p>
    `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "🎉 Welcome to FVM Bank",
        html: this.baseTemplate("Welcome Aboard", content),
      });

      console.log(`📧 Welcome email sent to ${user.email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send Welcome email:", err.message);
      return false;
    }
  }

  // ================= ACCOUNT CREATION =================
  static async sendAccountCreationEmail(user, account) {
    try {
      const fullName = this.getFullName(user);

      const content = `
      <p style="font-size:16px;">Hello <strong>${fullName}</strong>,</p>

      <p style="margin-top:10px;">
        🎉 Your <strong>FVM Bank account</strong> has been successfully created and is now active.
      </p>

      ${this.infoCard(`
        <p style="margin:6px 0;"><strong>🏦 Account Number:</strong> ${account.accountNumber}</p>
        <p style="margin:6px 0;"><strong>📂 Account Type:</strong> ${account.accountType}</p>
        <p style="margin:6px 0;"><strong>💰 Starting Balance:</strong> $${account.balance.toLocaleString()}</p>
      `)}

      <div style="margin-top:15px;padding:12px;background:#e6f7f7;border-radius:8px;border:1px solid #b2dfdb;">
        <p style="margin:0;color:#00695c;font-weight:600;">
          🔐 Security Tip
        </p>
        <p style="margin:5px 0 0;font-size:13px;">
          Never share your account details or OTP with anyone, including bank staff.
        </p>
      </div>

      <p style="margin-top:20px;">
        You can now log in to your dashboard to manage your account, make transfers, and view transactions.
      </p>

      <p style="margin-top:10px;">
        Welcome to <strong>FVM Bank</strong> — secure, fast, and trusted banking.
      </p>
    `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "🎉 Your FVM Bank Account is Ready",
        html: this.baseTemplate("Account Successfully Created", content),
      });

      console.log(`📧 Account creation email sent to ${user.email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send account creation email:", err.message);
      return false;
    }
  }

  // ================= DEPOSIT =================
  static async sendDepositNotificationEmail(user, account, amount) {
    try {
      const fullName = this.getFullName(user);

      const content = `
      <p>Hello <strong>${fullName}</strong>,</p>
      <p>We’ve successfully received your deposit.</p>

      ${this.infoCard(`
        <p><strong>Amount Credited:</strong> $${amount.toLocaleString()}</p>
        <p><strong>Account Number:</strong> ${account.accountNumber}</p>
        <p><strong>New Balance:</strong> $${account.balance.toLocaleString()}</p>
      `)}

      <p>Thank you for banking with FVM Bank 💙</p>
    `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "💰 Deposit Successful",
        html: this.baseTemplate("Deposit Confirmation", content),
      });

      console.log(`📧 Deposit email sent to ${user.email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send deposit email:", err.message);
      return false;
    }
  }

  // ================= TRANSFER =================
  static async sendTransferNotificationEmail(sender, receiver, amount) {
    try {
      const senderName = this.getFullName(sender.user);
      const receiverName = this.getFullName(receiver.user);

      const senderContent = `
      <p>Hello <strong>${senderName}</strong>,</p>
      <p>Your transfer was successfully completed.</p>

      ${this.infoCard(`
        <p><strong>Amount Sent:</strong> $${amount.toLocaleString()}</p>
        <p><strong>Recipient:</strong> ${receiverName}</p>
        <p><strong>Remaining Balance:</strong> $${sender.balance.toLocaleString()}</p>
      `)}

      <p>Thank you for using FVM Bank 💙</p>
    `;

      const receiverContent = `
      <p>Hello <strong>${receiverName}</strong>,</p>
      <p>You have received a new transfer.</p>

      ${this.infoCard(`
        <p><strong>Amount Received:</strong> $${amount.toLocaleString()}</p>
        <p><strong>Sender:</strong> ${senderName}</p>
        <p><strong>Available Balance:</strong> $${receiver.balance.toLocaleString()}</p>
      `)}

      <p>The funds are now available in your account.</p>
    `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: sender.user.email,
        subject: "💸 Transfer Completed",
        html: this.baseTemplate("Transfer Sent", senderContent),
      });

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: receiver.user.email,
        subject: "💰 You Received Funds",
        html: this.baseTemplate("Transfer Received", receiverContent),
      });

      console.log("📧 Transfer emails sent");
      return true;
    } catch (err) {
      console.error("❌ Failed to send transfer emails:", err.message);
      return false;
    }
  }

  // ================= GRANT =================
  static async sendGrantEmail(user, amount, reference, confirmationCode) {
    try {
      const fullName = this.getFullName(user);

      const content = `
      <p>Hello <strong>${fullName}</strong>,</p>
      <p>A new grant has been assigned to your account 🎁</p>

      ${this.infoCard(`
        <p><strong>Amount:</strong> $${amount.toLocaleString()}</p>
        <p><strong>Reference:</strong> ${reference}</p>
      `)}

      ${this.infoCard(`
        <p style="text-align:center;margin-bottom:5px;">
          <strong>Confirmation Code</strong>
        </p>
        <h2 style="text-align:center;color:#008080;letter-spacing:5px;">
          ${confirmationCode}
        </h2>
        <p style="text-align:center;">
          Use this code to activate your grant.
        </p>
      `)}
    `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "🎁 Grant Notification",
        html: this.baseTemplate("Grant Assigned", content),
      });

      console.log(`📧 Grant email sent to ${user.email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send grant email:", err.message);
      return false;
    }
  }

  // ADMIN BELOW
  static async sendAdminCreatedEmail(admin) {
    try {
      const fullName = this.getFullName(admin);

      const content = `
      <p>Hello <strong>${fullName}</strong>,</p>
      <p>Your admin account has been created successfully.</p>

      ${this.infoCard(`
        <p><strong>Email:</strong> ${admin.email}</p>
        <p><strong>Role:</strong> ${admin.role}</p>
      `)}

      <p>You can now log in to the admin dashboard.</p>
    `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: admin.email,
        subject: "🛡️ Admin Account Created",
        html: this.baseTemplate("Admin Account Created", content),
      });

      console.log(`📧 Admin creation email sent to ${admin.email}`);
      return true;
    } catch (err) {
      console.error("❌ Admin email failed:", err.message);
      return false;
    }
  }

  static async sendAdminLoginEmail(admin) {
    try {
      const fullName = this.getFullName(admin);

      const content = `
      <p>Hello <strong>${fullName}</strong>,</p>
      <p>Your admin account was just logged into.</p>

      ${this.infoCard(`
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Email:</strong> ${admin.email}</p>
      `)}
    `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: admin.email,
        subject: "🔐 Admin Login Alert",
        html: this.baseTemplate("Security Alert", content),
      });

      return true;
    } catch (err) {
      console.error("Login email failed:", err.message);
      return false;
    }
  }
}

module.exports = MailHelper;
