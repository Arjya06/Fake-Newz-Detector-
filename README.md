# 🧪 AI Fake News Detector Web App

An AI-powered tool to analyze news articles and headlines to detect potential signs of fake news. The app provides a classification (Real, Fake, or Uncertain) along with a detailed rationale for its assessment.

---

## 🚀 Features

* **AI-Powered Analysis:** Leverages Google's Gemini model to analyze the content of news articles or headlines.
* **Clear Classification:** Categorizes news as `REAL`, `FAKE`, or `UNCERTAIN`.
* **Confidence Score:** Displays a confidence score for the given classification.
* **Detailed Reasoning:** Provides a comprehensive explanation for the AI's conclusion.
* **Key Indicators:** Highlights specific phrases or elements from the text that were influential in the analysis.
* **Responsive Design:** User-friendly interface that works on all screen sizes, with support for both light and dark modes.

---

## ⚙️ How It Works

This application is built with **React** and **TypeScript** for a modern and type-safe frontend experience. The user interface is styled using **Tailwind CSS**.

The core analysis is performed by calling the **Google Gemini API** (`gemini-2.5-flash` model). A detailed system prompt instructs the AI to act as a senior news analyst, evaluating the text based on tone, sourcing, factual claims, and common signs of misinformation. The model is configured to return a structured JSON response, ensuring consistent and reliable output.

---

## 🧰 Getting Started

### 📋 Prerequisites

* A modern web browser.
* A configured execution environment with the `API_KEY` environment variable set to your Google AI API Key.

### ▶️ Running the Application

As this is a client-side application, you can run it by serving the files with any simple HTTP server.

1. Make sure all the project files are in a single directory.
2. From within that directory, start a local server. If you have Python installed, you can run:

   ```bash
   python -m http.server
   ```

   Alternatively, if you have Node.js, you can use the `serve` package:

   ```bash
   npx serve .
   ```
3. Open your browser and navigate to the local server address (e.g., `http://localhost:8000`). The application requires the `API_KEY` to be available in its execution environment to function correctly.

---

## 📁 Project Structure

```
.
├── index.html                # Main HTML entry point
├── index.tsx                 # React application root
├── App.tsx                   # Main application component (state management)
├── metadata.json             # Project metadata
├── README.md                 # Project documentation (this file)
├── types.ts                  # TypeScript type definitions
├── components/
│   ├── Header.tsx            # Application header component
│   ├── NewsInput.tsx         # Text area for user input and analyze button
│   ├── ResultDisplay.tsx     # Displays the analysis results
│   ├── InitialStateCard.tsx  # Welcome card shown on load
│   └── Icon.tsx              # SVG icon component
└── services/
    └── geminiService.ts      # Logic for interacting with the Gemini API
```

---

## ⚠️ Disclaimer

This analysis is powered by AI and is intended for informational purposes only. It is not a guarantee of truth or falsehood. Always cross-reference information with multiple reputable sources.

---

## 👨‍💻 Author

Developed with ❤️ using React, TypeScript, and the Google Gemini API. Contributions and suggestions are welcome!
