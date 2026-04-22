import { useState, useEffect, useRef, useCallback } from "react";
import { flushSync } from "react-dom";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Moon, Sun, Volume2, VolumeX, Mic, MicOff, Maximize, Zap,
  X, Loader2, Copy, Shuffle, RotateCcw, ChevronRight,
  Plus, Users, Download, ClipboardCopy, ImageDown,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import TermsConditions from "./pages/TermsConditions"; // New
import About from "./pages/About";                  // New
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// ── Language imports ─────────────────────────────────────────────────────────
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

const LANGUAGES: Record<string, { label: string; translations: Record<string, string>; rtl?: boolean }> = {
  en:      { label: "English",    translations: enLang as Record<string, string> },
  ar:      { label: "العربية",    translations: arLang as Record<string, string>, rtl: true },
  ur:      { label: "اردو",       translations: urLang as Record<string, string>, rtl: true },
  es:      { label: "Español",    translations: esLang as Record<string, string> },
  fr:      { label: "Français",   translations: frLang as Record<string, string> },
  de:      { label: "Deutsch",    translations: deLang as Record<string, string> },
  pt:      { label: "Português",  translations: ptLang as Record<string, string> },
  ru:      { label: "Русский",    translations: ruLang as Record<string, string> },
  hi:      { label: "हिन्दी",      translations: hiLang as Record<string, string> },
  bn:      { label: "বাংলা",      translations: bnLang as Record<string, string> },
  tr:      { label: "Türkçe",     translations: trLang as Record<string, string> },
  id:      { label: "Indonesia",  translations: idLang as Record<string, string> },
  ms:      { label: "Melayu",     translations: msLang as Record<string, string> },
  it:      { label: "Italiano",   translations: itLang as Record<string, string> },
  nl:      { label: "Nederlands", translations: nlLang as Record<string, string> },
  pl:      { label: "Polski",     translations: plLang as Record<string, string> },
  sv:      { label: "Svenska",    translations: svLang as Record<string, string> },
  vi:      { label: "Tiếng Việt", translations: viLang as Record<string, string> },
  ja:      { label: "日本語",      translations: jaLang as Record<string, string> },
  ko:      { label: "한국어",      translations: koLang as Record<string, string> },
  "zh-cn": { label: "简体中文",    translations: zhCnLang as Record<string, string> },
  "zh-tw": { label: "繁體中文",    translations: zhTwLang as Record<string, string> },
};

// ── Segment data ─────────────────────────────────────────────────────────────
const BASE_SEGMENTS = [
  { id: 1,  partKey: "left_hand",  colorKey: "red",    hex: "#E8192C", gradDark: "#C62828", gradLight: "#EF5350" },
  { id: 2,  partKey: "right_hand", colorKey: "red",    hex: "#E8192C", gradDark: "#C62828", gradLight: "#EF5350" },
  { id: 3,  partKey: "left_foot",  colorKey: "red",    hex: "#E8192C", gradDark: "#C62828", gradLight: "#EF5350" },
  { id: 4,  partKey: "right_foot", colorKey: "red",    hex: "#E8192C", gradDark: "#C62828", gradLight: "#EF5350" },
  { id: 5,  partKey: "left_hand",  colorKey: "blue",   hex: "#1565C0", gradDark: "#1565C0", gradLight: "#42A5F5" },
  { id: 6,  partKey: "right_hand", colorKey: "blue",   hex: "#1565C0", gradDark: "#1565C0", gradLight: "#42A5F5" },
  { id: 7,  partKey: "left_foot",  colorKey: "blue",   hex: "#1565C0", gradDark: "#1565C0", gradLight: "#42A5F5" },
  { id: 8,  partKey: "right_foot", colorKey: "blue",   hex: "#1565C0", gradDark: "#1565C0", gradLight: "#42A5F5" },
  { id: 9,  partKey: "left_hand",  colorKey: "yellow", hex: "#F9A825", gradDark: "#F9A825", gradLight: "#FFE57F" },
  { id: 10, partKey: "right_hand", colorKey: "yellow", hex: "#F9A825", gradDark: "#F9A825", gradLight: "#FFE57F" },
  { id: 11, partKey: "left_foot",  colorKey: "yellow", hex: "#F9A825", gradDark: "#F9A825", gradLight: "#FFE57F" },
  { id: 12, partKey: "right_foot", colorKey: "yellow", hex: "#F9A825", gradDark: "#F9A825", gradLight: "#FFE57F" },
  { id: 13, partKey: "left_hand",  colorKey: "green",  hex: "#2E7D32", gradDark: "#2E7D32", gradLight: "#66BB6A" },
  { id: 14, partKey: "right_hand", colorKey: "green",  hex: "#2E7D32", gradDark: "#2E7D32", gradLight: "#66BB6A" },
  { id: 15, partKey: "left_foot",  colorKey: "green",  hex: "#2E7D32", gradDark: "#2E7D32", gradLight: "#66BB6A" },
  { id: 16, partKey: "right_foot", colorKey: "green",  hex: "#2E7D32", gradDark: "#2E7D32", gradLight: "#66BB6A" },
];
type Segment = typeof BASE_SEGMENTS[0];

// ── Wheel text labels (two words per segment, rendered on canvas) ─────────────
const SEGMENT_LABELS: Record<string, [string, string]> = {
  left_hand:  ["Left",  "Hand"],
  right_hand: ["Right", "Hand"],
  left_foot:  ["Left",  "Foot"],
  right_foot: ["Right", "Foot"],
};

// Avatar palette
const AVATAR_PALETTE = [
  { bg: "#E8192C", dark: false },
  { bg: "#1565C0", dark: false },
  { bg: "#F9A825", dark: true  },
  { bg: "#2E7D32", dark: false },
  { bg: "#c62828", dark: false },
  { bg: "#0d47a1", dark: false },
];

// ── Share card constants ──────────────────────────────────────────────────────
const LIMB_EMOJI: Record<string, string> = {
  left_hand:  "🤚",
  right_hand: "✋",
  left_foot:  "🦶",
  right_foot: "🦶",
};
const SITE_DOMAIN = "twister-spinner.com";

