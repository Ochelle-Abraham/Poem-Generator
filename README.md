# Poem Generator
📜 AI Poem Generator

An interactive web application that generates themed poems using Google’s Gemini Generative AI API. Users can choose from multiple poetic themes, refresh poems on demand, and view new AI-generated content instantly.

This project showcases modern front-end development, AI API integration, and responsive UI design using React.

🚀 Features

🎭 Multiple poem themes

Love

Nature

The Future

Sorrow

🔁 Refresh button to request a new poem instantly

🧠 Powered by Google’s Gemini generative AI

✨ Live-styled poem box

🕒 Real-time live clock

⚛️ React functional component architecture

🎨 Flexible two-column layout for UX clarity

⛑ Graceful error handling

🛠️ Tech Stack

Frontend

React (Hooks: useState, useEffect)

JavaScript (ES6+)

HTML5 / CSS3

Inline custom styling

AI Integration

Google Generative AI API (@google/generative-ai)

📦 Installation
1. Clone Repository
git clone https://github.com/Ochelle-Abraham/ai-poem-generator.git
cd ai-poem-generator

2. Install dependencies
npm install

3. Add your API key

Inside the component:

const ai = new GoogleGenerativeAI("YOUR_API_KEY");


⚠️ Never commit real API keys to GitHub

(Replace this with secure storage for production)

4. Run the project
npm start


(or npm run dev for Vite)

📁 Project Structure
src/
 ├── PoemBox.jsx
 └── main.jsx

🎯 How It Works

The user selects a poem theme

That triggers a prompt mapped to that theme

The app sends the prompt through a REST API request

Gemini AI generates a themed poem

Poem is displayed instantly in the UI

🤖 REST API Usage

This application communicates with Google’s Generative AI REST API through the JS SDK.

Under the hood:

Sends POST requests with a prompt

Receives structured JSON responses

Extracts AI-generated text

Renders in UI

📌 Planned Improvements

Move API key into secure backend

Save previous poems

Share poem feature

Add more poetic styles

Animations

🏆 Purpose

This project was built to:

Learn the Google Generative AI ecosystem

Practice modern React UI design patterns

Build expressive AI-generated creative output

Demonstrate API integration skills

👤 Author

Abraham Ochelle
