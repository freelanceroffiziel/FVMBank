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
        <p>Your One-Time Password (OTP) is:</p>
        <h2 style="text-align:center;letter-spacing:3px;">${otp}</h2>
        <p>This code will expire in 1 minute.</p>
      `;

      await this.transporter().sendMail({
        from: process.env.EMAILSERVICE,
        to: email,
        subject: "Your OTP Code",
        html: this.baseTemplate("🔐 OTP Verification", content),
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
        <p>Welcome to FVM Bank! We're excited to have you onboard.</p>
      `;

      await this.transporter().sendMail({
        from: process.env.EMAILSERVICE,
        to: user.email,
        subject: "Welcome!",
        html: this.baseTemplate("🎉 Welcome!", content),
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
        <p>Hello <strong>${fullName}</strong>,</p>
        <p>Your bank account has been successfully created.</p>
        ${this.infoCard(`
          <p><strong>Account Number:</strong> ${account.accountNumber}</p>
          <p><strong>Account Type:</strong> ${account.accountType}</p>
          <p><strong>Balance:</strong> $${account.balance.toLocaleString()}</p>
        `)}
      `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "🎉 Account Created",
        html: this.baseTemplate("New Account Created", content),
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
        <p>Your deposit was successful.</p>
        ${this.infoCard(`
          <p><strong>Amount:</strong> $${amount.toLocaleString()}</p>
          <p><strong>Account:</strong> ${account.accountNumber}</p>
          <p><strong>New Balance:</strong> $${account.balance.toLocaleString()}</p>
        `)}
      `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "💰 Deposit Successful",
        html: this.baseTemplate("Deposit Successful", content),
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

      // Sender email
      const senderContent = `
        <p>Hello <strong>${senderName}</strong>,</p>
        <p>Your transfer was successful.</p>
        ${this.infoCard(`
          <p><strong>Amount:</strong> $${amount.toLocaleString()}</p>
          <p><strong>To:</strong> ${receiverName}</p>
          <p><strong>Balance:</strong> $${sender.balance.toLocaleString()}</p>
        `)}
      `;

      // Receiver email
      const receiverContent = `
        <p>Hello <strong>${receiverName}</strong>,</p>
        <p>You have received funds.</p>
        ${this.infoCard(`
          <p><strong>Amount:</strong> $${amount.toLocaleString()}</p>
          <p><strong>From:</strong> ${senderName}</p>
          <p><strong>Balance:</strong> $${receiver.balance.toLocaleString()}</p>
        `)}
      `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: sender.user.email,
        subject: "💸 Transfer Successful",
        html: this.baseTemplate("Transfer Sent", senderContent),
      });

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: receiver.user.email,
        subject: "💰 Incoming Transfer",
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
        <p>A grant has been assigned to your account.</p>

        ${this.infoCard(`
          <p><strong>Amount:</strong> $${amount.toLocaleString()}</p>
          <p><strong>Reference:</strong> ${reference}</p>
          <p><strong>Confirmation Code:</strong></p>
          <h2 style="color:#d32f2f;text-align:center;letter-spacing:2px;">
            ${confirmationCode}
          </h2>
        `)}

        <p>Use the confirmation code to claim your grant.</p>
      `;

      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "🎁 Grant Assigned",
        html: this.baseTemplate("Grant Notification", content),
      });

      console.log(`📧 Grant email sent to ${user.email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send grant email:", err.message);
      return false;
    }
  }
}

module.exports = MailHelper;
