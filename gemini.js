const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GEMINI_API_KEY;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Replace 'YOUR_API_KEY' with your actual Gemini API key

async function askGemini(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  return text;
}

module.exports = askGemini;
