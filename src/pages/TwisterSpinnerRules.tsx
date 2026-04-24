import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TwisterSpinnerRules = () => {
  useEffect(() => {
    // Dynamically sets the SEO Title and Description
    document.title = "Twister Spinner Rules - How to Play Twister Step by Step";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn the official Twister spinner rules, how to set up the game for 2 to 4 players, and how to win. A complete step-by-step guide to playing Twister.');
    }
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary/30">
      <Navbar />

      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 pt-8 pb-16">
        <div className="bg-card border border-border p-6 md:p-10 rounded-3xl space-y-8 text-foreground/80 leading-relaxed text-sm md:text-base shadow-sm">
          
          {/* Header Section */}
          <div className="space-y-4 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
              Twister Spinner Rules - How to Play Twister Step by Step
            </h1>
            <p>
              Twister is one of those games that looks simple until you're three moves in with one hand behind your back and your left foot on the opposite end of the mat. The rules are actually straightforward - the spinner decides everything, and the last person standing wins.
            </p>
            <p>
              Here's a full breakdown of the rules, how the spinner works, player setups, and what gets you eliminated.
            </p>
          </div>

          {/* How to Play Setup */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">How to Play Twister Spinner?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>The Twister mat - spread flat on the floor, indoors or outdoors</li>
              <li>A Twister spinner (physical or digital)</li>
              <li>2 to 6 players</li>
              <li>A referee - someone who spins and calls out moves (not a player)</li>
            </ul>
            <p>
              The spinner is what drives the entire game. Every turn, the referee spins the wheel and wherever the arrow lands tells everyone what move to make next.
            </p>
            <p className="font-semibold mt-4">The spinner picks two things at once:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A body part - Left Hand, Right Hand, Left Foot, or Right Foot</li>
              <li>A color - Red, Blue, Yellow, or Green</li>
            </ul>
            <p>
              The referee calls it out loud - for example: "Left foot, yellow!" - and every player on the mat follows that instruction at the same time.
            </p>
          </div>

          {/* Digital Spinner Callout */}
          <div className="bg-[#FFF5F5] dark:bg-red-950/20 border border-[#FED7D7] dark:border-red-900/30 p-6 rounded-2xl space-y-3">
            <p>
              If you're using the online Twister spinner at twister-spinner.com, the wheel announces the result aloud automatically, so the referee doesn't even need to read it - just spin and listen. It covers all 16 standard move combinations, announces results aloud, and works on any device.
            </p>
            <p className="font-semibold">A few reasons to use it during a game:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Voice announcements mean the referee doesn't have to shout across the mat</li>
              <li>Fullscreen mode lets everyone see the result on a TV or shared screen</li>
              <li>Adjustable spin speed - Slow for suspense, Fast to keep things moving</li>
              <li>No broken dial - the physical spinner is famously fragile; the digital version never jams mid-game</li>
            </ul>
          </div>

          {/* Important Rule Note */}
          <div className="bg-muted/40 border-l-4 border-primary p-4 rounded-r-xl">
            <p>
              <strong className="text-foreground">NOTE:</strong> If every circle of the called color is already covered by players' hands or feet, the referee spins again until a different color comes up. Play doesn't stop - it just continues until a valid move is available.
            </p>
          </div>

          {/* Starting Positions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Starting Positions by Number of Players</h3>
            <p>How players position themselves at the start depends on how many people are playing.</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card border border-border p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-foreground mb-2">2 Players:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Face each other from opposite ends of the mat</li>
                  <li>Each player places one foot on the yellow circle and the other foot on the blue circle closest to their end</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-foreground mb-2">3 Players:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Two players face each other from opposite ends (same as 2-player start)</li>
                  <li>The third player faces the center from the red-circle side, placing one foot on each of the two middle red circles</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-foreground mb-2">4 Players (Team Mode):</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Form 2 teams of 2</li>
                  <li>Each team stands side-by-side at opposite ends, with each foot on a circle - all 4 circles nearest the Twister logo should be covered at the start</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Rules */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground">Core Rules of the Game</h2>
            <p>These apply in every game mode:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Place the called body part on a vacant circle of the called color. If the called color is already occupied by your own hand or foot, move it to a different circle of the same color.</li>
              <li>Only one hand or foot per circle at a time. If two players reach for the same circle, the referee decides who got there first - the other player finds another vacant circle of the same color.</li>
              <li>Never lift a hand or foot from a circle unless directed by the spinner. The one exception: you may briefly lift a limb to let another limb pass, but you must tell the referee beforehand and replace it immediately after.</li>
              <li>Elbows and knees must stay off the mat at all times. The moment one touches down, that player is out.</li>
            </ul>
          </div>

          {/* Game Variations */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Team Play (4 Players)</h3>
              <p>Team Twister plays the same as the standard game with one key difference: teammates can share a circle. Two members of the same team can each place one hand or foot on the same circle - something that's off-limits in solo play.</p>
              <p>When any player on a team falls or touches the mat with an elbow or knee, the entire team is eliminated - not just that individual. The other team wins.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Playing Without a Referee (2 Players Only)</h3>
              <p>No referee available? This format works for 2-player games only.</p>
              <p>Instead of using the spinner, one player calls out the body part and the other calls out the color. Players alternate who calls the body part each turn. Everything else stays the same.</p>
              <p>Or, use a digital spinner - one player taps to spin and the result is called out automatically. No back-and-forth needed.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Party Game Variations</h3>
              <p>If you have a bigger group and want to run a tournament-style session, here are two formats that work well:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/20 border border-border p-4 rounded-xl">
                  <h4 className="font-bold text-foreground mb-2">Round Robin</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Form several 2-player teams</li>
                    <li>Each team plays every other team once</li>
                    <li>Track wins and losses - the team with the most wins takes it</li>
                  </ul>
                </div>
                <div className="bg-muted/20 border border-border p-4 rounded-xl">
                  <h4 className="font-bold text-foreground mb-2">Elimination Bracket</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Form several 2-player teams</li>
                    <li>Losing teams are out; winning teams keep playing each other</li>
                    <li>The last undefeated team wins the whole thing</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm italic">Both formats work well for parties with 6–12 people, keeping everyone rotating in and out rather than watching from the sidelines.</p>
            </div>
          </div>

          {/* How to Win */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground">How to Win & How You Get Eliminated</h2>
            <p>Be the last player on the mat. Every other player has either fallen, touched down with an elbow or knee, or eliminated themselves. You win.</p>
            <p className="font-semibold">A player is out the instant any of the following happens:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>They fall - any part of the body other than hands and feet touches the mat</li>
              <li>Their elbow or knee touches the mat, even briefly</li>
              <li>They can't complete the called move without falling - in this case, a player can choose to eliminate themselves rather than attempt an impossible position</li>
            </ul>
            <p>In a 2-player game, the game ends the moment one player falls. In a 3-player game, the two remaining players keep going until one is left.</p>
          </div>

          {/* Quick Rules Table */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Quick Rules Reference</h2>
            <div className="overflow-hidden border border-border rounded-xl shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-muted text-foreground">
                  <tr>
                    <th className="p-4 font-bold border-b border-border w-1/2">Situation</th>
                    <th className="p-4 font-bold border-b border-border w-1/2">Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Arrow lands on a fully occupied color</td>
                    <td className="p-4">Referee spins again</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Two players reach the same circle</td>
                    <td className="p-4">Referee decides; other player finds another circle</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Your own hand/foot already on the called color</td>
                    <td className="p-4">Move it to a different circle of the same color</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Elbow or knee touches the mat</td>
                    <td className="p-4">Eliminated immediately</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">You fall</td>
                    <td className="p-4">Eliminated immediately</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Team play - same circle</td>
                    <td className="p-4">Teammates may share one circle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TwisterSpinnerRules;
