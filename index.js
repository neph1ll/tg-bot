try { require('./env.js') } catch {};

const TelegramBot = require("node-telegram-bot-api");
const askGemini = require("./gemini.js");


// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with the token you received from BotFather
const token = process.env.BOT_TOKEN;
const masterId = process.env.MASTER_ID;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Respond to /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome! How can I help you today?");
});

// Listen for any kind of message
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const geminiAnswer = await askGemini(msg.text);
  
  bot.sendMessage(chatId, geminiAnswer);
});

bot.sendMessage(masterId, 'Bot started')