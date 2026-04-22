import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Moon, Sun, ChevronLeft } from 'lucide-react';

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

  const isInnerPage = ["/about", "/privacy", "/terms-conditions", "/contact"].includes(location);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem("twisterLang", newLang);
    setLocation(newLang === "en" ? "/" : `/${newLang}`);
  };

  return (
    <nav className="p-4 md:p-6 border-b border-[#FED7D7] dark:border-slate-800 flex justify-between items-center bg-[#FFF5F5] dark:bg-slate-950 sticky top-0 z-10 transition-colors duration-300">
      <Link href="/">
        <span className="text-xl font-bold text-[#C53030] dark:text-red-400 cursor-pointer">
          Twister Spinner
        </span>
      </Link>
      
      <div className="flex items-center gap-2 md:gap-4">
        {!isInnerPage && (
          <select
            value={lang}
            onChange={handleLanguageChange}
            className="text-xs bg-white dark:bg-slate-900 border border-[#FED7D7] dark:border-slate-800 rounded-lg px-2 py-1.5 text-foreground max-w-[108px] focus:outline-none focus:ring-2 focus:ring-red-500/50 cursor-pointer"
          >
            {Object.entries(LANGUAGES).map(([code, label]) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
        )}

        <button
          onClick={() => setTheme(th => th === "light" ? "dark" : "light")}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-100 dark:hover:bg-slate-800 text-[#C53030] dark:text-red-400 transition-colors shrink-0"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {isInnerPage && (
          <Link href="/">
            <button className="text-sm bg-white dark:bg-slate-900 hover:bg-red-50 dark:hover:bg-slate-800 text-[#C53030] dark:text-red-400 px-3 md:px-4 py-2 rounded-lg transition border border-[#FED7D7] dark:border-slate-800 font-medium flex items-center gap-1.5 shadow-sm shrink-0">
              <ChevronLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
