// ─── Human-like TTS via Google Translate ─────────────────────────────────────
// Uses the free (unofficial) Google Translate TTS endpoint.
// No API key required. Returns natural-sounding neural voices.
// Falls back to Web Speech API if the network request fails.

let currentAudio = null;

export function speakPortuguese(text) {
  if (!text) return;

  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  // Google Translate TTS endpoint — pt-PT gives European Portuguese
  const encoded = encodeURIComponent(text);
  const url = `https://translate.google.com/translate_tts?tl=pt-PT&client=tw-ob&q=${encoded}`;

  const audio = new Audio(url);
  currentAudio = audio;

  audio.onended = () => {
    currentAudio = null;
  };
  audio.onerror = () => {
    currentAudio = null;
    // Fallback to Web Speech API
    fallbackSpeak(text);
  };

  audio.play().catch(() => {
    currentAudio = null;
    fallbackSpeak(text);
  });
}

function fallbackSpeak(text) {
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
