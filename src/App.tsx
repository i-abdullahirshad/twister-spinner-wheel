import { useState, useEffect, useRef, useCallback } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Volume2, VolumeX, Mic, MicOff, Maximize, Zap, Clock, X, Loader2, Copy, Shuffle, RotateCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import NotFound from "@/pages/not-found";

// --- Language imports (all loaded statically for instant switching) ---
import enLang from "./lang/en.json";
import arLang from "./lang/ar.json";
import urLang from "./lang/ur.json";
import esLang from "./lang/es.json";
import frLang from "./lang/fr.json";
import deLang from "./lang/de.json";
import ptLang from "./lang/pt.json";
import ruLang from "./lang/ru.json";
import hiLang from "./lang/hi.json";
import bnLang from "./lang/bn.json";
import trLang from "./lang/tr.json";
import idLang from "./lang/id.json";
import msLang from "./lang/ms.json";
import itLang from "./lang/it.json";
import nlLang from "./lang/nl.json";
import plLang from "./lang/pl.json";
import svLang from "./lang/sv.json";
import viLang from "./lang/vi.json";
import jaLang from "./lang/ja.json";
import koLang from "./lang/ko.json";
import zhCnLang from "./lang/zh-cn.json";
import zhTwLang from "./lang/zh-tw.json";

// --- Language registry: add new languages here ---
const LANGUAGES: Record<string, { label: string; translations: Record<string, string>; rtl?: boolean }> = {
  en:    { label: "English",    translations: enLang as Record<string, string> },
  ar:    { label: "العربية",    translations: arLang as Record<string, string>, rtl: true },
  ur:    { label: "اردو",       translations: urLang as Record<string, string>, rtl: true },
  es:    { label: "Español",    translations: esLang as Record<string, string> },
  fr:    { label: "Français",   translations: frLang as Record<string, string> },
  de:    { label: "Deutsch",    translations: deLang as Record<string, string> },
  pt:    { label: "Português",  translations: ptLang as Record<string, string> },
  ru:    { label: "Русский",    translations: ruLang as Record<string, string> },
  hi:    { label: "हिन्दी",      translations: hiLang as Record<string, string> },
  bn:    { label: "বাংলা",      translations: bnLang as Record<string, string> },
  tr:    { label: "Türkçe",     translations: trLang as Record<string, string> },
  id:    { label: "Indonesia",  translations: idLang as Record<string, string> },
  ms:    { label: "Melayu",     translations: msLang as Record<string, string> },
  it:    { label: "Italiano",   translations: itLang as Record<string, string> },
  nl:    { label: "Nederlands", translations: nlLang as Record<string, string> },
  pl:    { label: "Polski",     translations: plLang as Record<string, string> },
  sv:    { label: "Svenska",    translations: svLang as Record<string, string> },
  vi:    { label: "Tiếng Việt", translations: viLang as Record<string, string> },
  ja:    { label: "日本語",      translations: jaLang as Record<string, string> },
  ko:    { label: "한국어",      translations: koLang as Record<string, string> },
  "zh-cn": { label: "简体中文",  translations: zhCnLang as Record<string, string> },
  "zh-tw": { label: "繁體中文",  translations: zhTwLang as Record<string, string> },
};