// ── Types ─────────────────────────────────────────────────────────────────────
type Player = {
  id: number;
  name: string;
  avatarBg: string;
  avatarDark: boolean;
  lastMove: { partKey: string; colorKey: string; hex: string } | null;
  survivedRounds: number;
};
type GamePhase = "setup" | "playing" | "winner";
type HistoryItem = { id: number; partKey: string; colorKey: string; colorHex: string };
type SpeedMode = "slow" | "normal" | "fast";

const SPEED_CONFIG: Record<SpeedMode, { duration: number; spins: number }> = {
  slow:   { duration: 6000, spins: 12 },
  normal: { duration: 4000, spins: 8  },
  fast:   { duration: 2000, spins: 3  },
};
const SPEED_CYCLE: SpeedMode[] = ["slow", "normal", "fast"];

// ── Utilities ─────────────────────────────────────────────────────────────────
function fisherYatesShuffle<T>(arr: T[]): T[] {
  const r = [...arr];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}
function loadSegmentOrder(): Segment[] {
  try {
    const saved = localStorage.getItem("twisterSegmentOrder");
    if (saved) {
      const ids: number[] = JSON.parse(saved);
      if (ids.length === 16) {
        const ord = ids.map(id => BASE_SEGMENTS.find(s => s.id === id)).filter((s): s is Segment => Boolean(s));
        if (ord.length === 16) return ord;
      }
    }
  } catch (_) {}
  return fisherYatesShuffle(BASE_SEGMENTS);
}
function saveSegmentOrder(s: Segment[]) {
  localStorage.setItem("twisterSegmentOrder", JSON.stringify(s.map(x => x.id)));
}
function getInitials(name: string) {
  return name.trim().charAt(0).toUpperCase() || "?";
}
function isMobileDevice() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1;
}

// ── Share card generator (pure Canvas API, 1080×1080) ─────────────────────────
function generateShareCard(
  result: Segment,
  partLabel: string,
  colorLabel: string,
  playerName?: string,
  round?: number,
): string {
  const S = 1080;
  const cv = document.createElement("canvas");
  cv.width = S; cv.height = S;
  const ctx = cv.getContext("2d")!;

  const grad = ctx.createLinearGradient(0, 0, S, S);
  grad.addColorStop(0, result.gradLight);
  grad.addColorStop(1, result.gradDark);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, S, S);

  const vig = ctx.createRadialGradient(S / 2, S / 2, S * 0.18, S / 2, S / 2, S * 0.78);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(0,0,0,0.3)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, S, S);

  const isYellow = result.colorKey === "yellow";
  const textColor   = isYellow ? "#1a1000" : "#ffffff";
  const subtleColor = isYellow ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.75)";
  const faintColor  = isYellow ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.45)";

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font = "600 38px Arial, Helvetica, sans-serif";
  ctx.fillStyle = subtleColor;
  ctx.fillText("TWISTER SPINNER", S / 2, 74);

  ctx.strokeStyle = isYellow ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.25)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(S * 0.2, 108);
  ctx.lineTo(S * 0.8, 108);
  ctx.stroke();

  ctx.font = "192px serif";
  ctx.fillStyle = textColor;
  ctx.fillText(LIMB_EMOJI[result.partKey] ?? "🌀", S / 2, 298);

  let limbPx = 152;
  ctx.font = `900 ${limbPx}px "Arial Black", Arial, sans-serif`;
  const maxW = S - 120;
  while (ctx.measureText(partLabel.toUpperCase()).width > maxW && limbPx > 60) {
    limbPx -= 6;
    ctx.font = `900 ${limbPx}px "Arial Black", Arial, sans-serif`;
  }
  ctx.shadowColor = "rgba(0,0,0,0.25)";
  ctx.shadowBlur = 18;
  ctx.fillStyle = textColor;
  ctx.fillText(partLabel.toUpperCase(), S / 2, 548);
  ctx.shadowBlur = 0;

  ctx.font = `700 86px Arial, Helvetica, sans-serif`;
  ctx.fillStyle = subtleColor;
  ctx.fillText(colorLabel.toUpperCase(), S / 2, 668);

  if (playerName && round !== undefined) {
    ctx.font = `500 50px Arial, Helvetica, sans-serif`;
    ctx.fillStyle = subtleColor;
    ctx.fillText(`Round ${round} · ${playerName}'s move`, S / 2, 780);
  }

  ctx.strokeStyle = faintColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(S * 0.3, S - 100);
  ctx.lineTo(S * 0.7, S - 100);
  ctx.stroke();

  ctx.font = `400 36px Arial, Helvetica, sans-serif`;
  ctx.fillStyle = faintColor;
  ctx.fillText(SITE_DOMAIN, S / 2, S - 52);

  return cv.toDataURL("image/png");
}

// ── Audio ─────────────────────────────────────────────────────────────────────
class AudioSynthesizer {
  ctx: AudioContext | null = null;
  muted = false;
  init() {
    if (!this.ctx) this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  playTick() {
    if (this.muted || !this.ctx) return;
    try {
      const { ctx } = this;
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(900, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 0.04);
    } catch (_) {}
  }
  playWin() {
    if (this.muted || !this.ctx) return;
    const { ctx } = this;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      setTimeout(() => {
        try {
          const osc = ctx.createOscillator(), gain = ctx.createGain();
          osc.type = "triangle"; osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.22, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(ctx.currentTime + 1.0);
        } catch (_) {}
      }, i * 120);
    });
  }
  playChampion() {
    if (this.muted || !this.ctx) return;
    const { ctx } = this;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      setTimeout(() => {
        try {
          const osc = ctx.createOscillator(), gain = ctx.createGain();
          osc.type = "triangle"; osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.28, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(ctx.currentTime + 1.8);
        } catch (_) {}
      }, i * 100);
    });
  }
}
const audioSynth = new AudioSynthesizer();

