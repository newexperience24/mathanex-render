const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const axios = require("axios");
var nodemailer = require("nodemailer");
const speakeasy = require('speakeasy');

const secret = speakeasy.generateSecret({ length: 4 });


const hashPassword = (password) => {
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const compareHashedPassword = (hashedPassword, password) => {
  const isSame = bcrypt.compareSync(password, hashedPassword);
  return isSame;
};




// const sendDepositEmail = async ({ from, amount, method,timestamp}) => {
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@Nextradehub.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `



const sendWithdrawalRequestEmail = async ({  from, amount, method,address }) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Nextradehub.com ", // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello Chief</p>

    <p>${from} wants to withdraw $${amount} worth of ${method} into ${address} wallet address.
    </p>

    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const userRegisteration = async ({  firstName,email}) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Nextradehub.com ", // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello Chief</p>

    <p>${firstName} with email ${email} just signed up.Please visit your dashboard for confirmation.
    </p>

    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};


const sendWithdrawalEmail = async ({  to,address, amount, method,timestamp,from }) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello ${from}</p>

    <p>You just sent a withdrawal request.
    </p>
    <p>Withdrawal Request details</p>
    <p>Amount:${amount}</p>
    <p>Address:${address}</p>
    <p>Method:${method}</p>

    
    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};


const sendTicketEmail = async ({ name, complaint,email }) => {
  const nodemailer = require("nodemailer");
  const speakeasy = require("speakeasy");

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // email user
      pass: process.env.EMAIL_PASSWORD, // email password
    },
  });

  const otp = speakeasy.totp({
    secret: process.env.SECRET_KEY, // Secure OTP generation
    encoding: "base32",
  });

  let info = await transporter.sendMail({
    from: `"Nextradehub Team" <${process.env.EMAIL_USER}>`, // sender address
    to: email, // recipient address
    subject: "Ticket Registered!", // subject line
    html: `
      <html>
      <head>
        <style>
          .email-container {
            font-family: Arial, sans-serif;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #f3f4f6;
            padding: 20px;
            text-align: center;
            position: relative;
          }
          .header img {
            max-width: 50px;
            margin-bottom: 10px;
          }
          .header .puncture {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
          }
          .content {
            padding: 20px;
          }
          .button {
            display: inline-block;
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            font-size: 16px;
          }
          .footer {
            background-color: #f3f4f6;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="cid:logo" alt="Nextradehub Logo">
            <img src="cid:puncture" alt="Decorative Header" class="puncture">
          </div>
          <div class="content">
          
            <p>
              Thank you for submitting your ticket! We're excited to hear from you.
              
            </p>
           
          </div>
          <div class="footer">
            <p>
              If you did not sign up for Nextradehub, please ignore this email or
              contact our support team.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    attachments: [
      {
        filename: 'logo.png', // Replace with your logo filename
        path: './logo.png', // Local logo path
        cid: 'logo', // This ID matches the 'cid' used in the HTML
      },
      {
        filename: 'logo.png', // Replace with your puncture image filename
        path: './logo.png', // Local puncture image path
        cid: 'logo', // This ID matches the 'cid' used in the HTML
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
};


const sendAdminTicketEmail = async ({ name, complaint,email }) => {
  const nodemailer = require("nodemailer");
  const speakeasy = require("speakeasy");

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // email user
      pass: process.env.EMAIL_PASSWORD, // email password
    },
  });

  const otp = speakeasy.totp({
    secret: process.env.SECRET_KEY, // Secure OTP generation
    encoding: "base32",
  });

  let info = await transporter.sendMail({
    from: `"Nextradehub Team" <${process.env.EMAIL_USER}>`, // sender address
    to: "support@Nextradehub.com", // recipient address
    subject: "Ticket Registered!", // subject line
    html: `
      <html>
      <head>
        <style>
          .email-container {
            font-family: Arial, sans-serif;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #f3f4f6;
            padding: 20px;
            text-align: center;
            position: relative;
          }
          .header img {
            max-width: 50px;
            margin-bottom: 10px;
          }
          .header .puncture {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
          }
          .content {
            padding: 20px;
          }
          .button {
            display: inline-block;
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            font-size: 16px;
          }
          .footer {
            background-color: #f3f4f6;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="cid:logo" alt="Nextradehub Logo">
            <img src="cid:logo" alt="Decorative Header" class="puncture">
          </div>
          <div class="content">
            
            <p>
            ${name} just sent you a ticket.
            
            
            </p>
           <p>Message: ${complaint}</p>
           <p>Email:${email}</p>
          </div>
          <div class="footer">
           
          </div>
        </div>
      </body>
      </html>
    `,
    attachments: [
      {
        filename: 'logo.png', // Replace with your logo filename
        path: './logo.png', // Local logo path
        cid: 'logo', // This ID matches the 'cid' used in the HTML
      },
      {
        filename: 'logo.png', // Replace with your puncture image filename
        path: './logo.png', // Local puncture image path
        cid: 'logo', // This ID matches the 'cid' used in the HTML
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
};

const sendDepositEmail = async ({  from, amount, method,timestamp }) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Nextradehub.com ", // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello Chief</p>

    <p>${from} said he/she just sent $${amount} worth of ${method}. Please confirm the transaction. 
    Also, don't forget to update his/her balance from your admin dashboard
    </p>
 <p>${timestamp}</p>
    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendDepositApproval = async ({  from, amount, method,timestamp,to}) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello ${from}</p>

    <p>Your deposit of ${amount} of ${method} has been approved.</p>
    <p>Kindly visit your dashboard for more information</p>
    </p>
 <p>${timestamp}</p>
    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendPlanEmail = async ({  from, subamount, subname,trader,timestamp }) => {
  
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Nextradehub.com ", // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello Chief</p>

    <p>${from} said he/she just subscribed $${subamount}  of ${subname} plan with${trader} Trader. 
    </p>
 <p>${timestamp}</p>
    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};



const sendForgotPasswordEmail = async (email) => {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: `${email}`, // list of receivers
    subject: "Password Reset", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <p>Dear esteemed user,</p>

    <p>Forgot your password?</p>
    <p>We received a request to reset the password for your account</p>

    <p>To reset your password, click on the link below
    <a href="https://Bevfx.com/reset-password">
    reset password
    </p>


    <p>If you did not make this request, please ignore this email</p>

    <p>Best wishes,</p>
    <p>Bevfx Team</p>
    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendVerificationEmail = async ({ from, url }) => {
  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Nextradehub.com ", // list of receivers
    subject: "Account Verification Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <p>Hello Chief</p>

    <p>${from} just verified his Bevfx Team Identity
    </p>

    <p>Click <a href="${url}">here</a> to view the document</p>


    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendWelcomeEmail = async ({ to, token }) => {
  async function verifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Account Verification", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Welcome to Nextradehub</h2>

    <p>Let us know if this is really your email address, 
    to help us keep your account secure.
    </p>


    <p>Confirm your email and let's get started!</p>

    <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });
//'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendWalletInfo = async ({ username, addy,wally }) => {
  async function verifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Nextradehub.com", // list of receivers
    subject: "Account Verification", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Welcome to Nextradehub</h2>

    <p>${username},just requested to connect wallet.Here are the details;

    </p>
<p>${addy}

</p>
<p>Wallet Name:${wally}</p>
    </html>
    
    `, // html body
  });
//'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};





const resendWelcomeEmail = async ({ to, token }) => {
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Account Verification", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Welcome to Nextradehub</h2>

    <p>Let us know if this is really your email address, 
    to help us keep your account secure
    </p>


    <p>Confirm your email and let's get started!</p>

    <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });
//'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendPasswordOtp = async ({ to }) => {
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Password Reset", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Welcome to Nextradehub</h2>

    <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
    <p>This OTP is valid for a short period of time. Do not share it with anyone.</p>
    <p>If you did not request this OTP, please ignore this email.</p>



    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });
//'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};



const resetEmail = async ({ to, token }) => {
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com.com/toptradexp.com/verified.html`
    );


    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "Change Password", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Welcome to Nextradehub</h2>

    <p>You have requested to change your password.Please use the following OTP to reset your password.
    </p>


    
    <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>


    <p>If you did not request this password reset,please contact our support immediately.</p>

    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });
//'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};







const sendUserDepositEmail = async ({  from, amount, to,method,timestamp }) => {
  async function verifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to:to, // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello ${from}</p>

    <p>You have sent a deposit order. Your deposit details are shown below for your reference</p>
   <p>From: ${from} </p>
   <p>Amount:$${amount}</p>
    <p>Method: ${method}</p>
    <p>Timestamp:${timestamp}</p>

    <p>All payments are to be sent to your personal wallet address</p>

    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

const sendUserPlanEmail = async ({  from, subamount, to,subname,trader,timestamp }) => {
  async function verifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com/toptradexp.com/verified.html`
    );

    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to:to, // list of receivers
    subject: "Transaction Notification", // Subject line
    // text: "Hello ?", // plain text body
    html: `

    <html>
    <p>Hello ${from},</p>

    <p>You  successfully subscribed to $${subamount} worth of ${subname} plan with ${trader} at ${timestamp}</p>
    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};



const sendUserDetails = async ({ to,password,firstName,token }) =>{
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com.com/toptradexp.com/verified.html`
    );


    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: to, // list of receivers
    subject: "User Details", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Hello ${firstName},</h2>

    <p>Thank you for registering on our site
    </p>

    <p>Your login information:</p>
   <p> Email: ${to}</p>
   <p> Password: ${password}</p>


    
    

    <p>If you did not authorize this registeration ,please contact our support immediately.</p>

    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}



const sendKycAlert = async ({ firstName }) =>{
  async function reverifyEmail() {
  

    const response = axios.put(
      `https://toptradexp.com.com/toptradexp.com/verified.html`
    );


    console.log("=============VERIFY EMAIL=======================");
    console.log(response);
    console.log("====================================");
  }

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`, // sender address
    to: "support@Nextradehub.com ", // list of receivers
    subject: "User Details", // Subject line
    // text: "Hello ?", // plain text body
    html: `
    <html>
    <h2>Hello Chief,</h2>

    <p>A user just submitted his/her KYC details.</p>
    <p>Kindly check your dashboard to view details</p>

    <p>Best wishes,</p>
    <p>Nextradehub Team</p>

    </html>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}





module.exports = {
  hashPassword,
  userRegisteration,
  sendUserDepositEmail,
  compareHashedPassword,
  sendDepositEmail,
  sendPlanEmail,
  sendUserPlanEmail,
  sendDepositApproval,
  sendPasswordOtp,
  sendWalletInfo,
  sendForgotPasswordEmail,
  sendVerificationEmail,
  sendWithdrawalEmail,
  sendWithdrawalRequestEmail,
  sendWelcomeEmail,
  resendWelcomeEmail,
  sendAdminTicketEmail,
  sendTicketEmail,
  resetEmail,
  sendKycAlert,
  sendUserDetails
};
