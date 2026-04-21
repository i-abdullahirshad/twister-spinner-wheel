import React from 'react';
import { Mail } from 'lucide-react';
import Navbar from '../components/Navbar';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 transition-colors duration-300">
      {/* Dynamic Navigation Bar */}
      <Navbar />

      <div className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
          Contact Us
        </h1>
        
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            We're a small team and we read every message personally. Whether you've found a bug, have a feature idea, or just want to share some feedback, we'd genuinely love to hear from you.
          </p>

          <div className="bg-card p-8 rounded-3xl border border-border flex flex-col sm:flex-row items-center gap-6 my-10 shadow-sm">
            <div className="p-4 bg-primary/10 rounded-full shrink-0">
              <Mail className="text-primary w-8 h-8" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-foreground font-bold text-xl mb-1">Reach us anytime at</p>
              <a href="mailto:thespinnerwheel@gmail.com" className="text-primary font-bold text-lg hover:opacity-80 transition-opacity underline underline-offset-4">
                thespinnerwheel@gmail.com
              </a>
              <p className="text-muted-foreground text-sm mt-2">and we'll get back to you within one to two business days.</p>
            </div>
          </div>

          <p>
            When reporting a bug, it helps to mention your device, browser, and what you were doing when the issue happened. That way we can fix it faster.
          </p>
          
          <p className="pt-6 font-semibold text-foreground text-xl">
            Thanks for using Twister Spinner. Every message helps us make it better.
          </p>
        </div>
      </div>

      <footer className="py-12 text-center border-t border-border text-muted-foreground text-sm">
        © 2026 Twister-Spinner.com
      </footer>
    </div>
  );
};

export default ContactUs;
