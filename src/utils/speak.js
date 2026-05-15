let currentAudio = null;
let voicesCache = [];

function loadVoices() {
  voicesCache = window.speechSynthesis.getVoices();
}

if (window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

export function speakPortuguese(text) {
  if (!text) return;
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "pt-PT";
  utter.rate = 0.85;
  utter.pitch = 1;

  const voices = voicesCache.length ? voicesCache : window.speechSynthesis.getVoices();
  const ptVoice =
    voices.find((v) => v.lang === "pt-PT") ||
    voices.find((v) => v.lang.startsWith("pt")) ||
    voices.find((v) => v.name.toLowerCase().includes("portuguese"));
  if (ptVoice) utter.voice = ptVoice;

  window.speechSynthesis.speak(utter);
}
