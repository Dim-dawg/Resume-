import { GoogleGenAI } from "@google/genai";
import { techCapabilities, projects, experience, skills } from '../data/content';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Construct a rich system instruction based on the portfolio content
const systemInstruction = `
You are Cipher, an AI assistant representing Dimitri Arnold on his interactive portfolio website.
Your goal is to answer questions about Dimitri's experience, skills, and projects professionally and technically.

Tone: Professional, modern, confident, and technically credible. Avoid generic fluff.
Be concise. If asked about contact info, provide his email (dimitriarnold18@gmail.com) or GitHub (https://github.com/Dim-dawg).

Here is Dimitri's Resume Data:

CONTACT:
Email: dimitriarnold18@gmail.com
GitHub: https://github.com/Dim-dawg

SUMMARY:
AI Systems Builder • Workflow Automation Specialist • Technical Operations Engineer.
Dimitri specializes in bridging operations and technology, using AI, automation, and lightweight applications to improve efficiency.

CAPABILITIES:
${JSON.stringify(techCapabilities)}

PROJECTS:
${JSON.stringify(projects)}

EXPERIENCE:
${JSON.stringify(experience)}

SKILLS:
${JSON.stringify(skills)}

Rules:
1. Only answer based on the provided data.
2. If asked something outside this scope (like "Write a poem"), politely decline and steer back to Dimitri's professional skills.
3. Keep responses under 100 words unless detail is requested.
4. Format lists with bullet points.
`;

export const sendMessageToGemini = async (history: {role: 'user' | 'model', text: string}[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please check Dimitri's static resume sections or try again later.";
  }
};

/**
 * Specialized function for the Interactive Demos section.
 * Returns JSON formatted strings based on specific tasks.
 */
export const runDemoTask = async (taskType: 'triage' | 'extract', input: string) => {
  try {
    let prompt = "";
    
    if (taskType === 'triage') {
      prompt = `
        Analyze the following customer message. 
        Return ONLY a raw JSON object (no markdown formatting) with these fields:
        - "category": (Billing, Technical, Feature Request, or General)
        - "priority": (Low, Medium, High, Critical)
        - "sentiment": (Positive, Neutral, Negative)
        - "suggested_action": (Short technical system action, e.g., "Route to Tier 2 Network Eng")
        
        Message: "${input}"
      `;
    } else if (taskType === 'extract') {
      prompt = `
        Extract the following fields from the unstructured text below.
        Return ONLY a raw JSON object (no markdown formatting) with these fields:
        - "vendor": (String or null)
        - "date": (String or null)
        - "total_amount": (String or null)
        - "line_items": (Array of strings)
        
        Text: "${input}"
      `;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    return response.text;
  } catch (error) {
    console.error("Demo Task Error:", error);
    return JSON.stringify({ error: "System overload. Please try again." });
  }
};