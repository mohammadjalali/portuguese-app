import { useState } from "react";

export default function FillInTheBlank({ exercise, accent }) {
  const [answers, setAnswers] = useState(exercise.items.map(() => ""));
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(exercise.items.map(() => false));

  const handleChange = (i, val) => {
    if (checked) return;
    const next = [...answers];
    next[i] = val;
    setAnswers(next);
  };

  const normalize = (s) =>
    s.trim().toLowerCase().replace(/[-–—]/g, "").replace(/\s+/g, "");

  const allCorrect = () =>
    exercise.items.every(
      (item, i) => normalize(answers[i]) === normalize(item.answer)
    );

  const correctCount = () =>
    exercise.items.filter(
      (item, i) => normalize(answers[i]) === normalize(item.answer)
    ).length;

  const reset = () => {
    setAnswers(exercise.items.map(() => ""));
    setChecked(false);
    setShowHint(exercise.items.map(() => false));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: 4 }}>
        {exercise.instructions}
      </p>

      {exercise.items.map((item, i) => {
        const isCorrect = normalize(answers[i]) === normalize(item.answer);
        const isFilled = answers[i].trim().length > 0;
        return (
          <div
            key={i}
            style={{
              background: "rgba(0,0,0,0.2)",
              borderRadius: 10,
              padding: "14px 16px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                color: "#fff",
                marginBottom: 10,
                lineHeight: 1.6,
              }}
            >
              {item.sentence.split(/____+/).map((part, j, arr) => (
                <span key={j}>
                  {part}
                  {j < arr.length - 1 && (
                    <input
                      type="text"
                      value={answers[i]}
                      onChange={(e) => handleChange(i, e.target.value)}
                      disabled={checked}
                      style={{
                        border: "none",
                        borderBottom: checked
                          ? isCorrect
                            ? "2px solid #22863a"
                            : "2px solid #ff4444"
                          : isFilled
                          ? `2px solid ${accent}`
                          : "2px solid rgba(255,255,255,0.3)",
                        background: "transparent",
                        color: checked
                          ? isCorrect
                            ? "#52b788"
                            : "#ff6b6b"
                          : "#fff",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        width: "80px",
                        outline: "none",
                        textAlign: "center",
                        borderRadius: 0,
                        padding: "2px 4px",
                      }}
                    />
                  )}
                </span>
              ))}
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginLeft: 6 }}>
                ({item.hint})
              </span>
            </div>

            {checked && !isCorrect && (
              <div style={{ fontSize: "0.8rem", color: "#52b788" }}>
                Answer: <strong>{item.fullAnswer}</strong>
              </div>
            )}
            {checked && isCorrect && (
              <div style={{ fontSize: "0.8rem", color: "#52b788" }}>✓ Correct!</div>
            )}

            {!checked && (
              <button
                onClick={() => {
                  const next = [...showHint];
                  next[i] = !next[i];
                  setShowHint(next);
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  padding: 0,
                  textDecoration: "underline",
                }}
              >
                {showHint[i] ? "Hide hint" : "Show hint"}
              </button>
            )}
          </div>
        );
      })}

      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            style={{
              background: accent,
              color: "#000",
              border: "none",
              borderRadius: 8,
              padding: "10px 24px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Check Answers
          </button>
        ) : (
          <>
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, fontWeight: 700, color: allCorrect() ? "#52b788" : "#F4A261", fontSize: "1rem" }}>
              {allCorrect() ? "🎉" : correctCount() >= exercise.items.length / 2 ? "⭐" : "📚"}{" "}
              {correctCount()} / {exercise.items.length} correct
            </div>
            <button
              onClick={reset}
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8,
                padding: "10px 20px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
