import React from 'react';
import { Link } from 'wouter';
import { Volume2, Zap, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#1a1a1a]">
        <Link href="/">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent cursor-pointer">
            Twister Spinner
          </span>
        </Link>
        <Link href="/">
          <button className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition border border-gray-700 text-white font-medium">
            Back to Wheel
          </button>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto py-16 px-6">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            About Twister Spinner
          </h1>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              It always happens at the worst moment. Someone's mid-pose, legs tangled, arms crossed, and nobody can find the spinner. Or the cardboard dial is bent and half the game turns into an argument about where it actually landed.
            </p>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-xl">
              That's exactly why Twister Spinner exists.
            </p>
            <p>
              We built a free, voice-enabled digital Twister wheel that lives right in your browser. No app to download, no account to create, nothing to lose or break. You open it, hit spin, and keep playing.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">What Is a Twister Spinner?</h2>
            <p className="text-gray-400 leading-relaxed border-l-2 border-purple-500 pl-4">
              Twister Spinner is a free online random move generator built to replace the classic Twister game spinner once and for all. It covers all 16 standard limb-and-color combinations and announces each result out loud so players never have to break their pose just to check the screen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold text-pink-400 mb-3">Why We Built It</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                The original Twister spinner is a piece of cardboard with an arrow. It gets bent. It gets lost. And someone always has to stop the whole game to crouch down and squint at it. We built a spinner that's perfectly fair, easy to read, and actually calls out the result.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold text-purple-400 mb-3">Who Uses It</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Used at kids' birthday parties, PE classes, office team days, college dorm nights, and family reunions. Basically anywhere people want to move around and get a little competitive.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">What Makes It Different</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Volume2 className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Voice Calls</h3>
                <p className="text-xs text-gray-500">Announces results so you never break your pose.</p>
              </div>
              <div className="text-center p-4">
                <Zap className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Fair Randomness</h3>
                <p className="text-xs text-gray-500">True 1-in-16 odds using modern JavaScript.</p>
              </div>
              <div className="text-center p-4">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Player Tracking</h3>
                <p className="text-xs text-gray-500">Add 2–6 players and track turns automatically.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-3xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Our Promise</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Twister Spinner is free and will stay that way. We keep the experience clean, the ads minimal, and the randomness honest.
            </p>
            <div className="flex items-center gap-3 text-purple-400 font-bold">
              <ShieldCheck className="w-5 h-5" />
              <span>Part of the Twister Wheel Family</span>
            </div>
          </div>

          <div className="text-center py-8">
            <h2 className="text-xl font-bold text-white mb-2">Have a suggestion?</h2>
            <p className="text-gray-400 mb-6 italic">This tool gets better because of the people who use it.</p>
            <Link href="/contact">
              <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/5">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </div>

      <footer className="py-12 text-center border-t border-gray-800 text-gray-600 text-xs">
        Twister Spinner · Fair spins, loud calls, no cardboard required.
      </footer>
    </div>
  );
};

export default About;
