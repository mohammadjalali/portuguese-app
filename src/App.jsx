import { useState, useEffect, useRef } from "react";
import { sessions, courseInfo } from "./data/courseData";

// ─── Utility: speak a Portuguese word ───────────────────────────────────────
function speakPortuguese(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(
    (v) => v.lang.startsWith("pt") || v.name.toLowerCase().includes("portuguese")
  );
  if (ptVoice) utter.voice = ptVoice;
  utter.lang = "pt-PT";
  utter.rate = 0.85;
  utter.pitch = 1;
  window.speechSynthesis.speak(utter);
}

// ─── Category Badge ──────────────────────────────────────────────────────────
const categoryColors = {
  greetings: "#52B788",
  politeness: "#5FA8D3",
  introductions: "#C77DFF",
  basics: "#F4A261",
  pronouns: "#E76F51",
  verbs: "#E9C46A",
  questions: "#2A9D8F",
  nationalities: "#264653",
  numbers: "#6B2D8B",
  professions: "#8B3A0F",
  personal: "#1B4965",
};

function CategoryBadge({ cat }) {
  return (
    <span
      style={{
        background: categoryColors[cat] || "#555",
        color: "#fff",
        fontSize: "0.65rem",
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: 99,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {cat}
    </span>
  );
}

// ─── Pronunciation Button ────────────────────────────────────────────────────
function PronounceBtn({ text, size = 18 }) {
  const [active, setActive] = useState(false);
  const handle = () => {
    setActive(true);
    speakPortuguese(text);
    setTimeout(() => setActive(false), 800);
  };
  return (
    <button
      onClick={handle}
      title="Listen to pronunciation"
      style={{
        background: active ? "var(--accent)" : "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "#fff",
        borderRadius: 8,
        padding: "4px 10px",
        cursor: "pointer",
        fontSize: size,
        transition: "all 0.2s",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      {active ? "🔊" : "🔉"}
    </button>
  );
}

// ─── Vocabulary Card ─────────────────────────────────────────────────────────
function VocabCard({ item, accent }) {
  const [flipped, setFlipped] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const videoSearch = encodeURIComponent(
    `european portuguese "${item.word.split("/")[0].trim()}" pronunciation`
  );
  const youtubeUrl = `https://www.youtube.com/results?search_query=${videoSearch}`;

  return (
    <div style={{ perspective: 800 }}>
      <div
        style={{
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
          transform: flipped ? "rotateY(180deg)" : "none",
          height: 280,
          cursor: "pointer",
        }}
        onClick={() => setFlipped((f) => !f)}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 16,
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <CategoryBadge cat={item.category} />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>
              tap to flip
            </span>
          </div>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", lineHeight: 1.2, fontFamily: "'Playfair Display', serif", flex: 1, display: "flex", alignItems: "center" }}>
            {item.word}
          </div>
          <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
            {item.translation}
          </div>
          <div
            style={{
              background: "rgba(0,0,0,0.25)",
              borderRadius: 8,
              padding: "6px 10px",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "monospace",
            }}
          >
            /{item.ipa}/ &nbsp;·&nbsp; {item.pronunciation}
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <PronounceBtn text={item.word.split("/")[0].trim()} />
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "rgba(255,0,0,0.2)",
                border: "1px solid rgba(255,80,80,0.3)",
                color: "#ff8080",
                borderRadius: 8,
                padding: "4px 10px",
                fontSize: 13,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              ▶ YouTube
            </a>
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(135deg, ${accent}33, ${accent}11)`,
            border: `1px solid ${accent}55`,
            borderRadius: 16,
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Example
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#fff", fontStyle: "italic", lineHeight: 1.5 }}>
            "{item.example}"
          </div>
          <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>
            {item.exampleTranslation}
          </div>
          <PronounceBtn text={item.example} size={14} />
          {item.tip && (
            <div
              style={{
                marginTop: "auto",
                background: "rgba(0,0,0,0.2)",
                borderRadius: 8,
                padding: "8px 12px",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.5,
                borderLeft: `3px solid ${accent}`,
              }}
            >
              💡 {item.tip}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Grammar Box ─────────────────────────────────────────────────────────────
function GrammarBox({ grammar, accent }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${accent}44`,
        borderRadius: 16,
        padding: "24px 28px",
        marginTop: 8,
      }}
    >
      <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: accent, textTransform: "uppercase", marginBottom: 6 }}>
        Grammar Focus
      </div>
      <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 8, fontFamily: "'Playfair Display', serif" }}>
        {grammar.title}
      </div>
      <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginBottom: 20, lineHeight: 1.6 }}>
        {grammar.explanation}
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {grammar.examples.map((ex, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr auto",
              gap: 12,
              alignItems: "center",
              background: "rgba(0,0,0,0.2)",
              borderRadius: 10,
              padding: "10px 14px",
            }}
          >
            <code style={{ color: accent, fontWeight: 700, fontSize: "0.9rem" }}>{ex.pattern}</code>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontStyle: "italic", color: "#fff" }}>{ex.example}</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{ex.sound}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Quiz Component ───────────────────────────────────────────────────────────
