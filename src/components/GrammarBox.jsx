import { useState } from "react";
import FillInTheBlank from "./FillInTheBlank";
import MultipleChoice from "./MultipleChoice";
import SentenceBuilder from "./SentenceBuilder";
import { speakPortuguese } from "../utils/speak";

function PronounceBtn({ text, size = 18 }) {
  const [active, setActive] = useState(false);
  const handle = () => {
    setActive(true);
    speakPortuguese(text);
    // Approximate duration — Google TTS doesn't expose ended event easily
    // so we estimate based on text length
    const estimatedMs = Math.max(800, text.length * 120);
    setTimeout(() => setActive(false), estimatedMs);
  };
  return (
    <button
      onClick={handle}
      title="Listen to pronunciation"
      style={{
        background: active ? "var(--accent)" : "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "#fff",
        borderRadius: 6,
        padding: "3px 8px",
        cursor: "pointer",
        fontSize: size,
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      {active ? "🔊" : "🔉"}
    </button>
  );
}

function SectionHeading({ children, accent }) {
  return (
    <h3
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.15rem",
        color: "#fff",
        fontWeight: 700,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span
        style={{
          width: 4,
          height: 20,
          background: accent,
          borderRadius: 2,
          flexShrink: 0,
        }}
      />
      {children}
    </h3>
  );
}

function ExplanationSection({ section, accent }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: "18px 20px",
      }}
    >
      <SectionHeading accent={accent}>{section.heading}</SectionHeading>
      <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7, fontSize: "0.9rem" }}>
        {section.body}
      </p>
    </div>
  );
}

function TableSection({ section, accent }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid",
        borderColor: accent + "33",
        borderRadius: 12,
        padding: "18px 20px",
        overflowX: "auto",
      }}
    >
      <SectionHeading accent={accent}>{section.heading}</SectionHeading>
      {section.caption && (
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", marginBottom: 12 }}>
          {section.caption}
        </p>
      )}
      <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${section.columns.length}, minmax(100px, 1fr))`,
            background: accent + "22",
          }}
        >
          {section.columns.map((col, i) => (
            <div
              key={i}
              style={{
                padding: "10px 12px",
                fontWeight: 700,
                color: accent,
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                borderRight: i < section.columns.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              {col}
            </div>
          ))}
        </div>
        {/* Rows */}
        {section.rows.map((row, ri) => (
          <div
            key={ri}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${section.columns.length}, minmax(100px, 1fr))`,
              background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {row.map((cell, ci) => (
              <div
                key={ci}
                style={{
                  padding: "9px 12px",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontFamily: ci === 0 ? "'Playfair Display', serif" : "inherit",
                  fontWeight: ci === 0 ? 600 : 400,
                  borderRight: ci < row.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  lineHeight: 1.4,
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExamplesSection({ section, accent }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid",
        borderColor: accent + "33",
        borderRadius: 12,
        padding: "18px 20px",
      }}
    >
      <SectionHeading accent={accent}>{section.heading}</SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {section.items.map((item, i) => (
          <div
            key={i}
            style={{
              background: "rgba(0,0,0,0.2)",
              borderRadius: 10,
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                  color: "#fff",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {item.portuguese.split(new RegExp(`(${item.highlight.join("|")})`, "gi")).map((part, j) =>
                  item.highlight.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
                    <span key={j} style={{ color: accent, fontWeight: 700, background: accent + "22", borderRadius: 3, padding: "0 3px" }}>
                      {part}
                    </span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </div>
              <PronounceBtn text={item.portuguese} size={14} />
            </div>
            <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>
              {item.translation}
            </div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
              {item.pronunciation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TipsSection({ section, accent }) {
  return (
    <div
      style={{
        background: accent + "0a",
        border: "1px solid",
        borderColor: accent + "22",
        borderRadius: 12,
        padding: "18px 20px",
      }}
    >
      <SectionHeading accent={accent}>{section.heading}</SectionHeading>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
        {section.items.map((tip, i) => (
          <li
            key={i}
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              paddingLeft: 24,
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 2,
                color: accent,
                fontSize: "0.9rem",
              }}
            >
              💡
            </span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PronunciationSection({ section, accent }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid",
        borderColor: accent + "33",
        borderRadius: 12,
        padding: "18px 20px",
      }}
    >
      <SectionHeading accent={accent}>{section.heading}</SectionHeading>
      {section.description && (
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: 14 }}>
          {section.description}
        </p>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "8px 12px", alignItems: "center" }}>
        {section.pairs.map((pair, i) => (
          <div key={i} style={{ display: "contents" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
              }}
            >
              {pair.oral}
            </div>
            <div style={{ color: accent, fontSize: "1.2rem", textAlign: "center" }}>⇔</div>
            <div
              style={{
                background: accent + "11",
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: "0.85rem",
                color: "#fff",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              {pair.nasal}
            </div>
            {i < section.pairs.length - 1 && (
              <div style={{ gridColumn: "1 / -1", height: 1, background: "rgba(255,255,255,0.06)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExerciseRenderer({ exercise, accent }) {
  switch (exercise.type) {
    case "fill-in-blank":
      return <FillInTheBlank exercise={exercise} accent={accent} />;
    case "multiple-choice":
      return <MultipleChoice exercise={exercise} accent={accent} />;
    case "sentence-builder":
      return <SentenceBuilder exercise={exercise} accent={accent} />;
    default:
      return null;
  }
}

export default function GrammarBox({ grammar, accent }) {
  const [showExercises, setShowExercises] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Title */}
      <div>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: accent,
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Grammar Focus
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          {grammar.title}
        </h2>
      </div>

      {/* Content sections */}
      {grammar.sections.map((section, i) => {
        switch (section.type) {
          case "explanation":
            return <ExplanationSection key={i} section={section} accent={accent} />;
          case "table":
            return <TableSection key={i} section={section} accent={accent} />;
          case "examples":
            return <ExamplesSection key={i} section={section} accent={accent} />;
          case "tips":
            return <TipsSection key={i} section={section} accent={accent} />;
          case "pronunciation":
            return <PronunciationSection key={i} section={section} accent={accent} />;
          default:
            return null;
        }
      })}

      {/* Exercises toggle */}
      {grammar.exercises && grammar.exercises.length > 0 && (
        <div>
          <button
            onClick={() => setShowExercises((s) => !s)}
            style={{
              background: showExercises ? accent + "22" : "rgba(255,255,255,0.06)",
              border: `1px solid ${showExercises ? accent + "66" : "rgba(255,255,255,0.12)"}`,
              color: showExercises ? accent : "rgba(255,255,255,0.7)",
              borderRadius: 10,
              padding: "12px 20px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "0.9rem",
              width: "100%",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "all 0.2s",
            }}
          >
            <span>✏️ Practice Exercises ({grammar.exercises.length})</span>
            <span style={{ fontSize: "0.8rem" }}>{showExercises ? "▲ Hide" : "▼ Show"}</span>
          </button>

          {showExercises && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
              {grammar.exercises.map((exercise, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(0,0,0,0.15)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "18px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: accent,
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Exercise {i + 1}
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 12,
                    }}
                  >
                    {exercise.title}
                  </div>
                  <ExerciseRenderer exercise={exercise} accent={accent} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
