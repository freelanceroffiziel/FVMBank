const { transporter } = require("../config/nodemailer");
const fs = require("fs");
const path = require("path");

exports.sendVerficationEmail = async (user, verifyurl) => {
  try {
    const emailHtmlTemplatePath = path.join(
      __dirname,
      "../utils/utils.email.html"
    );
    console.log("Template path:", emailHtmlTemplatePath);

    let htmlContent = fs.readFileSync(emailHtmlTemplatePath, "utf8");

    htmlContent = htmlContent
      .replace("{{verifyUrl}}", verifyurl)
      .replace("{{fullName}}", user.fullName);

    const sendMail = await transporter.sendMail({
      from: `FVM Bank <${process.env.EMAILSERVICE}>`,
      to: user.email,
      subject: "Verify your email",
      html: htmlContent,
    });

    console.log("✅ Email sent successfully:", sendMail);
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
  }
};

exports.sendAccountCreationEmail = async (user, account) => {
  const mailOptions = {
    from: `"FVM Bank" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "🎉 Your New Bank Account Has Been Created",
    html: `
      <h2>Hello ${user.fullName},</h2>
      <p>Congratulations! Your new bank account has been successfully created.</p>
      <p><strong>Account Number:</strong> ${account.accountNumber}</p>
      <p><strong>Account Type:</strong> ${account.accountType}</p>
      <p><strong>Initial Balance:</strong> $${account.balance.toLocaleString(
        "en-US",
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )}</p>
      <br/>
      <p>Thank you for banking with FVM Bank!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Account creation email sent to ${user.email}`);
  } catch (err) {
    console.error("❌ Failed to send account creation email:", err.message);
  }
};

exports.sendTransferNotificationEmail = async (sender, receiver, amount) => {
  try {
    // Convert balances to numbers to avoid undefined or errors on toLocaleString()
    const senderBalance = Number(sender.balance) || 0;
    const receiverBalance = Number(receiver.balance) || 0;

    const mailOptionsSender = {
      from: `"FVM Bank" <${process.env.EMAIL_USER}>`,
      to: sender.user.email,
      subject: "💸 Transfer Successful",
      html: `
        <h2>Hello ${sender.user.fullName},</h2>
        <p>You have successfully transferred <strong>$${amount.toLocaleString()}</strong> to ${
        receiver.user.fullName
      } (Account: ${receiver.accountNumber}).</p>
        <p>Your new balance is <strong>$${senderBalance.toLocaleString()}</strong>.</p>
        <br/>
        <p>Thank you for banking with FVM Bank!</p>
      `,
    };

    const mailOptionsReceiver = {
      from: `"FVM Bank" <${process.env.EMAIL_USER}>`,
      to: receiver.user.email,
      subject: "💰 You’ve Received a Transfer",
      html: `
        <h2>Hello ${receiver.user.fullName},</h2>
        <p>You have received <strong>$${amount.toLocaleString()}</strong> from ${
        sender.user.fullName
      } (Account: ${sender.accountNumber}).</p>
        <p>Your new balance is <strong>$${receiverBalance.toLocaleString()}</strong>.</p>
        <br/>
        <p>Thank you for banking with FVM Bank!</p>
      `,
    };

    await transporter.sendMail(mailOptionsSender);
    await transporter.sendMail(mailOptionsReceiver);

    console.log(`📧 Transfer notification emails sent to ${sender.user.email} and ${receiver.user.email}`);
  } catch (error) {
    console.error("❌ Failed to send transfer notification emails:", error.message);
  }
};


