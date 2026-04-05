const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

class MailHelper {
  static transporter() {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAILSERVICE,
        pass: process.env.EMAILPASSWORD,
      },
    });
  }

  // Helper to get full name
  static getFullName(user) {
    return `${user.firstName || ""} ${user.lastName || ""}`.trim();
  }

  // OTP email
  static wrapOtpContent(otp) {
    return `
      <div style="font-family: 'Segoe UI', sans-serif; max-width:600px; margin:0 auto; padding:20px; background-color:#f4f6f8; color:#333;">
        <div style="background-color:#008080; color:white; padding:20px; text-align:center; border-radius:8px 8px 0 0;">
          <h1 style="margin:0; font-size:22px;">Your OTP Code</h1>
        </div>
        <div style="padding:20px; font-size:16px; color:#333;">
          <p>Your OTP code is: <strong>${otp}</strong></p>
          <p>This code will expire in 1 minute.</p>
        </div>
      </div>
    `;
  }

  static async sendOtpEmail(email, otp) {
    try {
      await this.transporter().sendMail({
        from: process.env.EMAILSERVICE,
        to: email,
        subject: "Your OTP Code",
        html: this.wrapOtpContent(otp),
      });
      console.log(`📧 OTP email sent to ${email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send OTP email:", err.message);
      return false;
    }
  }

  // Welcome email
  static wrapWelcomeContent(user) {
    const fullName = this.getFullName(user);
    return `
      <div style="font-family: 'Segoe UI', sans-serif; max-width:600px; margin:0 auto; padding:20px; background-color:#f4f6f8; color:#333;">
        <div style="background-color:#008080; color:white; padding:20px; text-align:center; border-radius:8px 8px 0 0;">
          <h1 style="margin:0; font-size:22px;">Welcome, ${fullName}!</h1>
        </div>
        <div style="padding:20px; font-size:16px; color:#333;">
          <p>Thank you for registering. We're excited to have you on board!</p>
        </div>
      </div>
    `;
  }

  static async sendWelcomeEmail(user) {
    try {
      await this.transporter().sendMail({
        from: process.env.EMAILSERVICE,
        to: user.email,
        subject: "Welcome!",
        html: this.wrapWelcomeContent(user),
      });
      console.log(`📧 Welcome email sent to ${user.email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send Welcome email:", err.message);
      return false;
    }
  }

  // Account creation email
  static wrapAccountCreationContent(user, account) {
    const fullName = this.getFullName(user);
    return `
      <div style="font-family: 'Segoe UI', sans-serif; max-width:600px; margin:0 auto; padding:20px; background-color:#f4f6f8; color:#333;">
        <div style="background-color:#008080; color:white; padding:20px; text-align:center; border-radius:8px 8px 0 0;">
          <h1 style="margin:0; font-size:22px;">🎉 New Bank Account Created!</h1>
        </div>
        <div style="padding:20px; font-size:16px; color:#333;">
          <p>Hello <strong>${fullName}</strong>,</p>
          <p>Congratulations! Your new bank account has been successfully created.</p>
          <p><strong>Account Number:</strong> ${account.accountNumber}</p>
          <p><strong>Account Type:</strong> ${account.accountType}</p>
          <p><strong>Balance:</strong> $${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <br/>
          <p>Thank you for banking with FVM Bank!</p>
        </div>
      </div>
    `;
  }

  static async sendAccountCreationEmail(user, account) {
    try {
      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "🎉 Your New Bank Account Has Been Created",
        html: this.wrapAccountCreationContent(user, account),
      });
      console.log(`📧 Account creation email sent to ${user.email}`);
      return true;
    } catch (err) {
      console.error("❌ Failed to send account creation email:", err.message);
      return false;
    }
  }

  // Deposit notification email
  static wrapDepositContent(user, account, amount) {
    const fullName = this.getFullName(user);
    const newBalance = Number(account.balance || 0);
    return `
      <div style="font-family: 'Segoe UI', sans-serif; max-width:600px; margin:0 auto; padding:20px; background-color:#f4f6f8; color:#333;">
        <div style="background-color:#008080; color:white; padding:20px; text-align:center; border-radius:8px 8px 0 0;">
          <h1 style="margin:0; font-size:22px;">💰 Deposit Successful!</h1>
        </div>
        <div style="padding:20px; font-size:16px; color:#333;">
          <p>Hello <strong>${fullName}</strong>,</p>
          <p>Your deposit of <strong>$${amount.toLocaleString()}</strong> to your <strong>${account.accountType}</strong> account was successful.</p>
          <p><strong>Account Number:</strong> ${account.accountNumber}</p>
          <p><strong>New Balance:</strong> $${newBalance.toLocaleString()}</p>
          <br/>
          <p>Thank you for banking with FVM Bank!</p>
        </div>
      </div>
    `;
  }

  static async sendDepositNotificationEmail(user, account, amount) {
    try {
      await this.transporter().sendMail({
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: user.email,
        subject: "💰 Deposit Successful",
        html: this.wrapDepositContent(user, account, amount),
      });
      console.log(`📧 Deposit notification email sent to ${user.email}`);
      return true;
    } catch (err) {
      console.error(
        "❌ Failed to send deposit notification email:",
        err.message,
      );
      return false;
    }
  }

  // Transfer notification emails
  static async sendTransferNotificationEmail(sender, receiver, amount) {
    try {
      const senderFullName = this.getFullName(sender.user);
      const receiverFullName = this.getFullName(receiver.user);
      const senderBalance = Number(sender.balance) || 0;
      const receiverBalance = Number(receiver.balance) || 0;

      const mailOptionsSender = {
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: sender.user.email,
        subject: "💸 Transfer Successful",
        html: `
          <h2>Hello ${senderFullName},</h2>
          <p>You have successfully transferred <strong>$${amount.toLocaleString()}</strong> to ${receiverFullName} (Account: ${receiver.accountNumber}).</p>
          <p>Your new balance is <strong>$${senderBalance.toLocaleString()}</strong>.</p>
          <br/>
          <p>Thank you for banking with FVM Bank!</p>
        `,
      };

      const mailOptionsReceiver = {
        from: `"FVM Bank" <${process.env.EMAILSERVICE}>`,
        to: receiver.user.email,
        subject: "💰 You’ve Received a Transfer",
        html: `
          <h2>Hello ${receiverFullName},</h2>
          <p>You have received <strong>$${amount.toLocaleString()}</strong> from ${senderFullName} (Account: ${sender.accountNumber}).</p>
          <p>Your new balance is <strong>$${receiverBalance.toLocaleString()}</strong>.</p>
          <br/>
          <p>Thank you for banking with FVM Bank!</p>
        `,
      };

      await this.transporter().sendMail(mailOptionsSender);
      await this.transporter().sendMail(mailOptionsReceiver);

      console.log(
        `📧 Transfer notification emails sent to ${sender.user.email} and ${receiver.user.email}`,
      );
      return true;
    } catch (err) {
      console.error(
        "❌ Failed to send transfer notification emails:",
        err.message,
      );
      return false;
    }
  }
}

module.exports = MailHelper;
