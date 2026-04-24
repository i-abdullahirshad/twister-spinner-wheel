import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Moon, Sun, ChevronLeft, Menu, X } from 'lucide-react';

const LANGUAGES: Record<string, string> = {
  en: "English", ar: "العربية", ur: "اردو", es: "Español", fr: "Français",
  de: "Deutsch", pt: "Português", ru: "Русский", hi: "हिन्दी", bn: "বাংলা",
  tr: "Türkçe", id: "Indonesia", ms: "Melayu", it: "Italiano", nl: "Nederlands",
  pl: "Polski", sv: "Svenska", vi: "Tiếng Việt", ja: "日本語", ko: "한국어",
  "zh-cn": "简体中文", "zh-tw": "繁體中文",
};

// Organize your links here so they are easy to edit later
const NAV_LINKS = [
  { href: "/twister-spinner-rules", label: "How to Play" },
  { href: "/twister-spinner-symbols-meanings", label: "Symbols Explained" },
  { href: "/how-to-make-twister-spinner-at-home", label: "DIY Spinner" },
  { href: "/strip-twister-spinner-rules", label: "Strip Twister (18+)" }
];

const Navbar = () => {
  const [location, setLocation] = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [lang, setLang] = useState(() => localStorage.getItem("twisterLang") || "en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Added your new URLs here so they get the "Back" button!
  const isInnerPage = [
    "/about", "/privacy", "/terms-conditions", "/contact",
    "/twister-spinner-rules", "/twister-spinner-symbols-meanings",
    "/how-to-make-twister-spinner-at-home", "/strip-twister-spinner-rules"
  ].includes(location);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close the mobile menu automatically when a link is clicked
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem("twisterLang", newLang);
    setLocation(newLang === "en" ? "/" : `/${newLang}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFF5F5] dark:bg-slate-950 border-b border-[#FED7D7] dark:border-slate-800 transition-colors duration-300 shadow-sm">
      <nav className="p-4 md:p-6 flex justify-between items-center max-w-[1200px] mx-auto">
        
        {/* LEFT SIDE: Logo & Desktop Links */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-[#C53030] dark:text-red-400 p-1"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Site Logo */}
          <Link href="/">
            <span className="text-xl font-bold text-[#C53030] dark:text-red-400 cursor-pointer shrink-0">
              Twister Spinner
            </span>
          </Link>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-sm font-semibold text-foreground/80 hover:text-[#C53030] dark:hover:text-red-400 transition-colors cursor-pointer">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
        
        {/* RIGHT SIDE: Lang, Theme, Back Button */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
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
              <button className="text-sm bg-white dark:bg-slate-900 hover:bg-red-50 dark:hover:bg-slate-800 text-[#C53030] dark:text-red-400 px-3 md:px-4 py-2 rounded-lg transition border border-[#FED7D7] dark:border-slate-800 font-medium flex items-center gap-1.5 shadow-sm shrink-0 cursor-pointer">
                <ChevronLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
              </button>
            </Link>
          )}
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#FED7D7] dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-4 shadow-lg absolute w-full">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="block text-base font-semibold text-foreground hover:text-[#C53030] dark:hover:text-red-400 transition-colors cursor-pointer">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