// --- Base segment definitions (with translation keys) ---
// Color mapping: partKey + colorKey determine what's shown on wheel
const BASE_SEGMENTS = [
  { id: 1,  partKey: "left_hand",  colorKey: "red",    hex: "#E8192C", gradDark: "#C62828", gradLight: "#EF5350" },
  { id: 2,  partKey: "right_hand", colorKey: "red",    hex: "#E8192C", gradDark: "#C62828", gradLight: "#EF5350" },
  { id: 3,  partKey: "left_foot",  colorKey: "red",    hex: "#E8192C", gradDark: "#C62828", gradLight: "#EF5350" },
  { id: 4,  partKey: "right_foot", colorKey: "red",    hex: "#E8192C", gradDark: "#C62828", gradLight: "#EF5350" },
  { id: 5,  partKey: "left_hand",  colorKey: "blue",   hex: "#1565C0", gradDark: "#1565C0", gradLight: "#42A5F5" },
  { id: 6,  partKey: "right_hand", colorKey: "blue",   hex: "#1565C0", gradDark: "#1565C0", gradLight: "#42A5F5" },
  { id: 7,  partKey: "left_foot",  colorKey: "blue",   hex: "#1565C0", gradDark: "#1565C0", gradLight: "#42A5F5" },
  { id: 8,  partKey: "right_foot", colorKey: "blue",   hex: "#1565C0", gradDark: "#1565C0", gradLight: "#42A5F5" },
  { id: 9,  partKey: "left_hand",  colorKey: "yellow", hex: "#FFD700", gradDark: "#F9A825", gradLight: "#FFE57F" },
  { id: 10, partKey: "right_hand", colorKey: "yellow", hex: "#FFD700", gradDark: "#F9A825", gradLight: "#FFE57F" },
  { id: 11, partKey: "left_foot",  colorKey: "yellow", hex: "#FFD700", gradDark: "#F9A825", gradLight: "#FFE57F" },
  { id: 12, partKey: "right_foot", colorKey: "yellow", hex: "#FFD700", gradDark: "#F9A825", gradLight: "#FFE57F" },
  { id: 13, partKey: "left_hand",  colorKey: "green",  hex: "#2E7D32", gradDark: "#2E7D32", gradLight: "#66BB6A" },
  { id: 14, partKey: "right_hand", colorKey: "green",  hex: "#2E7D32", gradDark: "#2E7D32", gradLight: "#66BB6A" },
  { id: 15, partKey: "left_foot",  colorKey: "green",  hex: "#2E7D32", gradDark: "#2E7D32", gradLight: "#66BB6A" },
  { id: 16, partKey: "right_foot", colorKey: "green",  hex: "#2E7D32", gradDark: "#2E7D32", gradLight: "#66BB6A" },
];

type Segment = typeof BASE_SEGMENTS[0];

// History items store keys so they work across language changes
type HistoryItem = {
  id: number;
  partKey: string;
  colorKey: string;
  colorHex: string;
  timestamp: number;
};

// --- Fisher-Yates shuffle (in-place on a copy) ---
function fisherYatesShuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// --- Load saved segment order from localStorage, or shuffle fresh ---
function loadSegmentOrder(): Segment[] {
  try {
    const saved = localStorage.getItem("twisterSegmentOrder");
    if (saved) {
      const ids: number[] = JSON.parse(saved);
      if (ids.length === 16) {
        const ordered = ids
          .map(id => BASE_SEGMENTS.find(s => s.id === id))
          .filter((s): s is Segment => Boolean(s));
        if (ordered.length === 16) return ordered;
      }
    }
  } catch (_) {}
  // Default: shuffle on first load
  return fisherYatesShuffle(BASE_SEGMENTS);
}

// --- Save segment order IDs to localStorage ---
function saveSegmentOrder(segments: Segment[]) {
  localStorage.setItem("twisterSegmentOrder", JSON.stringify(segments.map(s => s.id)));
}

// --- Web Audio synthesizer (no external files) ---
class AudioSynthesizer {
  ctx: AudioContext | null = null;
  muted = false;

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  playTick() {
    if (this.muted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (_) {}
  }

  playDing() {
    if (this.muted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 1.5);
    } catch (_) {}
  }
}

const audioSynth = new AudioSynthesizer();

