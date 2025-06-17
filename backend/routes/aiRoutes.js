const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });

const generateGeminiResponse = async (prompt) => {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};

// Route: Chat
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const prompt = `You are an assistant for a beach clean-up platform. Reply in meduim and simple sentences. Do not use line breaks, bullet points, asterisks, or any formatting. Return your answer as a single plain sentence or paragraph. ${message}`;

    const reply = await generateGeminiResponse(prompt);
    res.json({ response: reply });
  } catch (error) {
    console.error("Gemini Chat Error:", error.message);
    res.status(500).json({ error: "Chat error" });
  }
});

// Route: Generate Report / Certificate / Social Post
router.post("/generate", async (req, res) => {
  const { type, context } = req.body;

  let prompt = "";
  if (type === "report") {
    prompt = `Generate a clean-up event report from the following data:\n${context}`;
  } else if (type === "certificate") {
    prompt = `Create a thank-you certificate text for a volunteer named ${context.name} who collected ${context.waste}kg of waste.`;
  } else if (type === "social_post") {
    prompt = `Write a short social media post about a successful clean-up event:\n${context}`;
  }

  try {
    const result = await generateGeminiResponse(prompt);
    res.json({ result });
  } catch (error) {
    console.error("Generate Error:", error.message);
    res.status(500).json({ error: "Generate error" });
  }
});

// Route: Generate Quiz
router.post("/generate-quiz", async (req, res) => {
  const { topic, level = "beginner" } = req.body;

  const prompt = `
Generate a ${level}-level quiz on the topic "${topic}" related to environmental sustainability.
Provide 3 multiple-choice questions with 4 options each and mark the correct answer.
Return only valid JSON array in the format:
[
  {
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "answer": "A"
  }
]
`;

  try {
    let response = await generateGeminiResponse(prompt);

    // Remove Markdown code block if present
    if (response.includes("```")) {
      response = response.replace(/```(?:json)?/g, "").trim();
    }

    const quiz = JSON.parse(response);
    res.json({ quiz });
  } catch (error) {
    console.error("Quiz Generation Error:", error.message);
    res.status(500).send("Error generating quiz");
  }
});


// Route: Smart Tips
router.post("/smart-tips", async (req, res) => {
  const { weather, wasteTypes, location, date } = req.body;

  const prompt = `
Based on the weather: "${weather}", location: "${location}", date: "${date}", and expected waste types: (${wasteTypes.join(", ")})),
provide guidance for clean-up drive volunteers, including:
- Safety precautions
- Efficient waste collection techniques
- Segregation tips`;

  try {
    const tips = await generateGeminiResponse(prompt);
    res.json({ tips });
  } catch (error) {
    console.error("Tips Generation Error:", error.message);
    res.status(500).send("Error generating tips");
  }
});

// Route: Monthly Report
router.post("/monthly-report", async (req, res) => {
  const { name, stats, highlights } = req.body;

  const prompt = `
Create a personalized monthly report for volunteer "${name}" using this data:
Stats: ${JSON.stringify(stats)}
Highlights: ${JSON.stringify(highlights)}

Structure:
- Introduction
- Achievements (waste collected, events attended, modules completed)
- Impact Summary
- Motivational note for the next month

Tone: Engaging and storytelling, suitable for social media.`;

  try {
    const report = await generateGeminiResponse(prompt);
    res.json({ report });
  } catch (error) {
    console.error("Monthly Report Generation Error:", error.message);
    res.status(500).send("Error generating monthly report");
  }
});

module.exports = router;