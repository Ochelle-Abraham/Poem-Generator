# 🌟 AI Poem Generator

An elegant, AI-powered poem generator built with **React**, **Google
Gemini API**, and a clean, responsive UI. Users can choose poem themes,
generate creative poems instantly, and refresh results with a single
click.

------------------------------------------------------------------------

## 📖 Overview

The **AI Poem Generator** is a frontend application that uses Google's
Generative AI models to generate short, themed poems in real time.\
It demonstrates:

-   API integration with modern AI models\
-   Dynamic UI updates with React hooks\
-   Clean component structure\
-   Responsive styling and interactive buttons\
-   REST-based content generation

This project is ideal for showcasing your frontend logic, API handling,
and creative integration of AI.

------------------------------------------------------------------------

## ✨ Features

### 🎭 **Poem Themes**

Choose from multiple themes: - ❤️ Love\
- 🌿 Nature\
- 🔮 The Future\
- 😔 Sorrow

Each theme triggers a different style of poem based on curated prompts.

------------------------------------------------------------------------

### 🔄 **Refresh Button**

Users can regenerate a new poem within the same theme without picking a
new category.

------------------------------------------------------------------------

### 🎨 **Modern, Clean UI Layout**

-   Buttons and controls on the left\
-   Poem output displayed on the right\
-   Typography tuned for poetry readability\
-   Responsive flexbox layout

------------------------------------------------------------------------

### ⚡ **Real-Time Poem Generation**

Integrated with Google's Gemini REST API using:

``` js
ai.models.generateContent({
  model: "gemini-pro",
  prompt: "Write a poem about..."
})
```

------------------------------------------------------------------------

## 🏗️ Architecture

### **Frontend**

-   React (Vite setup recommended)
-   Hooks (`useState`, `useEffect`)
-   Custom components (`PoemBox.jsx`)
-   Clean CSS modules or global stylesheet

### **Backend / API**

No backend needed --- the app directly calls: - Google Generative AI SDK
(`@google/genai`) - Secure API key stored in `.env`

------------------------------------------------------------------------

## 📁 Project Structure

    ai-poem-generator/
    │
    ├── public/
    ├── src/
    │   ├── components/
    │   │     └── PoemBox.jsx
    │   ├── App.jsx
    │   ├── index.js
    │   └── styles.css
    │
    ├── .env
    ├── package.json
    ├── README.md
    └── vite.config.js

------------------------------------------------------------------------

## 🛠️ Installation & Setup

### 1. Clone the repository

``` bash
git clone https://github.com/yourusername/ai-poem-generator.git
cd ai-poem-generator
```

### 2. Install packages

``` bash
npm install
```

### 3. Add your Gemini API key

Create a `.env` file:

    VITE_GEMINI_API_KEY=your_key_here

### 4. Run in development

``` bash
npm run dev
```

Your app will open at:\
👉 http://localhost:5173

------------------------------------------------------------------------

## 🔌 How It Works

### 1. User selects a theme

The state updates:

``` js
setTheme("Love");
```

### 2. App constructs a thematic prompt

Example: \> "Write a heartfelt poem about love, full of imagery and
emotion."

### 3. REST request sent to Gemini

The app calls the model:

``` js
ai.models.generateContent({
  model: "gemini-pro",
  prompt: generatedPrompt
});
```

### 4. Response is parsed and displayed

The poem is rendered inside the styled output container.

### 5. Refresh button reuses the same theme

``` js
fetchPoem(themePrompt);
```

------------------------------------------------------------------------

## 💡 REST Usage Details

The project demonstrates REST API usage by: - Sending POST requests to
Google's generative endpoint\
- Handling async/await responses\
- Processing structured JSON output\
- Surface-level error handling via try/catch blocks

It also shows how frontend-only apps can securely call AI APIs using
environment variables + Vite.

------------------------------------------------------------------------

## 🎯 Learning Outcomes

This project helps develop: - API integration skills\
- How to work with AI/LLM-based systems\
- UI/UX layout skills\
- React state management\
- Prompt engineering fundamentals

------------------------------------------------------------------------

## 📸 Screenshots (Optional)

You can place screenshots in:

    /screenshots

------------------------------------------------------------------------

## 🚀 Future Improvements

-   Add more themes (Motivation, Dreams, Friendship, Adventure)\
-   Add text-to-speech for poems\
-   Save poem history to local storage\
-   Dark mode toggle\
-   Allow users to download poems as a text file\
-   Add animations (fade-in poem, glowing buttons, etc.)

------------------------------------------------------------------------

## 👤 Author

Created by **Abraham Ochelle**, a software engineer aspiring to build
tools at the intersection of creativity and AI.\
Projects like this demonstrate skills in: - Frontend engineering\
- AI integration\
- Clean UI development\
- REST API design\
- Creative project building

------------------------------------------------------------------------

## 📜 License

This project is open for personal and academic use.\
Feel free to modify, contribute, or expand it!

------------------------------------------------------------------------
