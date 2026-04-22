import React from 'react';
import { useLocation } from 'wouter';

const Footer = () => {
  const [, setLocation] = useLocation();

  return (
    <footer className="w-full py-8 border-t border-border mt-auto bg-background transition-colors duration-300">
      <div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 Twister-Spinner.com</p>
        
        <div className="flex gap-4 md:gap-6 font-medium flex-wrap justify-center">
          <button onClick={() => setLocation("/about")} className="hover:text-primary transition-colors">
            About Us
          </button>
          <button onClick={() => setLocation("/privacy")} className="hover:text-primary transition-colors">
            Privacy Policy
          </button>
          <button onClick={() => setLocation("/terms-conditions")} className="hover:text-primary transition-colors">
            Terms & Conditions
          </button>
          <button onClick={() => setLocation("/contact")} className="hover:text-primary transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