// --- Confetti burst (CSS animation, no library) ---
function createConfetti() {
  const colors = ["#E8192C", "#1565C0", "#FFD700", "#2E7D32"];
  const container = document.createElement("div");
  container.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;";
  document.body.appendChild(container);
  for (let i = 0; i < 100; i++) {
    const el = document.createElement("div");
    el.style.cssText = `position:absolute;width:${Math.random() * 10 + 5}px;height:${Math.random() * 10 + 5}px;background:${colors[Math.floor(Math.random() * colors.length)]};top:50%;left:50%;opacity:1;transform:translate(-50%,-50%) rotate(${Math.random() * 360}deg);transition:all ${Math.random() + 1}s cubic-bezier(.25,.46,.45,.94);`;
    container.appendChild(el);
    setTimeout(() => {
      const angle = Math.random() * Math.PI * 2;
      const v = Math.random() * 500 + 200;
      el.style.transform = `translate(calc(-50% + ${Math.cos(angle) * v}px),calc(-50% + ${Math.sin(angle) * v + 200}px)) rotate(${Math.random() * 720}deg)`;
      el.style.opacity = "0";
    }, 10);
  }
  setTimeout(() => document.body.removeChild(container), 2000);
}

const queryClient = new QueryClient();

function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<Segment | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Active segment order (shuffled or reset)
  const [activeSegments, setActiveSegments] = useState<Segment[]>(loadSegmentOrder);
  // Keep a ref for use inside rAF callbacks (avoids stale closures)
  const activeSegmentsRef = useRef<Segment[]>(activeSegments);

  // Settings
  const [muted, setMuted] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [fastMode, setFastMode] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Theme
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Language
  const [lang, setLang] = useState(() => localStorage.getItem("twisterLang") || "en");

  // Translation helper — returns translated string or falls back to English
  const t = useCallback((key: string): string => {
    const langData = LANGUAGES[lang];
    if (langData && langData.translations[key]) return langData.translations[key];
    return enLang[key as keyof typeof enLang] || key;
  }, [lang]);

  const isRTL = LANGUAGES[lang]?.rtl ?? false;

  // Rotation state refs (used in rAF loop, never triggers re-render)
  const rotationRef = useRef(0);
  const animationRef = useRef<number>(0);
  const lastTickAngleRef = useRef(0);

  // --- Theme effect ---
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // --- Language effect: set dir, persist ---
  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    localStorage.setItem("twisterLang", lang);
  }, [lang, isRTL]);

  // --- History: load and save ---
  useEffect(() => {
    try {
      const saved = localStorage.getItem("twisterHistory");
      if (saved) setHistory(JSON.parse(saved));
    } catch (_) {}
  }, []);

  useEffect(() => {
    localStorage.setItem("twisterHistory", JSON.stringify(history));
  }, [history]);

  // --- Mute sync ---
  useEffect(() => { audioSynth.muted = muted; }, [muted]);

  // --- Keep activeSegmentsRef in sync with state ---
  useEffect(() => {
    activeSegmentsRef.current = activeSegments;
    saveSegmentOrder(activeSegments);
  }, [activeSegments]);

  // --- Shuffle: randomize segment order ---
  const handleShuffle = () => {
    if (isSpinning) return;
    setActiveSegments(fisherYatesShuffle(BASE_SEGMENTS));
    setResult(null);
  };

  // --- Reset: restore original order ---
  const handleResetOrder = () => {
    if (isSpinning) return;
    setActiveSegments([...BASE_SEGMENTS]);
    setResult(null);
  };

  // --- Draw wheel on canvas using current activeSegments and translations ---
  const drawWheel = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(cx, cy) - 10;
    const segments = activeSegmentsRef.current;
    const segAngle = (2 * Math.PI) / 16;

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotationRef.current);

    for (let i = 0; i < 16; i++) {
      const seg = segments[i];
      const startAngle = i * segAngle;
      const endAngle = startAngle + segAngle;

      // Build radial gradient for depth
      const grad = ctx.createRadialGradient(0, 0, radius * 0.1, 0, 0, radius);
      grad.addColorStop(0, seg.gradDark);
      grad.addColorStop(1, seg.gradLight);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();

      // Draw segment label (translated body part only — keeps wheel readable)
      ctx.save();
      ctx.rotate(startAngle + segAngle / 2);
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      // Yellow segments: dark text; others: white
      ctx.fillStyle = seg.colorKey === "yellow" ? "#000000" : "#ffffff";
      ctx.font = "bold 14px Inter, sans-serif";
      // Translate only the body part (fitting on the segment)
      const partLabel = enLang[seg.partKey as keyof typeof enLang] || seg.partKey;
      ctx.fillText(partLabel, radius - 18, 0);
      ctx.restore();
    }

    // Draw center hub (will be overlaid with SPIN button)
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.13, 0, 2 * Math.PI);
    ctx.fillStyle = "#111";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#fff";
    ctx.stroke();

    ctx.restore();
  }, []);

  // Redraw whenever activeSegments change
  useEffect(() => {
    drawWheel();
  }, [drawWheel, activeSegments]);

  // --- Spin logic ---
  const spin = () => {
    if (isSpinning) return;
    audioSynth.init();

    setIsSpinning(true);
    setResult(null);

    const segments = activeSegmentsRef.current;
    // Pick random target segment index (0–15)
    const targetIndex = Math.floor(Math.random() * 16);
    const targetSegment = segments[targetIndex];

    const segAngle = (2 * Math.PI) / 16;
    // Calculate the rotation so targetIndex lands at the top pointer (270° = 3π/2 in canvas coords)
    const segCenterAngle = targetIndex * segAngle + segAngle / 2;
    const topAngle = (3 * Math.PI) / 2;
    let targetRotation = topAngle - segCenterAngle;

    // Add extra full spins for realism
    const extraSpins = fastMode ? 3 : 8;
    targetRotation += extraSpins * 2 * Math.PI;

    // Normalize current rotation to [0, 2π), then ensure we spin forward
    rotationRef.current = rotationRef.current % (2 * Math.PI);
    while (targetRotation <= rotationRef.current) {
      targetRotation += 2 * Math.PI;
    }

    const duration = fastMode ? 2000 : 4000;
    const startRotation = rotationRef.current;
    const startTime = performance.now();
    lastTickAngleRef.current = startRotation;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease-out cubic for natural slow-down
      const ease = 1 - Math.pow(1 - progress, 3);
      rotationRef.current = startRotation + (targetRotation - startRotation) * ease;

      // Play tick sound each ~segment
      if (rotationRef.current - lastTickAngleRef.current >= segAngle) {
        audioSynth.playTick();
        lastTickAngleRef.current = rotationRef.current;
      }

      drawWheel();

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Spin complete
        setIsSpinning(false);
        setResult(targetSegment);
        audioSynth.playDing();
        createConfetti();

        // Voice announcement in current language
        if (voiceOn && "speechSynthesis" in window) {
          const partText = t(targetSegment.partKey);
          const colorText = t(targetSegment.colorKey);
          const utterance = new SpeechSynthesisUtterance(`${partText} ${colorText}`);
          utterance.rate = 1.1;
          window.speechSynthesis.speak(utterance);
        }

        // Add to history (store keys so display adapts to language changes)
        setHistory(prev =>
          [{ id: Date.now(), partKey: targetSegment.partKey, colorKey: targetSegment.colorKey, colorHex: targetSegment.hex, timestamp: Date.now() }, ...prev].slice(0, 5)
        );
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const copyResult = () => {
    if (!result) return;
    const text = `${t(result.partKey)} - ${t(result.colorKey)}`;
    navigator.clipboard.writeText(text);
    toast({ title: t("copied_to_clipboard"), description: text });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  };

  const removeHistoryItem = (id: number) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div
      className="min-h-[100dvh] w-full flex flex-col items-center bg-background text-foreground pb-20 selection:bg-primary/30"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ===== HEADER ===== */}
      <header className="w-full max-w-[560px] mx-auto px-4 pt-5 pb-2 flex items-center justify-between z-10 relative gap-2">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight shrink-0">
          {t("app_title")}
        </h1>

        <div className="flex items-center gap-1 flex-wrap justify-end">
          {/* Language selector */}
          <select
            value={lang}
            onChange={e => setLang(e.target.value)}
            className="text-xs bg-card border border-border rounded-lg px-2 py-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground max-w-[110px]"
            aria-label="Language"
          >
            {Object.entries(LANGUAGES).map(([code, { label }]) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>

          <Button variant="ghost" size="icon" onClick={() => setTheme(t => t === "light" ? "dark" : "light")} className="rounded-full w-8 h-8">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="rounded-full w-8 h-8 hidden sm:flex">
            <Maximize className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main className="flex-1 w-full max-w-[520px] mx-auto flex flex-col items-center px-4 relative z-10">

        {/* Wheel container */}
        <div className="relative w-full max-w-[420px] aspect-square my-4 md:my-6">

          {/* Fixed pointer arrow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 z-20 flex flex-col items-center drop-shadow-md">
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-foreground" />
          </div>

          {/* Winning color glow behind wheel */}
          <div
            className={`absolute inset-0 rounded-full blur-3xl transition-all duration-500 ${result ? "opacity-35" : "opacity-0"}`}
            style={{ backgroundColor: result ? result.hex : "transparent" }}
          />

          {/* Canvas wheel */}
          <canvas
            ref={canvasRef}
            width={800}
            height={800}
            className="w-full h-full rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative z-10 bg-card"
          />

          {/* Center SPIN button (overlaid on canvas hub) */}
          <button
            onClick={spin}
            disabled={isSpinning}
            data-testid="button-spin"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[88px] h-[88px] rounded-full bg-card shadow-lg border-[3px] border-white/80 dark:border-white/20 flex items-center justify-center text-primary font-bold text-sm transition-all duration-150 hover:scale-105 hover:shadow-xl disabled:opacity-90 disabled:scale-100 disabled:cursor-default cursor-pointer"
          >
            {isSpinning ? (
              <Loader2 className="w-7 h-7 animate-spin" />
            ) : result ? (
              t("again")
            ) : (
              t("spin")
            )}
          </button>
        </div>

        {/* Result card */}
        <div className="w-full max-w-[420px] h-[130px] mb-5">
          <div
            className={`w-full h-full rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 ${!result ? "border-2 border-dashed border-border bg-transparent" : "bg-card shadow-sm"}`}
            style={{ borderLeft: result ? `5px solid ${result.hex}` : undefined }}
          >
            {result ? (
              <div className="w-full h-full flex flex-col items-center justify-center animate-in zoom-in-95 fade-in duration-300">
                <Button
                  variant="ghost" size="icon"
                  className="absolute top-1.5 right-1.5 w-7 h-7 text-muted-foreground hover:text-foreground"
                  onClick={copyResult}
                  data-testid="button-copy-result"
                >
                  <Copy className="w-3.5 h-3.5" />
                </Button>
                <div className="text-[38px] leading-tight font-bold tracking-tight uppercase" data-testid="text-result">
                  {t(result.partKey)}
                </div>
                <div
                  className="px-3 py-0.5 mt-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: result.hex }}
                >
                  {t(result.colorKey)}
                </div>
              </div>
            ) : (
              <div className="text-muted-foreground font-semibold text-sm">{t("spin_the_wheel")}</div>
            )}
          </div>
        </div>

        {/* Controls bar */}
        <div className="w-full max-w-[420px] flex items-center justify-center gap-1 bg-card rounded-full px-2 py-1.5 shadow-sm border border-border flex-wrap">

          {/* Sound */}
          <Button
            variant="ghost" size="icon"
            className={`rounded-full w-9 h-9 ${muted ? "text-muted-foreground" : "text-primary"}`}
            onClick={() => setMuted(m => !m)}
            data-testid="button-mute"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>

          <div className="w-px h-5 bg-border" />

          {/* Voice */}
          <Button
            variant="ghost" size="icon"
            className={`rounded-full w-9 h-9 ${!voiceOn ? "text-muted-foreground" : "text-primary"}`}
            onClick={() => setVoiceOn(v => !v)}
            data-testid="button-voice"
          >
            {!voiceOn ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>

          <div className="w-px h-5 bg-border" />

          {/* Speed */}
          <Button
            variant="ghost"
            className={`rounded-full px-3 font-semibold text-xs h-9 ${fastMode ? "text-primary bg-primary/10" : "text-muted-foreground"}`}
            onClick={() => setFastMode(f => !f)}
            data-testid="toggle-fast-mode"
          >
            <Zap className="w-3.5 h-3.5 mr-1" />
            {fastMode ? t("fast") : t("normal")}
          </Button>

          <div className="w-px h-5 bg-border" />

          {/* Shuffle */}
          <Button
            variant="ghost" size="icon"
            className="rounded-full w-9 h-9 text-muted-foreground hover:text-primary disabled:opacity-40"
            onClick={handleShuffle}
            disabled={isSpinning}
            title={t("shuffle")}
            data-testid="button-shuffle"
          >
            <Shuffle className="w-4 h-4" />
          </Button>

          {/* Reset order */}
          <Button
            variant="ghost" size="icon"
            className="rounded-full w-9 h-9 text-muted-foreground hover:text-primary disabled:opacity-40"
            onClick={handleResetOrder}
            disabled={isSpinning}
            title={t("reset_order")}
            data-testid="button-reset-order"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>

          <div className="w-px h-5 bg-border" />

          {/* History toggle */}
          <Button
            variant="ghost" size="icon"
            className={`rounded-full w-9 h-9 ${showHistory ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
            onClick={() => setShowHistory(s => !s)}
            data-testid="button-history"
          >
            <Clock className="w-4 h-4" />
          </Button>
        </div>

        {/* History panel (slide in/out) */}
        <div className={`w-full max-w-[420px] transition-[max-height,opacity,margin] duration-300 overflow-hidden ${showHistory ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
          <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" /> {t("recent_spins")}
              </h3>
              <button
                className="text-xs text-muted-foreground hover:text-destructive font-medium"
                onClick={() => setHistory([])}
                data-testid="button-reset-history"
              >
                {t("clear_all")}
              </button>
            </div>

            {history.length > 0 ? (
              <div className="flex flex-col gap-2">
                {history.map(item => (
                  <div key={item.id} className="flex items-center justify-between bg-background border border-border rounded-xl p-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.colorHex }} />
                      {/* Display translated label from stored keys */}
                      <span className="text-sm font-medium">{t(item.partKey)} – {t(item.colorKey)}</span>
                    </div>
                    <button onClick={() => removeHistoryItem(item.id)} className="text-muted-foreground hover:text-foreground p-1">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 text-sm text-muted-foreground">{t("no_recent_spins")}</div>
            )}
          </div>
        </div>

      </main>

      {/* ===== SEO CONTENT SECTION (translated) ===== */}
      <section className="w-full max-w-[520px] mx-auto mt-16 px-4 pb-4 prose prose-slate dark:prose-invert prose-headings:font-bold prose-sm">
        <div className="bg-card border border-border p-6 md:p-8 rounded-3xl not-prose space-y-6">
          <div>
            <h2 className="font-bold text-lg mb-2">{t("seo_h2_what")}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t("seo_what_p")}</p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">{t("seo_h2_how")}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t("seo_how_p")}</p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">{t("seo_h2_moves")}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">{t("seo_moves_p")}</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-none ps-0">
              {(["seo_moves_red","seo_moves_blue","seo_moves_yellow","seo_moves_green"] as const).map(k => (
                <li key={k} className="flex items-start gap-2">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: k.includes("red") ? "#E8192C" : k.includes("blue") ? "#1565C0" : k.includes("yellow") ? "#FFD700" : "#2E7D32" }} />
                  {t(k)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">{t("seo_h2_why")}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t("seo_why_p")}</p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">{t("seo_h2_faq")}</h2>
            <div className="space-y-4">
              {([
                ["faq_q1","faq_a1"],
                ["faq_q2","faq_a2"],
                ["faq_q3","faq_a3"],
                ["faq_q4","faq_a4"],
              ] as const).map(([q, a]) => (
                <div key={q}>
                  <h3 className="font-semibold text-sm mb-1">{t(q)}</h3>
                  <p className="text-muted-foreground text-sm">{t(a)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
