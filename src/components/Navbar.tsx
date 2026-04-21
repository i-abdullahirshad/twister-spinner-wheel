import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Moon, Sun, ChevronLeft } from 'lucide-react';

// We include just the labels here so the dropdown works perfectly in the Navbar
const LANGUAGES: Record<string, string> = {
  en: "English", ar: "العربية", ur: "اردو", es: "Español", fr: "Français",
  de: "Deutsch", pt: "Português", ru: "Русский", hi: "हिन्दी", bn: "বাংলা",
  tr: "Türkçe", id: "Indonesia", ms: "Melayu", it: "Italiano", nl: "Nederlands",
  pl: "Polski", sv: "Svenska", vi: "Tiếng Việt", ja: "日本語", ko: "한국어",
  "zh-cn": "简体中文", "zh-tw": "繁體中文",
};

const Navbar = () => {
  const [location, setLocation] = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [lang, setLang] = useState(() => localStorage.getItem("twisterLang") || "en");

  // This checks if we are on one of the secondary pages
  const isInnerPage = ["/about", "/privacy", "/terms-conditions", "/contact"].includes(location);

  // Handle Light/Dark Mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle Language Switching
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem("twisterLang", newLang);
    // When language changes, we route them back to the main wheel to see the translation
    setLocation(newLang === "en" ? "/" : `/${newLang}`);
  };

  return (
    <nav className="p-4 md:p-6 border-b border-border flex justify-between items-center bg-card/50 backdrop-blur-sm sticky top-0 z-10 transition-colors duration-300">
      <Link href="/">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
          Twister Spinner
        </span>
      </Link>
      
      <div className="flex items-center gap-2 md:gap-4">
        {/* Language Dropdown - Only show on Homepage */}
        {!isInnerPage && (
          <select
            value={lang}
            onChange={handleLanguageChange}
            className="text-xs bg-card border border-border rounded-lg px-2 py-1.5 text-foreground max-w-[108px] focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
          >
            {Object.entries(LANGUAGES).map(([code, label]) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
        )}

        {/* Light/Dark Toggle */}
        <button
          onClick={() => setTheme(th => th === "light" ? "dark" : "light")}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-accent text-foreground transition-colors shrink-0"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Conditional Back Button */}
        {isInnerPage && (
          <Link href="/">
            <button className="text-sm bg-accent hover:bg-accent/80 text-foreground px-3 md:px-4 py-2 rounded-lg transition border border-border font-medium flex items-center gap-1.5 shadow-sm shrink-0">
              <ChevronLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
