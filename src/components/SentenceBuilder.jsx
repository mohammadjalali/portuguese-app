import { useState } from "react";

export default function SentenceBuilder({ exercise, accent }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = exercise.items[idx];

  const pick = (word) => {
    if (selected !== null) return;
    setSelected(word);
    if (word === q.blank) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= exercise.items.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  const reset = () => {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const availableBank = q.wordBank.filter((w) => w !== selected);

  if (done) {
    const allCorrect = score === exercise.items.length;
    return (
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>
          {allCorrect ? "🏆" : score >= exercise.items.length / 2 ? "⭐" : "📚"}
        </div>
        <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>
          {score} / {exercise.items.length}
        </div>
        <div style={{ color: "rgba(255,255,255,0.55)", marginBottom: 20, fontSize: "0.85rem" }}>
          {allCorrect
            ? "Perfeito! Excellent work!"
            : score >= exercise.items.length / 2
            ? "Bom trabalho! Good job!"
            : "Continua a praticar! Keep practicing!"}
        </div>
        <button
          onClick={reset}
          style={{
            background: accent,
            color: "#000",
            border: "none",
            borderRadius: 8,
            padding: "10px 24px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: "0.85rem",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
        Question {idx + 1} of {exercise.items.length} · Score: {score}
      </div>

      {/* Sentence with blank */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.1rem",
        color: "#fff",
        marginBottom: 20,
        lineHeight: 1.8,
        background: "rgba(0,0,0,0.2)",
        borderRadius: 10,
        padding: "16px 18px",
      }}>
        {q.sentence.split("___").map((part, j, arr) => (
          <span key={j}>
            {part}
            {j < arr.length - 1 && (
              <span
                style={{
                  display: "inline-block",
                  minWidth: 60,
                  borderBottom: selected
                    ? selected === q.blank
                      ? "2px solid #22863a"
                      : "2px solid #ff4444"
                    : `2px solid ${accent}`,
                  textAlign: "center",
                  padding: "2px 8px",
                  margin: "0 4px",
                  color: selected
                    ? selected === q.blank
                      ? "#52b788"
                      : "#ff6b6b"
                    : "rgba(255,255,255,0.3)",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {selected || "?"}
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Word bank */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        {available_bank.map((word, i) => (
          <button
            key={i}
            onClick={() => pick(word)}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              borderRadius: 8,
              padding: "8px 16px",
              cursor: selected !== null ? "default" : "pointer",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.2s",
            }}
          >
            {word}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div style={{ marginTop: 8 }}>
          <div
            style={{
              fontSize: "0.85rem",
              marginBottom: 12,
              color: selected === q.blank ? "#52b788" : "#ff6b6b",
              fontWeight: 600,
            }}
          >
            {selected === q.blank
              ? "✓ Correct!"
              : `✗ Not quite. The answer is "${q.blank}".`}
          </div>
          <button
            onClick={next}
            style={{
              background: accent,
              color: "#000",
              border: "none",
              borderRadius: 8,
              padding: "10px 24px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            {idx + 1 >= exercise.items.length ? "See Results" : "Next Question →"}
          </button>
        </div>
      )}
    </div>
  );
}