function createConfetti(colors?: string[]) {
  const c = colors ?? ["#E8192C","#1565C0","#F9A825","#2E7D32"];
  const el = document.createElement("div");
  el.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;";
  document.body.appendChild(el);
  for (let i = 0; i < 80; i++) {
    const p = document.createElement("div");
    p.style.cssText = `position:absolute;width:${Math.random()*10+4}px;height:${Math.random()*10+4}px;background:${c[Math.floor(Math.random()*c.length)]};border-radius:${Math.random()>0.5?"50%":"2px"};top:50%;left:50%;opacity:1;transform:translate(-50%,-50%);transition:all ${Math.random()*0.8+0.8}s cubic-bezier(.25,.46,.45,.94);`;
    el.appendChild(p);
    setTimeout(() => {
      const a = Math.random()*Math.PI*2, v = Math.random()*480+160;
      p.style.transform = `translate(calc(-50% + ${Math.cos(a)*v}px),calc(-50% + ${Math.sin(a)*v+180}px)) rotate(${Math.random()*720}deg)`;
      p.style.opacity = "0";
    }, 10);
  }
  setTimeout(() => el.parentNode && document.body.removeChild(el), 2100);
}

// ── Brand SVG icons ───────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function XBirdIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// ── Share Buttons ─────────────────────────────────────────────────────────────
function ShareButtons({
  result,
  shareCardDataUrl,
  show,
  partLabel,
  colorLabel,
}: {
  result: Segment;
  shareCardDataUrl: string;
  show: boolean;
  partLabel: string;
  colorLabel: string;
}) {
  const mobile = isMobileDevice();
  const shareText = `I just got ${colorLabel} ${partLabel} in Twister! Can you beat me? 🌀 ${SITE_DOMAIN}`;

  const handleWhatsApp = () => {
    const url = mobile
      ? `whatsapp://send?text=${encodeURIComponent(shareText)}`
      : `https://web.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  const handleTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      "_blank",
      "width=550,height=420",
    );
  };

  const triggerDownload = () => {
    const a = document.createElement("a");
    a.href = shareCardDataUrl;
    a.download = `twister-result-${result.colorKey}-${result.partKey.replace("_", "-")}.png`;
    a.click();
  };

  const handleCopyOrSave = async () => {
    if (mobile) {
      triggerDownload();
      toast({ title: "Image saved!", description: "Check your downloads folder." });
      return;
    }
    try {
      const res = await fetch(shareCardDataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      toast({ title: "Image copied!", description: "Paste it anywhere." });
    } catch (_) {
      triggerDownload();
      toast({ title: "Image downloaded", description: "Clipboard not available — saved as file instead." });
    }
  };

  const btnBase =
    "flex flex-col items-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all active:scale-95 hover:opacity-90 select-none min-h-[56px] justify-center";

  return (
    <div
      className={`w-full transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold text-center mb-2">
        Share your result
      </p>
      <div className="grid grid-cols-2 gap-2">
        <button onClick={handleWhatsApp} className={`${btnBase} bg-[#25D366] text-white shadow-sm`} aria-label="Share to WhatsApp">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </button>
        <button onClick={handleTwitter} className={`${btnBase} bg-black text-white shadow-sm`} aria-label="Share to X (Twitter)">
          <XBirdIcon />
          <span>X / Twitter</span>
        </button>
        <button onClick={handleCopyOrSave} className={`${btnBase} bg-card border border-border text-foreground hover:bg-accent/40`} aria-label={mobile ? "Save image" : "Copy image to clipboard"}>
          {mobile ? <ImageDown className="w-5 h-5" /> : <ClipboardCopy className="w-5 h-5" />}
          <span>{mobile ? "Save Image" : "Copy Image"}</span>
        </button>
        <button onClick={triggerDownload} className={`${btnBase} bg-card border border-border text-foreground hover:bg-accent/40`} aria-label="Download image">
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}

// ── QueryClient ───────────────────────────────────────────────────────────────
const queryClient = new QueryClient();

// ════════════════════════════════════════════════════════════════════════════
// SETUP PANEL (right-side panel, pre-game)
// ════════════════════════════════════════════════════════════════════════════
function SetupPanel({ onStart, onSolo }: { onStart: (names: string[]) => void; onSolo: () => void }) {
  const [inputs, setInputs] = useState(["", ""]);
  const filledCount = inputs.filter(n => n.trim().length > 0).length;
  const canStart = filledCount >= 2;

  const addPlayer = () => { if (inputs.length < 6) setInputs(p => [...p, ""]); };
  const removePlayer = (i: number) => { if (inputs.length > 2) setInputs(p => p.filter((_, idx) => idx !== i)); };
  const setName = (i: number, val: string) => setInputs(p => p.map((n, idx) => idx === i ? val : n));

  return (
    <div className="bg-card border border-border rounded-3xl shadow-lg p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-base font-bold leading-tight">Players</h2>
          <p className="text-xs text-muted-foreground">2–6 players</p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 mb-4">
        {inputs.map((name, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all"
              style={{
                backgroundColor: name.trim() ? AVATAR_PALETTE[i % AVATAR_PALETTE.length].bg : "hsl(var(--muted))",
                color: name.trim()
                  ? (AVATAR_PALETTE[i % AVATAR_PALETTE.length].dark ? "#000" : "#fff")
                  : "hsl(var(--muted-foreground))",
              }}
            >
              {name.trim() ? getInitials(name) : i + 1}
            </div>
            <input
              type="text"
              value={name}
              onChange={e => setName(i, e.target.value)}
              onKeyDown={e => e.key === "Enter" && canStart && onStart(inputs.map(n => n.trim()).filter(Boolean))}
              placeholder={`Player ${i + 1}`}
              maxLength={20}
              className="flex-1 bg-background border border-border rounded-xl px-3 py-2 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              autoFocus={i === 0}
            />
            {inputs.length > 2 && (
              <button
                onClick={() => removePlayer(i)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {inputs.length < 6 && (
        <button
          onClick={addPlayer}
          className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border-2 border-dashed border-border text-muted-foreground hover:border-primary hover:text-primary text-sm font-semibold transition-all mb-4"
        >
          <Plus className="w-4 h-4" /> Add Player
        </button>
      )}

      <button
        onClick={() => onStart(inputs.map(n => n.trim()).filter(Boolean))}
        disabled={!canStart}
        className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
      >
        <ChevronRight className="w-4 h-4" /> Start Game
      </button>

      <button onClick={onSolo} className="w-full mt-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
        Solo play (no tracking)
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SOLO PANEL (right-side panel during solo play)
// ════════════════════════════════════════════════════════════════════════════
function SoloPanel({
  result, resultKey, isSpinning, shareCardDataUrl, showShare,
  history, t, partLabel, colorLabel, onCopy, onReset, setHistory,
}: {
  result: Segment | null;
  resultKey: number;
  isSpinning: boolean;
  shareCardDataUrl: string | null;
  showShare: boolean;
  history: HistoryItem[];
  t: (k: string) => string;
  partLabel: string;
  colorLabel: string;
  onCopy: () => void;
  onReset: () => void;
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-muted-foreground">Solo Mode</span>
        <button onClick={onReset} className="text-xs text-muted-foreground hover:text-primary transition-colors">
          ← Setup
        </button>
      </div>

      {/* Result card */}
      <div className="rounded-2xl overflow-hidden shadow-sm">
        {result && !isSpinning ? (
          <div
            key={resultKey}
            className="result-pop px-5 py-5 flex flex-col items-center relative"
            style={{ backgroundColor: result.hex }}
          >
            <button
              onClick={onCopy}
              data-testid="button-copy-result"
              className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
              aria-label={t("copy")}
            >
              <Copy className="w-3.5 h-3.5" style={{ color: result.colorKey === "yellow" ? "#333" : "#fff" }} />
            </button>
            <div
              className="font-black tracking-tight uppercase leading-tight text-center"
              style={{ fontSize: "clamp(24px, 7vw, 40px)", color: result.colorKey === "yellow" ? "#222" : "#fff" }}
              data-testid="text-result"
            >
              {partLabel}
            </div>
            <div
              className="mt-2 text-sm font-bold uppercase tracking-widest"
              style={{ color: result.colorKey === "yellow" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.8)" }}
            >
              {colorLabel}
            </div>
          </div>
        ) : (
          <div className="px-5 py-5 flex items-center justify-center border-2 border-dashed border-border rounded-2xl min-h-[96px]">
            <p className="text-muted-foreground text-sm font-medium">{t("spin_the_wheel")}</p>
          </div>
        )}
      </div>

      {/* Share buttons */}
      {result && shareCardDataUrl && !isSpinning && (
        <ShareButtons
          result={result}
          shareCardDataUrl={shareCardDataUrl}
          show={showShare}
          partLabel={partLabel}
          colorLabel={colorLabel}
        />
      )}

      {/* History chips */}
      {history.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground">Recent</span>
            <button
              onClick={() => setHistory([])}
              className="text-[10px] text-muted-foreground hover:text-destructive transition-colors"
              data-testid="button-reset-history"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {history.map((item, i) => (
              <div
                key={item.id}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-border bg-card shadow-sm"
                style={{ borderLeftColor: item.colorHex, borderLeftWidth: 3 }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.colorHex }} />
                <span className="text-foreground/80">{t(item.partKey)}</span>
                {i === 0 && <span className="text-[9px] bg-primary/15 text-primary rounded px-1 font-bold">NEW</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// IN-GAME PANEL (right-side panel during multiplayer)
// ════════════════════════════════════════════════════════════════════════════
function InGamePanel({
  players, currentIdx, round,
  result, resultKey, isSpinning,
  showShare, shareCardDataUrl,
  awaitingNextTurn,
  t, partLabel, colorLabel,
  onNextTurn, onEliminatePlayer, onReset, onCopy,
}: {
  players: Player[];
  currentIdx: number;
  round: number;
  result: Segment | null;
  resultKey: number;
  isSpinning: boolean;
  showShare: boolean;
  shareCardDataUrl: string | null;
  awaitingNextTurn: boolean;
  t: (k: string) => string;
  partLabel: string;
  colorLabel: string;
  onNextTurn: () => void;
  onEliminatePlayer: (idx: number) => void;
  onReset: () => void;
  onCopy: () => void;
}) {
  const current = players[currentIdx];

  return (
    <div className="flex flex-col gap-3">

      {/* Round header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold">Round {round} <span className="text-muted-foreground font-normal">· {players.length} left</span></span>
        <button onClick={onReset} className="text-xs text-muted-foreground hover:text-primary transition-colors">
          ← Setup
        </button>
      </div>

      {/* Result card — slides in from top */}
      <div className="rounded-2xl overflow-hidden shadow-sm">
        {result && !isSpinning ? (
          <div
            key={resultKey}
            className="result-pop px-5 py-5 flex flex-col items-center relative"
            style={{ backgroundColor: result.hex }}
          >
            <button
              onClick={onCopy}
              data-testid="button-copy-result"
              className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
              aria-label={t("copy")}
            >
              <Copy className="w-3.5 h-3.5" style={{ color: result.colorKey === "yellow" ? "#333" : "#fff" }} />
            </button>
            <div
              className="font-black tracking-tight uppercase leading-tight text-center"
              style={{ fontSize: "clamp(24px, 7vw, 40px)", color: result.colorKey === "yellow" ? "#222" : "#fff" }}
              data-testid="text-result"
            >
              {partLabel}
            </div>
            <div
              className="mt-2 text-sm font-bold uppercase tracking-widest"
              style={{ color: result.colorKey === "yellow" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.8)" }}
            >
              {colorLabel}
            </div>
            {current && (
              <div
                className="mt-1 text-xs font-semibold"
                style={{ color: result.colorKey === "yellow" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.65)" }}
              >
                {current.name}'s move
              </div>
            )}
          </div>
        ) : (
          <div className="px-5 py-5 flex items-center justify-center border-2 border-dashed border-border rounded-2xl min-h-[96px]">
            <p className="text-muted-foreground text-sm font-medium">
              {current ? `${current.name}'s turn — spin!` : t("spin_the_wheel")}
            </p>
          </div>
        )}
      </div>

      {/* Share buttons */}
      {result && shareCardDataUrl && !isSpinning && (
        <ShareButtons
          result={result}
          shareCardDataUrl={shareCardDataUrl}
          show={showShare}
          partLabel={partLabel}
          colorLabel={colorLabel}
        />
      )}

      {/* Next Turn button — only after share buttons have faded in */}
      {awaitingNextTurn && showShare && (
        <button
          onClick={onNextTurn}
          data-testid="button-next-turn"
          className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 result-pop"
        >
          Next Turn <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Player list */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">
        {players.map((p, i) => (
          <div
            key={p.id}
            className="flex items-center gap-3 px-4 py-3 transition-colors"
            style={i === currentIdx
              ? { borderLeft: `3px solid ${p.avatarBg}`, backgroundColor: `${p.avatarBg}12` }
              : { borderLeft: "3px solid transparent" }
            }
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${i === currentIdx ? "shadow-md scale-105" : "opacity-70"}`}
              style={{ backgroundColor: p.avatarBg, color: p.avatarDark ? "#000" : "#fff" }}
            >
              {getInitials(p.name)}
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-sm truncate ${i === currentIdx ? "font-bold" : "font-medium"}`}>{p.name}</div>
              {p.lastMove ? (
                <div className="text-xs text-muted-foreground truncate">
                  {t(p.lastMove.partKey)} · <span className="font-semibold" style={{ color: p.lastMove.hex }}>{t(p.lastMove.colorKey)}</span>
                </div>
              ) : (
                <div className="text-xs text-muted-foreground">No moves yet</div>
              )}
            </div>
            <button
              onClick={() => onEliminatePlayer(i)}
              className="w-7 h-7 flex items-center justify-center rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
              title={`Eliminate ${p.name}`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Reset game */}
      <button
        onClick={onReset}
        className="text-xs text-center text-muted-foreground hover:text-destructive py-1 transition-colors"
      >
        ↩ Reset Game
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// WINNER OVERLAY
// ════════════════════════════════════════════════════════════════════════════
function WinnerOverlay({ winner, round, onPlayAgain }: { winner: Player; round: number; onPlayAgain: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md px-4">
      <div className="bg-card border border-border rounded-3xl shadow-2xl p-8 md:p-12 max-w-[400px] w-full text-center animate-in zoom-in-95 fade-in duration-500">
        <div className="text-6xl mb-4">🏆</div>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg"
          style={{ backgroundColor: winner.avatarBg, color: winner.avatarDark ? "#000" : "#fff" }}
        >
          {getInitials(winner.name)}
        </div>
        <h2 className="text-3xl font-black tracking-tight mb-1">{winner.name} Wins!</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Survived {round} round{round !== 1 ? "s" : ""} 🎉
        </p>
        <button
          onClick={onPlayAgain}
          className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" /> Play Again
        </button>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// HOME
// ════════════════════════════════════════════════════════════════════════════
function Home({ routeLang }: { routeLang: string }) {
  const [, setLocation] = useLocation(); // <-- Added useLocation
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isSpinning, setIsSpinning]   = useState(false);
  const [result, setResult]           = useState<Segment | null>(null);
  const [resultKey, setResultKey]     = useState(0);
  const [history, setHistory]         = useState<HistoryItem[]>([]);
  const [activeSegments, setActiveSegments] = useState<Segment[]>(loadSegmentOrder);
  const activeSegmentsRef = useRef<Segment[]>(activeSegments);
  const [muted, setMuted]             = useState(false);
  const [voiceOn, setVoiceOn]         = useState(true);
  const [speedMode, setSpeedMode]     = useState<SpeedMode>("normal");
  const [theme, setTheme]             = useState(() => localStorage.getItem("theme") || "light");
  
  // 👇 WE CHANGED THIS LINE 👇
  const lang = routeLang; 

  const [shareCardDataUrl, setShareCardDataUrl] = useState<string | null>(null);
  const [showShare, setShowShare]               = useState(false);

  const [gamePhase, setGamePhase]           = useState<GamePhase>("setup");
  const [players, setPlayers]               = useState<Player[]>([]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [round, setRound]                   = useState(1);
  const [winner, setWinner]                 = useState<Player | null>(null);
  const [awaitingNextTurn, setAwaitingNextTurn] = useState(false);
  const [isSolo, setIsSolo]                 = useState(false);

  const rotationRef        = useRef(0);
  const animationRef       = useRef<number>(0);
  const lastTickAngleRef   = useRef(0);

  // 👇 AND ADDED THIS EFFECT 👇
  useEffect(() => {
    const saved = localStorage.getItem("twisterLang");
    if (routeLang === "en" && saved && saved !== "en" && LANGUAGES[saved]) {
      setLocation(`/${saved}`, { replace: true });
    }
  }, [routeLang, setLocation]);

  const t = useCallback((key: string): string => {
    const d = LANGUAGES[lang]?.translations;
    return d?.[key] ?? (enLang as Record<string, string>)[key] ?? key;
  }, [lang]);

  const isRTL = LANGUAGES[lang]?.rtl ?? false;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    localStorage.setItem("twisterLang", lang);
  }, [lang, isRTL]);

  useEffect(() => { audioSynth.muted = muted; }, [muted]);

  useEffect(() => {
    activeSegmentsRef.current = activeSegments;
    saveSegmentOrder(activeSegments);
  }, [activeSegments]);

  // ── Game actions ──────────────────────────────────────────────────────────
  const handleStartGame = (names: string[]) => {
    const newPlayers: Player[] = names.map((name, i) => ({
      id: i, name,
      avatarBg: AVATAR_PALETTE[i % AVATAR_PALETTE.length].bg,
      avatarDark: AVATAR_PALETTE[i % AVATAR_PALETTE.length].dark,
      lastMove: null, survivedRounds: 0,
    }));
    setPlayers(newPlayers); setCurrentPlayerIdx(0); setRound(1);
    setWinner(null); setResult(null); setHistory([]);
    setAwaitingNextTurn(false); setIsSolo(false);
    setShareCardDataUrl(null); setShowShare(false);
    setGamePhase("playing");
  };

  const handleSoloPlay = () => {
    setPlayers([]); setIsSolo(true); setGamePhase("playing");
    setResult(null); setHistory([]);
    setShareCardDataUrl(null); setShowShare(false);
  };

  const handleNextTurn = () => {
    const nextIdx = (currentPlayerIdx + 1) % players.length;
    setCurrentPlayerIdx(nextIdx);
    if (nextIdx === 0) setRound(r => r + 1);
    setResult(null); setAwaitingNextTurn(false);
    setShareCardDataUrl(null); setShowShare(false);
  };

  // Eliminate any player by index (not just the current player)
  const handleEliminatePlayer = (idx: number) => {
    const remaining = players.filter((_, i) => i !== idx);
    if (remaining.length === 1) {
      setWinner(remaining[0]); setPlayers(remaining); setGamePhase("winner");
      audioSynth.playChampion();
      createConfetti([remaining[0].avatarBg]);
      return;
    }
    let newIdx = currentPlayerIdx;
    if (idx < currentPlayerIdx) {
      newIdx = currentPlayerIdx - 1;
    } else if (idx === currentPlayerIdx) {
      newIdx = currentPlayerIdx >= remaining.length ? 0 : currentPlayerIdx;
    }
    setPlayers(remaining); setCurrentPlayerIdx(newIdx);
    setResult(null); setAwaitingNextTurn(false);
    setShareCardDataUrl(null); setShowShare(false);
  };

  const handlePlayAgain = () => {
    setGamePhase("setup"); setPlayers([]); setWinner(null);
    setRound(1); setCurrentPlayerIdx(0);
    setResult(null); setHistory([]); setAwaitingNextTurn(false); setIsSolo(false);
    setShareCardDataUrl(null); setShowShare(false);
  };

  // ── Draw wheel ────────────────────────────────────────────────────────────
  const drawWheel = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = canvas.width, h = canvas.height;
    const cx = w / 2, cy = h / 2;
    const radius = Math.min(cx, cy) - 8;
    const segs = activeSegmentsRef.current;
    const segAngle = (2 * Math.PI) / 16;

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotationRef.current);

    // ── Draw segment fills ──
    for (let i = 0; i < 16; i++) {
      const seg = segs[i];
      const start = i * segAngle, end = start + segAngle;
      const grad = ctx.createRadialGradient(0, 0, radius * 0.12, 0, 0, radius);
      grad.addColorStop(0, seg.gradDark);
      grad.addColorStop(1, seg.gradLight);
      ctx.beginPath(); ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, start, end);
      ctx.closePath();
      ctx.fillStyle = grad; ctx.fill();
      ctx.lineWidth = 2.5; ctx.strokeStyle = "rgba(255,255,255,0.7)"; ctx.stroke();
    }

    // ── Draw text labels on each segment ──
    ctx.font = "bold 22px Arial, Helvetica, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < 16; i++) {
      const seg = segs[i];
      const midAngle = i * segAngle + segAngle / 2;
      const isYellow = seg.colorKey === "yellow";
      const [word1, word2] = SEGMENT_LABELS[seg.partKey];

      ctx.save();
      ctx.rotate(midAngle);
      ctx.translate(radius * 0.62, 0);
      ctx.rotate(Math.PI / 2);

      ctx.fillStyle = isYellow ? "#222" : "#fff";
      ctx.shadowColor = isYellow ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.45)";
      ctx.shadowBlur = 4;
      ctx.fillText(word1, 0, -14);
      ctx.fillText(word2, 0, 14);
      ctx.shadowBlur = 0;

      ctx.restore();
    }

    // ── Outer border circle ──
    ctx.beginPath(); ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.lineWidth = 4; ctx.strokeStyle = "rgba(255,255,255,0.5)"; ctx.stroke();

    // ── Center hub ──
    ctx.beginPath(); ctx.arc(0, 0, radius * 0.145, 0, Math.PI * 2);
    ctx.fillStyle = "#111"; ctx.fill();
    ctx.lineWidth = 5; ctx.strokeStyle = "#fff"; ctx.stroke();

    ctx.restore();
  }, []);

  useEffect(() => { drawWheel(); }, [drawWheel, activeSegments]);

  // ── Spin ──────────────────────────────────────────────────────────────────
  const spin = () => {
    if (isSpinning || awaitingNextTurn) return;
    audioSynth.init();
    flushSync(() => {
      setIsSpinning(true);
      setResult(null);
      setShowShare(false);
      setShareCardDataUrl(null);
    });

    const segs = activeSegmentsRef.current;
    const segAngle = (2 * Math.PI) / 16;
    const { duration, spins } = SPEED_CONFIG[speedMode];

    // Normalise current rotation to [0, 2π) then add full spins + a random extra angle.
    // The winner is determined AFTER the wheel stops from the actual final position,
    // so there is no pre-selected target segment and no angle-offset mismatch.
    const startRot = ((rotationRef.current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    rotationRef.current = startRot;
    const targetRot = startRot + spins * 2 * Math.PI + Math.random() * 2 * Math.PI;

    const startTime = performance.now();
    lastTickAngleRef.current = startRot;

    const currentPlayer = !isSolo && players.length > 0 ? players[currentPlayerIdx] : null;
    const currentRound  = !isSolo && players.length > 0 ? round : undefined;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      rotationRef.current = startRot + (targetRot - startRot) * ease;

      if (rotationRef.current - lastTickAngleRef.current >= segAngle) {
        audioSynth.playTick();
        lastTickAngleRef.current = rotationRef.current;
      }
      drawWheel();

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Determine the winning segment from the actual final wheel position.
        // The pointer sits at 270° in canvas space (12 o'clock; 0° = 3 o'clock, CW positive).
        // Segment i occupies [i·segAngle, (i+1)·segAngle] in the wheel's local frame.
        // After rotating by normalizedDeg the segment whose LOCAL centre is closest to
        // (270° − normalizedDeg) is the visual winner.
        const finalDeg = rotationRef.current * (180 / Math.PI);
        const normalizedDeg = ((finalDeg % 360) + 360) % 360;
        const segmentAngle = 360 / 16;
        const winningIndex = Math.floor(
          ((270 - normalizedDeg + 720) % 360) / segmentAngle
        );
        const target = segs[winningIndex];

        setIsSpinning(false);
        setResult(target);
        setResultKey(k => k + 1);
        audioSynth.playWin();
        createConfetti();

        if (voiceOn && "speechSynthesis" in window) {
          const utt = new SpeechSynthesisUtterance(`${t(target.partKey)} ${t(target.colorKey)}`);
          utt.rate = 1.1;
          window.speechSynthesis.speak(utt);
        }

        if (!isSolo && players.length > 0) {
          setPlayers(prev => prev.map((p, i) =>
            i === currentPlayerIdx
              ? { ...p, lastMove: { partKey: target.partKey, colorKey: target.colorKey, hex: target.hex }, survivedRounds: p.survivedRounds + 1 }
              : p
          ));
          setAwaitingNextTurn(true);
        }

        setHistory(prev =>
          [{ id: Date.now(), partKey: target.partKey, colorKey: target.colorKey, colorHex: target.hex }, ...prev].slice(0, 5)
        );

        const partLabel  = t(target.partKey);
        const colorLabel = t(target.colorKey);
        const dataUrl = generateShareCard(target, partLabel, colorLabel, currentPlayer?.name, currentRound);
        setShareCardDataUrl(dataUrl);
        setTimeout(() => setShowShare(true), 300);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
  };

  const copyResult = () => {
    if (!result) return;
    const text = `${t(result.partKey)} • ${t(result.colorKey)}`;
    navigator.clipboard.writeText(text);
    toast({ title: t("copied_to_clipboard"), description: text });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
  };

  const spinDisabled = isSpinning || awaitingNextTurn;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground selection:bg-primary/30"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Winner overlay */}
      {gamePhase === "winner" && winner && (
        <WinnerOverlay winner={winner} round={round} onPlayAgain={handlePlayAgain} />
      )}

      {/* ARIA live region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
        {result ? `${t(result.partKey)} ${t(result.colorKey)}` : ""}
      </div>

      {/* HEADER */}
      <Navbar />

      {/* MAIN — two-column layout */}
      <main className="flex-1 w-full max-w-[960px] mx-auto flex flex-col md:flex-row md:items-center gap-5 px-4 py-6">

        {/* LEFT — Wheel + controls (flexible width) */}
        <div className="flex flex-col items-center flex-1 min-w-0">

          {/* Wheel */}
          <div className="relative w-full max-w-[90vw] sm:max-w-[460px] md:max-w-full aspect-square">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 z-20 drop-shadow-md">
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[22px] border-t-foreground" />
            </div>
            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${result ? "opacity-25" : "opacity-0"}`}
              style={{ backgroundColor: result?.hex ?? "transparent" }}
            />
            {/* Canvas */}
            <canvas
              ref={canvasRef} width={800} height={800}
              className="w-full h-full rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] relative z-10"
            />
            {/* SPIN button — centered over canvas */}
            <button
              onClick={spin}
              disabled={spinDisabled}
              data-testid="button-spin"
              aria-label="Spin the Twister wheel"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[92px] h-[92px] rounded-full bg-card shadow-xl border-[3px] border-white/80 dark:border-white/20 flex items-center justify-center text-primary font-black text-base transition-all duration-150 hover:scale-105 active:scale-95 hover:shadow-2xl disabled:opacity-80 disabled:scale-100 disabled:cursor-default cursor-pointer select-none"
            >
              {isSpinning ? <Loader2 className="w-7 h-7 animate-spin" /> : t("spin")}
            </button>
          </div>

          {/* Controls bar */}
          <div className="mt-6 self-center w-fit max-w-[95vw] bg-card border border-border rounded-2xl shadow-sm px-3 py-3">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <button onClick={() => setMuted(m => !m)} data-testid="button-mute"
                className={`ctrl-btn ${muted ? "ctrl-btn-off" : "ctrl-btn-on"}`}>
                {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                <span className="ctrl-label">{muted ? "Muted" : "Sound"}</span>
              </button>
              <div className="w-px h-8 bg-border shrink-0" />
              <button onClick={() => setVoiceOn(v => !v)} data-testid="button-voice"
                className={`ctrl-btn ${!voiceOn ? "ctrl-btn-off" : "ctrl-btn-on"}`}>
                {voiceOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                <span className="ctrl-label">{voiceOn ? "Voice" : "No voice"}</span>
              </button>
              <div className="w-px h-8 bg-border shrink-0" />
              <button
                onClick={() => setSpeedMode(s => SPEED_CYCLE[(SPEED_CYCLE.indexOf(s) + 1) % 3])}
                data-testid="toggle-fast-mode"
                className={`ctrl-btn ${speedMode !== "normal" ? "ctrl-btn-on" : "ctrl-btn-off"}`}
              >
                <Zap className={`w-5 h-5 ${speedMode === "fast" ? "fill-primary" : ""}`} />
                <span className="ctrl-label">{t(speedMode)}</span>
              </button>
              <div className="w-px h-8 bg-border shrink-0" />
              <button
                onClick={() => { if (!isSpinning) { setActiveSegments(fisherYatesShuffle(BASE_SEGMENTS)); setResult(null); } }}
                disabled={isSpinning} data-testid="button-shuffle"
                className="ctrl-btn ctrl-btn-off disabled:opacity-40"
              >
                <Shuffle className="w-5 h-5" />
                <span className="ctrl-label">{t("shuffle")}</span>
              </button>
              <div className="w-px h-8 bg-border shrink-0" />
              <button
                onClick={() => { if (!isSpinning) { setActiveSegments([...BASE_SEGMENTS]); setResult(null); } }}
                disabled={isSpinning} data-testid="button-reset-order"
                className="ctrl-btn ctrl-btn-off disabled:opacity-40"
              >
                <RotateCcw className="w-5 h-5" />
                <span className="ctrl-label">Reset</span>
              </button>
              <div className="w-px h-8 bg-border shrink-0" />
              <button onClick={toggleFullscreen} className="ctrl-btn ctrl-btn-off">
                <Maximize className="w-5 h-5" />
                <span className="ctrl-label">Full</span>
              </button>
            </div>
          </div>

        </div>

        
        {/* RIGHT — Panel (fixed 320px on desktop, full width on mobile) */}
        <div className="md:w-[320px] md:shrink-0">
          {gamePhase === "setup" ? (
            <SetupPanel onStart={handleStartGame} onSolo={handleSoloPlay} />
          ) : isSolo ? (
            <SoloPanel
              result={result}
              resultKey={resultKey}
              isSpinning={isSpinning}
              shareCardDataUrl={shareCardDataUrl}
              showShare={showShare}
              history={history}
              t={t}
              partLabel={result ? t(result.partKey) : ""}
              colorLabel={result ? t(result.colorKey) : ""}
              onCopy={copyResult}
              onReset={handlePlayAgain}
              setHistory={setHistory}
            />
          ) : (
            <InGamePanel
              players={players}
              currentIdx={currentPlayerIdx}
              round={round}
              result={result}
              resultKey={resultKey}
              isSpinning={isSpinning}
              showShare={showShare}
              shareCardDataUrl={shareCardDataUrl}
              awaitingNextTurn={awaitingNextTurn}
              t={t}
              partLabel={result ? t(result.partKey) : ""}
              colorLabel={result ? t(result.colorKey) : ""}
              onNextTurn={handleNextTurn}
              onEliminatePlayer={handleEliminatePlayer}
              onReset={handlePlayAgain}
              onCopy={copyResult}
            />
          )}
        </div>

      </main>

      {/* SEO content */}
      <section className="w-full max-w-[960px] mx-auto mt-12 px-4 pb-16">
        <div className="bg-card border border-border p-6 md:p-10 rounded-3xl space-y-10 text-foreground/80 leading-relaxed text-sm md:text-base shadow-sm">
          
          {/* Intro Section */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
              {t("seo_h1")}
            </h1>
            <p>{t("seo_intro_p1")}</p>
            <p>{t("seo_intro_p2")}</p>
          </div>

          {/* What Is It */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{t("seo_what_h2")}</h2>
            <p>{t("seo_what_p1")}</p>
            <p>{t("seo_what_p2")}</p>
          </div>

          {/* How to Use */}
          <div className="space-y-4 bg-muted/30 p-6 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold text-foreground">{t("seo_how_h2")}</h2>
            <p>{t("seo_how_p1")}</p>
            <ol className="list-decimal pl-5 space-y-2 font-medium text-foreground">
              <li>{t("seo_how_li1")}</li>
              <li>{t("seo_how_li2")}</li>
              <li>{t("seo_how_li3")}</li>
              <li>{t("seo_how_li4")}</li>
              <li>{t("seo_how_li5")}</li>
              <li>{t("seo_how_li6")}</li>
            </ol>
            <p className="pt-2">{t("seo_how_p2")}</p>
          </div>

          {/* Solo Play */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">{t("seo_solo_h3")}</h3>
            <p>{t("seo_solo_p1")}</p>
          </div>

          {/* Table Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{t("seo_moves_h2")}</h2>
            <p>{t("seo_moves_p1")}</p>
            <div className="overflow-hidden border border-border rounded-xl shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-muted text-foreground">
                  <tr>
                    <th className="p-4 font-bold border-b border-border">{t("seo_table_h1")}</th>
                    <th className="p-4 font-bold border-b border-border">{t("seo_table_h2")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {[1, 2, 3, 4].map((num) => (
                    <tr key={num} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold text-foreground">{t(`seo_table_r${num}`)}</td>
                      <td className="p-4">{t("seo_table_colors")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{t("seo_moves_p2")}</p>
          </div>

          {/* Controls Bar */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{t("seo_controls_h2")}</h2>
            <p>{t("seo_controls_p1")}</p>
            <ul className="list-disc pl-5 space-y-3">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num}>
                  <strong className="text-foreground">{t(`seo_controls_li${num}_title`)}</strong>
                  {t(`seo_controls_li${num}_desc`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Use */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{t("seo_why_h2")}</h2>
            <p>{t("seo_why_p1")}</p>
            <p>{t("seo_why_p2")}</p>
            <ul className="list-disc pl-5 space-y-3">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <li key={num}>
                  <strong className="text-foreground">{t(`seo_why_li${num}_title`)}</strong>
                  {t(`seo_why_li${num}_desc`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div className="space-y-4 bg-primary/5 p-6 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-bold text-primary">{t("seo_tips_h2")}</h2>
            <p>{t("seo_tips_p1")}</p>
            <ul className="list-disc pl-5 space-y-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num}>
                  <strong className="text-foreground">{t(`seo_tips_li${num}_title`)}</strong>
                  {t(`seo_tips_li${num}_desc`)}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="space-y-6 pt-4 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground">{t("seo_faq_h2")}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="space-y-2">
                  <h3 className="font-bold text-foreground text-base">{t(`faq_q${num}`)}</h3>
                  <p className="text-sm">{t(`faq_a${num}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ready to Play */}
          <div className="text-center bg-card border border-border p-8 rounded-2xl shadow-sm mt-8">
            <h2 className="text-2xl font-black text-foreground mb-3">{t("seo_ready_h2")}</h2>
            <p className="max-w-2xl mx-auto">{t("seo_ready_p1")}</p>
          </div>

        </div>
      </section>
      
    {/* FOOTER LINKS */}
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Static Pages */}
      <Route path="/about" component={About} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route path="/contact" component={ContactUs} />

      {/* English default root */}
      <Route path="/">{() => <Home routeLang="en" />}</Route>
      
      {/* Catch-all language codes */}
      <Route path="/:lang">
        {(params) => {
          const langCode = params.lang?.toLowerCase();
          if (langCode && LANGUAGES[langCode]) {
            return <Home routeLang={langCode} />;
          }
          return <NotFound />;
        }}
      </Route>
      
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
