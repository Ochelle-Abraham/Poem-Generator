import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const THEME_PROMPTS = {
  Love: "Write a short, heartfelt free-verse poem about love.",
  Nature: "Write a short, vivid poem about the beauty of nature.",
  "The Future": "Write a short, imaginative poem about the future.",
  Sorrow: "Write a short, emotional poem about sorrow and healing.",
};

function PoemBox() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [theme, setTheme] = useState("Love");
  const [loading, setLoading] = useState(false);

  const fetchPoem = async (selectedTheme = theme) => {
    try {
      setLoading(true);
      setError(null);

      const ai = new GoogleGenerativeAI("APIKEY"); // Insert your API key here
      const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = THEME_PROMPTS[selectedTheme] ?? THEME_PROMPTS["Love"];

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial poem
    fetchPoem();

    // Live clock only
    const clockIntervalId = setInterval(
      () => setCurrentTime(new Date()),
      1000
    );

    return () => clearInterval(clockIntervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleThemeClick = (newTheme) => {
    setTheme(newTheme);
    fetchPoem(newTheme);
  };

  const handleRefreshClick = () => {
    fetchPoem(theme);
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        margin: 0,
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        
        background:
          "linear-gradient(135deg, #1e293b 0%, #020617 40%, #0f172a 100%)",
        color: "#e5e7eb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "10px", fontSize: "2rem" }}>AI Poem Box</h1>
      <p style={{ marginBottom: "24px", opacity: 0.8, textAlign: "center" }}>
        Choose a theme on the left and see your AI poem appear on the right.
      </p>

      {/* SIDE-BY-SIDE LAYOUT WRAPPER */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* LEFT COLUMN — CONTROLS */}
        <div
          style={{
            flex: "0 0 260px",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            borderRadius: "16px",
            padding: "18px 20px",
            boxShadow: "0 16px 30px rgba(0,0,0,0.35)",
            border: "1px solid rgba(148, 163, 184, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "12px",
              fontSize: "1.1rem",
              color: "#bfdbfe",
            }}
          >
            Choose a Theme
          </h2>

          {/* Theme Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            {Object.keys(THEME_PROMPTS).map((name) => (
              <button
                key={name}
                onClick={() => handleThemeClick(name)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(148, 163, 184, 0.5)",
                  backgroundColor:
                    theme === name ? "rgba(59, 130, 246, 0.9)" : "transparent",
                  color: theme === name ? "white" : "#e5e7eb",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  transition: "all 0.15s ease-in-out",
                  flexShrink: 0,
                }}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefreshClick}
            disabled={loading}
            style={{
              marginTop: "4px",
              padding: "9px 16px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: loading
                ? "rgba(148, 163, 184, 0.6)"
                : "#22c55e",
              color: "#0f172a",
              cursor: loading ? "default" : "pointer",
              fontSize: "0.9rem",
              fontWeight: 600,
              boxShadow: "0 10px 20px rgba(34, 197, 94, 0.35)",
              transition: "transform 0.1s ease, box-shadow 0.1s ease",
            }}
          >
            {loading ? "Generating..." : "Refresh Poem"}
          </button>

          <p
            style={{
              marginTop: "10px",
              fontSize: "0.8rem",
              opacity: 0.7,
              lineHeight: 1.4,
            }}
          >
            Current theme: <strong>{theme}</strong>.  
            Click “Refresh Poem” to get a new variation.
          </p>
        </div>

        {/* RIGHT COLUMN — POEM DISPLAY */}
        <div
          style={{
            flex: "1 1 0",
            maxWidth: "650px",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              borderRadius: "16px",
              padding: "24px 28px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              border: "1px solid rgba(148, 163, 184, 0.3)",
              backdropFilter: "blur(10px)",
              whiteSpace: "pre-wrap",
              minHeight: "200px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "12px",
                fontSize: "1.25rem",
                color: "#bfdbfe",
              }}
            >
              Your {theme} Poem
            </h2>

            {error && <p style={{ color: "#fca5a5" }}>{error}</p>}
            {!error && !response && (
              <p style={{ opacity: 0.8 }}>Waiting for your first poem…</p>
            )}
            {!error && response && (
              <p
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                {response}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Clock */}
      <div
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          padding: "8px 14px",
          borderRadius: "999px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          fontSize: "0.9rem",
          border: "1px solid rgba(148, 163, 184, 0.5)",
        }}
      >
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default PoemBox;
