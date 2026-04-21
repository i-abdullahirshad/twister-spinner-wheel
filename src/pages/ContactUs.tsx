import React from 'react';
import { Link } from 'wouter';
import { Mail, MessageSquare, Globe } from 'lucide-react';
import Navbar from '../components/Navbar'; // <-- Add this!

const ContactUs = () => {
  return (
  <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 transition-colors duration-300">
  <Navbar />

      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have questions about the spinner or feedback to share? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 flex items-start gap-4 transition-transform hover:scale-[1.02]">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Mail className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Email Us</h3>
                <p className="text-gray-400 text-sm">Our team will get back to you within 24 hours.</p>
                <p className="text-purple-400 font-medium mt-2">thespinnerwheel@gmail.com</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 flex items-start gap-4 transition-transform hover:scale-[1.02]">
              <div className="p-3 bg-pink-500/10 rounded-xl">
                <Globe className="text-pink-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Website</h3>
                <p className="text-gray-400 text-sm">The world's best Twister decision tool.</p>
                <p className="text-pink-400 font-medium mt-2">www.twister-spinner.com</p>
              </div>
            </div>
          </div>

          {/* Simple Info Box */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-3xl border border-purple-500/20 flex flex-col justify-center items-center text-center">
            <MessageSquare className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Join the Fun</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Twister Spinner is built for parties and fun. If you're experiencing a bug or have a suggestion for a new feature (like more colors or limbs!), don't hesitate to reach out.
            </p>
          </div>
        </div>
      </div>

      <footer className="py-12 text-center border-t border-gray-800 text-gray-600 text-xs">
        © 2026 Twister-Spinner.com · Built for game nights.
      </footer>
    </div>
  );
};

export default ContactUs;
