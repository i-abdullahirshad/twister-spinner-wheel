import React from 'react';
import { useLocation } from 'wouter';

const Footer = () => {
  const [, setLocation] = useLocation();

  return (
    <footer className="w-full py-8 border-t border-[#FED7D7] dark:border-slate-800 mt-auto bg-[#FFF5F5] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#C53030]/80 dark:text-red-400/80">
        <p>© 2026 Twister-Spinner.com</p>
        
        <div className="flex gap-4 md:gap-6 font-medium flex-wrap justify-center">
          <button 
            onClick={() => setLocation("/about")} 
            className="hover:text-[#C53030] dark:hover:text-red-300 transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => setLocation("/privacy")} 
            className="hover:text-[#C53030] dark:hover:text-red-300 transition-colors"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => setLocation("/terms-conditions")} 
            className="hover:text-[#C53030] dark:hover:text-red-300 transition-colors"
          >
            Terms & Conditions
          </button>
          <button 
            onClick={() => setLocation("/contact")} 
            className="hover:text-[#C53030] dark:hover:text-red-300 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