function QuizSection({ session }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const questions = session.vocabulary.slice(0, 6).map((v) => {
    const wrong = session.vocabulary
      .filter((x) => x.word !== v.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((x) => x.translation);
    const opts = [...wrong, v.translation].sort(() => Math.random() - 0.5);
    return { question: v.word, correct: v.translation, options: opts };
  });

  const q = questions[idx];

  const pick = (opt) => {
    if (selected !== null) return;
    setSelected(opt);
    if (opt === q.correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (idx + 1 >= questions.length) setDone(true);
      else { setIdx((i) => i + 1); setSelected(null); }
    }, 1200);
  };

  const reset = () => { setIdx(0); setSelected(null); setScore(0); setDone(false); };

  if (done) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: "3rem", marginBottom: 12 }}>
          {score >= 5 ? "🏆" : score >= 3 ? "⭐" : "📚"}
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>
          {score} / {questions.length}
        </div>
        <div style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
          {score >= 5 ? "Excelente! Muito bem!" : score >= 3 ? "Bom trabalho!" : "Continue a praticar!"}
        </div>
        <button
          onClick={reset}
          style={{
            background: session.accent,
            color: "#000",
            border: "none",
            borderRadius: 10,
            padding: "10px 28px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
        <span>Question {idx + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#fff", marginBottom: 6, fontWeight: 700 }}>
        {q.question}
      </div>
      <PronounceBtn text={q.question} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
        {q.options.map((opt) => {
          const isCorrect = opt === q.correct;
          const isSelected = opt === selected;
          let bg = "rgba(255,255,255,0.07)";
          let border = "1px solid rgba(255,255,255,0.15)";
          if (selected !== null) {
            if (isCorrect) { bg = "#22863a44"; border = "1px solid #22863a"; }
            else if (isSelected) { bg = "#b3000044"; border = "1px solid #ff4444"; }
          }
          return (
            <button
              key={opt}
              onClick={() => pick(opt)}
              style={{
                background: bg, border, borderRadius: 10,
                padding: "12px 16px", color: "#fff", cursor: "pointer",
                fontSize: "0.9rem", textAlign: "left",
                transition: "all 0.2s", fontWeight: isSelected ? 700 : 400,
              }}
            >
              {isCorrect && selected !== null ? "✓ " : isSelected && selected !== null ? "✗ " : ""}{opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Session Page ─────────────────────────────────────────────────────────────
function SessionPage({ session, onBack }) {
  const [tab, setTab] = useState("vocab");
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(session.vocabulary.map((v) => v.category))];
  const filtered = filter === "all" ? session.vocabulary : session.vocabulary.filter((v) => v.category === filter);

  const tabs = [
    { id: "vocab", label: "📖 Vocabulary" },
    { id: "grammar", label: "📐 Grammar" },
    { id: "quiz", label: "🧠 Quiz" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `radial-gradient(ellipse at 20% 20%, ${session.color}55 0%, #0a0a0f 60%)`,
        "--accent": session.accent,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${session.color}cc, ${session.color}44)`,
          borderBottom: `1px solid ${session.accent}33`,
          padding: "20px 24px",
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <button
            onClick={onBack}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: 8,
              padding: "6px 14px",
              cursor: "pointer",
              fontSize: "0.85rem",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ← Back
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: "2.5rem" }}>{session.icon}</span>
            <div>
              <div style={{ fontSize: "0.75rem", color: session.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Session {session.id}
              </div>
              <h1 style={{ margin: 0, fontSize: "clamp(1.4rem, 4vw, 2rem)", fontFamily: "'Playfair Display', serif", color: "#fff" }}>
                {session.title}
              </h1>
              <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>{session.subtitle}</div>
            </div>
          </div>
          <p style={{ margin: "12px 0 16px", color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", maxWidth: 600 }}>
            {session.description}
          </p>
          {/* Topics */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {session.topics.map((t) => (
              <span
                key={t}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.8)",
                  borderRadius: 99,
                  padding: "3px 10px",
                  fontSize: "0.75rem",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, padding: "20px 0 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                background: tab === t.id ? session.accent : "transparent",
                color: tab === t.id ? "#000" : "rgba(255,255,255,0.6)",
                border: tab === t.id ? "none" : "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                padding: "8px 16px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.85rem",
                transition: "all 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "vocab" && (
          <>
            {/* Category Filter */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "16px 0" }}>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  style={{
                    background: filter === c ? "rgba(255,255,255,0.15)" : "transparent",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: filter === c ? "#fff" : "rgba(255,255,255,0.45)",
                    borderRadius: 99,
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 16,
              }}
            >
              {filtered.map((item, i) => (
                <VocabCard key={i} item={item} accent={session.accent} />
              ))}
            </div>
          </>
        )}

        {tab === "grammar" && (
          <div style={{ paddingTop: 20 }}>
            <GrammarBox grammar={session.grammar} accent={session.accent} />

            {/* YouTube grammar search */}
            <div
              style={{
                marginTop: 24,
                background: "rgba(255,0,0,0.06)",
                border: "1px solid rgba(255,80,80,0.2)",
                borderRadius: 16,
                padding: "20px 24px",
              }}
            >
              <div style={{ fontWeight: 700, color: "#ff8080", marginBottom: 8 }}>📺 Video Resources</div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: 14 }}>
                Search YouTube for native pronunciation and grammar explanations:
              </p>
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`european portuguese ${session.grammar.title} beginner`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#ff0000",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "10px 18px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                ▶ Search "{session.grammar.title}" on YouTube
              </a>
            </div>
          </div>
        )}

        {tab === "quiz" && (
          <div
            style={{
              marginTop: 20,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "24px",
            }}
          >
            <div style={{ fontWeight: 700, color: "#fff", fontSize: "1.1rem", marginBottom: 4 }}>
              🧠 Vocabulary Quiz
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginBottom: 20 }}>
              Match the Portuguese word to its English translation
            </div>
            <QuizSection session={session} />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
function HomePage({ onSelectSession }) {
  return (
    <div style={{ minHeight: "100vh", background: "#08080f", color: "#fff" }}>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          padding: "60px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Decorative */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.15,
          backgroundImage: "radial-gradient(circle at 20% 50%, #2D6A4F 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6B2D8B 0%, transparent 40%)",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "4rem", marginBottom: 16 }}>🇵🇹</div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              margin: "0 0 12px",
              fontWeight: 800,
              background: "linear-gradient(135deg, #fff 40%, #5FA8D3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Português para<br />Principiantes
          </h1>
          <div style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>
            European Portuguese · A1 Level · NOVA IMS · Spring 2026
          </div>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 99,
              padding: "6px 20px",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.5)",
              marginTop: 8,
            }}
          >
            {sessions.length} interactive sessions · Flip cards · Pronunciation · Quizzes
          </div>
        </div>
      </div>

      {/* Tip */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 20px 0" }}>
        <div
          style={{
            background: "rgba(95,168,211,0.1)",
            border: "1px solid rgba(95,168,211,0.25)",
            borderRadius: 12,
            padding: "14px 20px",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
          }}
        >
          💡 <strong style={{ color: "#5FA8D3" }}>How to use:</strong> Click a session to start. Flip vocabulary cards to see examples. Use 🔉 to hear pronunciation. Test yourself with the Quiz tab!
        </div>
      </div>

      {/* Session Cards */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 20px 60px" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.4rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: 20,
            fontWeight: 700,
          }}
        >
          Sessions
        </h2>
        <div style={{ display: "grid", gap: 16 }}>
          {sessions.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelectSession(s)}
              style={{
                background: `linear-gradient(135deg, ${s.color}22, ${s.color}08)`,
                border: `1px solid ${s.color}44`,
                borderRadius: 16,
                padding: "22px 24px",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.25s",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 16,
                alignItems: "center",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(6px)";
                e.currentTarget.style.borderColor = s.accent + "99";
                e.currentTarget.style.background = `linear-gradient(135deg, ${s.color}44, ${s.color}18)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.borderColor = s.color + "44";
                e.currentTarget.style.background = `linear-gradient(135deg, ${s.color}22, ${s.color}08)`;
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: `${s.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: s.accent,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Session {s.id}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {s.title}
                </div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                  {s.vocabulary.length} words · {s.topics.length} topics
                </div>
              </div>
              <div style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.25)", flexShrink: 0 }}>→</div>
            </button>
          ))}
        </div>

        {/* Assessment Table */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.4rem",
            color: "rgba(255,255,255,0.85)",
            marginTop: 48,
            marginBottom: 20,
            fontWeight: 700,
          }}
        >
          Assessment Overview
        </h2>
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {courseInfo.assessments.map((a, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto",
                gap: 12,
                padding: "14px 20px",
                borderBottom: i < courseInfo.assessments.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                alignItems: "center",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{a.name}</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>{a.date}</span>
              <span
                style={{
                  background: "rgba(95,168,211,0.15)",
                  color: "#5FA8D3",
                  borderRadius: 99,
                  padding: "2px 10px",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                }}
              >
                {a.weight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSession, setActiveSession] = useState(null);

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,400&display=swap";
    document.head.appendChild(link);

    // preload voices
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.addEventListener("voiceschanged", () => window.speechSynthesis.getVoices());
    }

    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Segoe UI', system-ui, sans-serif";
    document.body.style.background = "#08080f";
  }, []);

  if (activeSession) {
    return (
      <SessionPage
        session={activeSession}
        onBack={() => setActiveSession(null)}
      />
    );
  }

  return <HomePage onSelectSession={setActiveSession} />;
}
