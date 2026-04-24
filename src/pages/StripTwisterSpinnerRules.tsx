import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StripTwisterSpinnerRules = () => {
  useEffect(() => {
    // Dynamically sets the SEO Title and Description
    document.title = "Strip Twister Rules - How to Play Strip Twister with a Spinner";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn the rules for Strip Twister, the adult party game variant. A complete guide on gameplay, the Red Rule, starting clothing counts, and group play.');
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
              Strip Twister Rules - How to Play Strip Twister with a Spinner
            </h1>
            <p>
              Strip Twister is an adult party game variant of the classic Twister. It follows the same basic structure - mat, spinner, awkward positions - but adds a clothing-removal element that raises the stakes with every spin. The result is a game that's equal parts physical challenge and social dare.
            </p>
            <p>
              This guide covers how Strip Twister works, the specific rule changes from standard Twister, and tips for running a fair, fun, and comfortable game.
            </p>
            
            {/* 18+ Warning Callout */}
            <div className="mt-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-4 rounded-r-xl">
              <p className="text-orange-900 dark:text-orange-200">
                <strong>Note:</strong> Strip Twister is strictly an adult game (18+). It should only be played among consenting adults in a private setting where everyone is comfortable with the format before the game starts.
              </p>
            </div>
          </div>

          {/* How It Differs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">How Strip Twister Differs From Regular Twister</h2>
            <p>
              The core gameplay is identical to standard Twister - the spinner picks a body part and a color, and players race to place that limb on the correct circle without falling. What changes are the conditions that trigger clothing removal.
            </p>
            <p>
              In regular Twister, nothing happens between spins except more contortion. In Strip Twister, certain spinner results mean players have to shed a layer - while still holding their position on the mat.
            </p>
            
            <p className="font-semibold mt-4">Here’s what you need in strip twister spinner game:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A Twister mat - spread flat on the floor in a private indoor space</li>
              <li>A Twister spinner (physical or digital - the online spinner at twister-spinner.com works perfectly)</li>
              <li>2 or more adult players, ideally an even number</li>
              <li>A referee who spins and calls results - they are not a player</li>
              <li>Everyone starts wearing the same number of clothing items - 5 or 6 is the standard. More items if your group prefers a longer, more gradual game.</li>
            </ul>
          </div>

          {/* Digital Spinner Callout */}
          <div className="bg-[#FFF5F5] dark:bg-red-950/20 border border-[#FED7D7] dark:border-red-900/30 p-6 rounded-2xl space-y-3">
            <p>
              The online Twister spinner at twister-spinner.com works seamlessly for Strip Twister. It randomly lands on all 16 standard combinations, and when it hits red - for any body part - that's your cue for the clothing rule to kick in.
            </p>
            <p className="font-semibold">Features that make it useful for this format:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Voice announcements - the result is called out automatically, so the referee stays focused on the mat</li>
              <li>Fullscreen mode - everyone can see the result without crowding around a phone</li>
              <li>Mute option - turn off sound if you want a quieter, more private atmosphere</li>
              <li>Adjustable speed - slow the spin down to build tension before the result lands</li>
            </ul>
          </div>

          {/* Core Rules Section */}
          <div className="space-y-8 pt-6 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground">Strip Twister Core Rules</h2>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">1. Agree on Starting Clothing Count</h3>
              <p>Before the game begins, everyone counts and agrees on how many items of clothing they're wearing. Five or six items is the typical starting point.</p>
              <p className="font-semibold">What counts as one item:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Shirt or top</li>
                <li>Pants or skirts</li>
                <li>Socks (each sock counts separately)</li>
                <li>Shoes (already removed - don't count these)</li>
                <li>Jacket or hoodie</li>
                <li>Belt</li>
                <li>Underwear</li>
              </ul>
              <p className="text-sm italic mt-2">Everyone must start with the same number of items. If someone is wearing more, they remove the extras before the game starts. Anyone caught hiding extra layers during the game must immediately remove the extra item - plus one more as a penalty.</p>
            </div>

            <div className="space-y-3 bg-muted/30 p-5 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-[#C53030] dark:text-red-400">2. The Red Rule - When Clothing Comes Off</h3>
              <p>This is the core rule that separates Strip Twister from the regular game:</p>
              <p className="font-bold text-lg">Whenever the spinner lands on a red section, both players in that round must remove one item of clothing.</p>
              <p className="font-semibold mt-3">Key points about how this works:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The normal move happens first - players place the called body part on its circle</li>
                <li>Only after completing the move does clothing removal take place</li>
                <li><strong>This matters:</strong> players who feel the game has gone too far can simply fall down before the clothing removal step. Falling means you're out, but you don't have to remove the item.</li>
                <li>To remove clothing, only one hand or foot may be lifted from the mat at a time. It must be placed back on its original spot immediately, before lifting any other limb.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">3. Gameplay Turn by Turn</h3>
              <p className="font-semibold">Here's how a typical round flows:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Referee spins the Twister spinner</li>
                <li>Referee calls the result - body part and color (e.g., "Left hand, red!")</li>
                <li>All players move their called limb to a vacant circle of the called color</li>
                <li>If the color is red - both players remove one clothing item after completing the move</li>
                <li>If the color is not red - standard Twister rules apply, no clothing removed</li>
                <li>Any player who falls, touches a knee or elbow to the mat, or can't complete the move is eliminated</li>
                <li>Repeat until one player remains</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">4. Clothing Removal - Practical Rules</h3>
                <p>Removing a layer while holding a position on the mat is harder than it sounds. Here's how it works fairly:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You may lift one hand or foot at a time to remove clothing</li>
                  <li>The lifted limb goes back to its spot before the next limb is moved</li>
                  <li>The referee watches to confirm this is done correctly</li>
                  <li>If you need help (e.g., removing something over your head), your opponent must wait - no moving until clothing removal is complete</li>
                  <li>Once an item is removed, it stays off for the rest of the game</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">5. Cheating Penalties</h3>
                <p>The rules are simple but specific about fairness:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Wearing extra hidden clothing</strong> - if caught, the player must immediately remove the extra item plus one additional item as a penalty</li>
                  <li><strong>Refusing a red-spin removal</strong> - the player is eliminated from the game</li>
                  <li><strong>Lifting two limbs at once during clothing removal</strong> - the referee calls it out; the player must redo the removal correctly or be eliminated</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">6. Winning the Game</h3>
              <p>The winner is determined by the same rules as standard Twister - last player on the mat without falling or touching down with a knee or elbow. How much clothing a player is wearing at the end doesn't affect who wins. You can be down to your last item and still win if your opponent falls first.</p>
            </div>
          </div>

          {/* Group Play & Tips */}
          <div className="space-y-6 pt-6 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground">Playing in Groups - Team Format</h2>
            <p>Strip Twister works best with an even number of players. A common format for larger groups:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground">Same-gender rounds first:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Players compete in same-gender elimination rounds</li>
                  <li>Winners from each group then face off in a mixed final round</li>
                  <li>This keeps early rounds focused and lets others watch without distraction</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground">Couple teams:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Form man/woman pairs</li>
                  <li>Each partner competes in their gender's bracket</li>
                  <li>If both members of the same team win their brackets, they play a final round between themselves to crown a team champion</li>
                  <li>If the two winners are from different teams, they play a mixed final</li>
                </ul>
              </div>
            </div>
            <p className="text-sm italic">This format keeps the game organized and gives everyone a clear structure to follow rather than a chaotic free-for-all.</p>
          </div>

          <div className="space-y-4 bg-primary/5 p-6 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-3">Tips for a Better Game</h3>
            <p className="mb-3">A few things that make Strip Twister run more smoothly and comfortably:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Set ground rules before starting.</strong> Decide together what counts as a clothing item, confirm everyone is comfortable, and agree on any limits upfront.</li>
              <li><strong>Designate a clear referee.</strong> Someone needs to be neutral, spin consistently, and watch for rule violations. The game falls apart without one.</li>
              <li><strong>Use more clothing items for a longer game.</strong> Starting with 8–10 items instead of 5–6 means more spins before things escalate - better for groups who want to ease into it.</li>
              <li><strong>Use a digital spinner.</strong> The Twister spinner at twister-spinner.com handles the spinning and calls out results aloud - useful when the referee's hands are already occupied watching the mat.</li>
              <li><strong>Play on a non-slip surface.</strong> Socks on hardwood floors are a recipe for someone going down before the spinner even gets interesting. Carpet or a yoga mat under the Twister mat helps.</li>
              <li><strong>Have a clear exit option.</strong> Any player should be able to tap out at any point with no pressure. The falling-before-removal rule already builds this in - make sure everyone knows it from the start.</li>
            </ul>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StripTwisterSpinnerRules;
