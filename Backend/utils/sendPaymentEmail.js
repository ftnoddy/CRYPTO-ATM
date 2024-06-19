import nodemailer from 'nodemailer';

const sendPaymentEmail = async (to, amount, cryptoType) => {
  const amountNumber = parseFloat(amount) || 0;
  const platformCharge = amountNumber * 0.08;
  const charge1 = amountNumber * 0.07;
  const charge2 = amountNumber * 0.06;
  const totalAmount = amountNumber + platformCharge + charge1 + charge2;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "atindramohandas353@gmail.com",
      pass: "pvmqweuhjferjjjk", // Your email password or app password from environment variables
    },
  });

  const mailOptions = {
    from: "atindramohandas353@gmail.com",
    to,
    subject: 'Payment Instructions for Your Cryptocurrency Purchase',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">Payment Instructions for Your Cryptocurrency Purchase</h2>
        <p>Thank you for your purchase of <strong>${amount} ${cryptoType}</strong>. Please complete the payment using the following bank details to finalize your purchase:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Account Holder Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Iwebgenics Private Limited</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Account Number:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">8335166144</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>ACH Routing Number:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">026073150</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Fedwire Routing Number:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">026073008</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Account Type:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Business checking account</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Bank Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Community Federal Savings Bank</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Payment Method:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">ACH or Fedwire</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Currency:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">USD Only</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Bank Address:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">810 Seventh Avenue, New York, NY 10019, US</td>
          </tr>
        </table>
        <h3 style="color: #333;">Charges</h3>
        <p>Platform Charge (8%): $${platformCharge.toFixed(2)}</p>
        <p>Charge 1 (7%): $${charge1.toFixed(2)}</p>
        <p>Charge 2 (6%): $${charge2.toFixed(2)}</p>
        <p><strong>Total Amount: $${totalAmount.toFixed(2)}</strong></p>
        <p>Once the payment is confirmed, we will send the ${cryptoType} to your wallet address.</p>
        <p>Thank you for choosing our service!</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Payment email sent successfully');
  } catch (error) {
    console.error('Error sending payment email:', error);
  }
};

export default sendPaymentEmail;
