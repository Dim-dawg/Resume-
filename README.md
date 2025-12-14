# Dimitri Arnold - AI Systems Portfolio

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Gemini API](https://img.shields.io/badge/AI-Google%20Gemini-orange) ![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind-38bdf8)

A professional, interactive portfolio website designed for **Dimitri Arnold**, an AI Systems Builder and Workflow Automation Specialist. 

This application is built as a **Single Page Application (SPA)** using React and TypeScript. It features a completely client-side architecture that integrates directly with the **Google Gemini API** to power "Cipher"—an embedded AI concierge that answers visitor questions with full context of Dimitri's resume and technical capabilities.

## 🚀 Key Features

*   **"Cipher" AI Concierge**: A custom-prompted AI assistant (powered by Gemini 2.5 Flash) that acts as a technical recruiter/guide. It has system-level knowledge of Dimitri's projects, skills, and contact info.
*   **Interactive System Demos**: Live, functional playgrounds where users can test automation logic (e.g., Support Ticket Triaging, Unstructured Data Extraction) in real-time.
*   **System-Oriented Design**: The UI reflects a "terminal/dashboard" aesthetic using Tailwind CSS and Lucide icons, emphasizing technical proficiency.
*   **Responsive & Performant**: Built with Vite for instant loading and mobile responsiveness.

## 🛠️ Tech Stack

*   **Frontend Framework**: React 18
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS (Custom "Slate & Sky" theme)
*   **AI Engine**: Google GenAI SDK (`@google/genai`)
*   **Icons**: Lucide React
*   **Build Tool**: Vite

## 📂 Project Structure

```
├── src/
│   ├── components/       # UI Components (Hero, About, Projects, etc.)
│   ├── data/             # Static content (Resume data, project lists)
│   ├── services/         # AI integration logic
│   ├── App.tsx           # Main application layout
│   └── main.tsx          # Entry point
├── index.html            # HTML entry
└── README.md             # Project documentation
```

## 🤖 AI Integration Details

The application uses the **Google Gemini API** (`gemini-2.5-flash`) via the client-side SDK.

*   **System Instructions**: located in `services/aiService.ts`. This file injects Dimitri's resume data (skills, projects, experience) into the model's context window.
*   **Security Note**: Since this is a client-side demo, the API key is accessed via `process.env.API_KEY`. In a production environment, this would typically be proxied through a serverless function, but for this portfolio demo, it runs directly in the browser.

## 🏁 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   A Google Cloud Project with the **Gemini API** enabled.
*   An API Key.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Dim-dawg/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory and add your API Key:
    ```env
    API_KEY=your_google_gemini_api_key_here
    ```
    *Note: The application expects `process.env.API_KEY` to be available.*

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

5.  **Build for Production**
    ```bash
    npm run build
    ```

## 📧 Contact

*   **Engineer**: Dimitri Arnold
*   **Email**: [dimitriarnold18@gmail.com](mailto:dimitriarnold18@gmail.com)
*   **GitHub**: [Dim-dawg](https://github.com/Dim-dawg)

---
*Built with ❤️ and ☕ by Dimitri Arnold.*
