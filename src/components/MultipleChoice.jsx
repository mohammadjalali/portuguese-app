import { useState } from "react";

export default function MultipleChoice({ exercise, accent }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = exercise.items[idx];

  const pick = (optIdx) => {
    if (selected !== null) return;
    setSelected(optIdx);
    if (optIdx === q.correct) setScore((s) => s + 1);
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

      <p style={{
        color: "#fff",
        fontSize: "1.05rem",
        fontWeight: 600,
        marginBottom: 16,
        lineHeight: 1.5,
      }}>
        {q.question}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {q.options.map((opt, optIdx) => {
          const isCorrect = optIdx === q.correct;
          const isSelected = optIdx === selected;
          let bg = "rgba(255,255,255,0.06)";
          let border = "1px solid rgba(255,255,255,0.12)";
          if (selected !== null) {
            if (isCorrect) {
              bg = "#22863a22";
              border = "1px solid #22863a";
            } else if (isSelected) {
              bg = "#b3000022";
              border = "1px solid #ff4444";
            }
          }
          return (
            <button
              key={optIdx}
              onClick={() => pick(optIdx)}
              style={{
                background: bg,
                border,
                borderRadius: 10,
                padding: "12px 16px",
                color: "#fff",
                cursor: selected !== null ? "default" : "pointer",
                fontSize: "0.9rem",
                textAlign: "left",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                border: selected !== null && isCorrect
                  ? "2px solid #22863a"
                  : selected !== null && isSelected
                  ? "2px solid #ff4444"
                  : "2px solid rgba(255,255,255,0.3)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "0.7rem",
              }}>
                {selected !== null && isCorrect ? "✓" : selected !== null && isSelected ? "✗" : String.fromCharCode(65 + optIdx)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && q.explanation && (
        <div style={{
          marginTop: 14,
          background: "rgba(0,0,0,0.2)",
          borderRadius: 8,
          padding: "10px 14px",
          fontSize: "0.82rem",
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.5,
          borderLeft: `3px solid ${accent}`,
        }}>
          💡 {q.explanation}
        </div>
      )}

      {selected !== null && (
        <button
          onClick={next}
          style={{
            marginTop: 14,
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
      )}
    </div>
  );
}
