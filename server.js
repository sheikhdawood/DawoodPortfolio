const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { google } = require("googleapis");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Load OAuth2 credentials
const CREDENTIALS_PATH = path.join(__dirname, "credentials.json");
const TOKEN_PATH = path.join(__dirname, "token.json");

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

async function authorize() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf-8"));
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Load token if exists
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  } else {
    throw new Error("Run the OAuth setup first to get token.json!");
  }
}

function makeEmail(to, subject, message, from) {
  const emailLines = [];
  emailLines.push(`To: ${to}`);
  emailLines.push(`From: ${from}`);
  emailLines.push(`Subject: ${subject}`);
  emailLines.push("");
  emailLines.push(message);

  const email = emailLines.join("\n");
  return Buffer.from(email).toString("base64").replace(/\+/g, "-").replace(/\//g, "_");
}

app.post("/send", async (req, res) => {
  try {
    const { user_name, user_email, message } = req.body;
    const auth = await authorize();
    const gmail = google.gmail({ version: "v1", auth });

    const raw = makeEmail(
      "your_email@gmail.com", // <-- Replace with your email
      `New message from ${user_name}`,
      `From: ${user_email}\n\n${message}`,
      "me"
    );

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw },
    });

    res.json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Failed to send email", error: error.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
