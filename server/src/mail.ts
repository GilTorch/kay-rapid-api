import * as nodeMailer from "nodemailer";

export const transporter = nodeMailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "t45ge7xskbry2jqw@ethereal.email",
    pass: "9KepFdNKZz5tjUu9Qq"
  }
});

export const emailBody = body => `
    <div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size:20px;">
        <h2>Hi there</h2>
        <p>${body}</p>
        <p>Lakayou Team</p>
    </div>
`;
