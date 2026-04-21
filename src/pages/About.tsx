import React from 'react';
import { Link } from 'wouter';
import { Volume2, Zap, Users, ShieldCheck, ChevronLeft } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 transition-colors duration-300">
      {/* Navigation */}
      <nav className="p-4 md:p-6 border-b border-border flex justify-between items-center bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <Link href="/">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
            Twister Spinner
          </span>
        </Link>
        <Link href="/">
          <button className="text-sm bg-accent hover:bg-accent/80 text-foreground px-4 py-2 rounded-lg transition border border-border font-medium flex items-center gap-1.5 shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto py-12 md:py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight leading-tight">
          About Twister Spinner
        </h1>
        
        <div className="space-y-10 text-lg text-foreground/80 leading-relaxed">
          
          {/* Intro Section */}
          <div className="space-y-4">
            <p>
              It always happens at the worst moment. Someone's mid-pose, legs tangled, arms crossed, and nobody can find the spinner. Or the cardboard dial is bent and half the game turns into an argument about where it actually landed.
            </p>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-2xl">
              That's exactly why Twister Spinner exists.
            </p>
            <p>
              We built a free, voice-enabled digital Twister wheel that lives right in your browser. No app to download, no account to create, nothing to lose or break. You open it, hit spin, and keep playing.
            </p>
          </div>

          {/* Section with Icon */}
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-foreground">What Is a Twister Spinner?</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Twister Spinner is a free online random move generator built to replace the classic Twister game spinner once and for all. It covers all 16 standard limb-and-color combinations and announces each result out loud so players never have to break their pose just to check the screen.
            </p>
            <p className="text-muted-foreground">
              Whether you're at a birthday party, a family game night, a school event, or a casual hangout, it keeps the energy up and the arguments down.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Why We Built It</h2>
            <p>
              The original Twister spinner is a piece of cardboard with an arrow. It gets bent. It gets lost. It lands in the middle and starts debates. And someone always has to stop the whole game to crouch down and squint at it.
            </p>
            <p>
              We figured there had to be a better way, so we built one. A spinner that's perfectly fair, easy to read from across the room, and actually calls out the result so the person lying upside down in the corner can still hear what to do next.
            </p>
          </div>

          {/* Section with Icon */}
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Volume2 className="w-6 h-6 text-pink-500" />
              <h2 className="text-2xl font-bold text-foreground">What Makes It Different</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Voice announcements mean every result gets read aloud the moment the wheel stops. Connect to a speaker and the whole room hears it without anyone breaking position.
            </p>
            <p className="mb-4 text-muted-foreground">
              Every spin uses JavaScript's Math.random(), so each of the 16 combinations has an equal one-in-sixteen chance of landing. No bent arrows, no questionable calls, no drama.
            </p>
            <p className="text-muted-foreground">
              You can add two to six players and track turns automatically, or jump straight into solo play if you just want to spin without the scorekeeping. Fullscreen mode works great if you want to cast it to a TV, and the whole thing loads instantly on any phone, tablet, or laptop.
            </p>
          </div>

          {/* Section with Icon */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-foreground">Who Uses It</h2>
            </div>
            <p>
              Twister Spinner gets used at kids' birthday parties, PE classes, office team days, college dorm nights, bachelorette parties, and family reunions. Basically anywhere people want to laugh, move around, and get a little competitive.
            </p>
            <p>
              If you've played Twister in the past few years with a phone nearby, you already know the idea. We just made it work better.
            </p>
          </div>

          {/* Section with Icon */}
          <div className="bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">What We Promise</h2>
            </div>
            <p className="text-muted-foreground">
              Twister Spinner is free and will stay that way. We keep the experience clean, the ads minimal, and the randomness honest. Every result is genuinely random, every spin is fair, and we update the tool regularly based on what users actually ask for.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Part of the Twister Wheel Family</h2>
            <p>
              Twister Spinner is part of Twister Wheel, a growing collection of free online random tools built for games, classrooms, decisions, and everyday moments where you just need a quick fair answer. Every tool on the platform is built around the same idea: open it, use it, done.
            </p>
          </div>

          <div className="bg-card p-8 rounded-3xl border border-border text-center shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3">Have a suggestion?</h2>
            <p className="mb-6 text-muted-foreground">
              If something isn't working the way you'd expect, or you have an idea you'd love to see added, we want to hear it. This tool gets better because of the people who use it.
            </p>
            <p className="font-bold text-xl text-primary">
              Twister Spinner. Fair spins, loud calls, no cardboard required.
            </p>
          </div>

        </div>
      </div>

      <footer className="py-12 text-center border-t border-border text-muted-foreground text-sm">
        © 2026 Twister-Spinner.com
      </footer>
    </div>
  );
};

export default About;
