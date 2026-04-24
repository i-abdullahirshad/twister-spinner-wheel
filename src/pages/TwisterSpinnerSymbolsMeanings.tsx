import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TwisterSpinnerSymbolsMeanings = () => {
  useEffect(() => {
    // Dynamically sets the SEO Title and Description when the page loads
    document.title = "Twister Spinner Symbols & Their Meanings - Twister Shapes Explained";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover what the symbols and shapes on a Twister spinner mean. Learn about the classic 16 moves, the purple cloud (Air), and the T (Spinner\'s Choice).');
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
              Twister Spinner Symbols & Their Meanings - Twister Shapes Explained
            </h1>
            <p>
              If you've ever looked at a Twister spinner and wondered what the purple cloud or the "T" symbol actually means - you're not alone. The classic Twister spinner has been updated over the years, and newer versions include extra symbols that aren't explained in the most obvious places.
            </p>
            <p>
              This guide breaks down every symbol and shape on the Twister spinner, what they mean, and how they change the game.
            </p>
          </div>

          {/* Classic Spinner Symbols */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">The Classic Twister Spinner Symbols</h2>
            <p>
              The original Twister spinner is divided into sections that cover two things: a body part and a color. The arrow lands on a section, and the caller reads the result aloud - for example, "Right foot, blue!"
            </p>
            <p className="font-semibold mt-4">The Four Body Parts - Every section on the standard spinner belongs to one of these four:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Left Hand</li>
              <li>Right Hand</li>
              <li>Left Foot</li>
              <li>Right Foot</li>
            </ul>
            <p className="font-semibold mt-4">The Four Colors - Each body part appears four times on the spinner - once for each color:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Red</li>
              <li>Blue</li>
              <li>Yellow</li>
              <li>Green</li>
            </ul>
            <p className="mt-2">
              That gives you 16 total sections (4 body parts × 4 colors), which match the 24 colored circles on the Twister mat (6 circles per color).
            </p>
          </div>

          {/* Purple Symbols */}
          <div className="space-y-6 bg-muted/30 p-6 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold text-foreground">The Newer Twister Spinner Shapes - Purple Symbols Explained</h2>
            <p>
              More recent versions of Twister added two extra symbols to the spinner, both shown in purple. These are the twister spinner shapes that tend to confuse new players the most. Here's exactly what they mean.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#805AD5] dark:text-[#B794F4]">The Purple Cloud - "Air" Move</h3>
              <p>The cloud symbol represents a move called "Air." <strong>When the arrow lands on the purple cloud, the player must lift the named body part up in the air</strong> instead of placing it on a colored circle on the mat.</p>
              <p className="font-semibold">How it works:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The caller reads the section normally - body part first, then the cloud symbol</li>
                <li>Example: "Left hand - air!"</li>
                <li>The player raises their left hand off the mat and holds it in the air</li>
                <li>They must maintain that position while staying balanced on their remaining limbs</li>
              </ul>
              <p className="text-sm italic mt-2">This move is deceptively difficult. Lifting a hand or foot while staying stable in an already awkward position is a fast way to topple. It adds a real physical challenge without needing any extra mat space.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-border/50">
              <h3 className="text-xl font-bold text-[#805AD5] dark:text-[#B794F4]">The Purple T - "Spinner's Choice"</h3>
              <p>The T symbol stands for "Spinner's Choice." <strong>When the arrow lands on this section, the person spinning the wheel gets to invent the move themselves</strong> - they can choose any body part, any color (or "air"), and add an extra action on top.</p>
              <p className="font-semibold">How it works:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The spinner picks a body part and a color or air command</li>
                <li>They can also add a silly or challenging second action</li>
                <li>The called player must do both at once</li>
              </ul>
              <p className="font-semibold mt-3">Example calls using Spinner's Choice:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>"Right foot green - and sing two words of any song!"</li>
                <li>"Left hand air - and wink three times!"</li>
                <li>"Right hand blue - and moo like a cow!"</li>
              </ul>
              <p className="text-sm italic mt-2">The back of the physical Twister spinner board includes a printed list of suggested Spinner's Choice actions, but you're free to make up your own. The goal is to make the move funnier, harder, or more ridiculous - ideally causing the player to lose their balance.</p>
            </div>
          </div>

          {/* Table Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">All Twister Spinner Symbols at a Glance</h2>
            <div className="overflow-hidden border border-border rounded-xl shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-muted text-foreground">
                  <tr>
                    <th className="p-4 font-bold border-b border-border">Symbol</th>
                    <th className="p-4 font-bold border-b border-border">Color</th>
                    <th className="p-4 font-bold border-b border-border">What It Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Left Hand</td>
                    <td className="p-4">Red / Blue / Yellow / Green</td>
                    <td className="p-4">Place left hand on that color circle</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Right Hand</td>
                    <td className="p-4">Red / Blue / Yellow / Green</td>
                    <td className="p-4">Place right hand on that color circle</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Left Foot</td>
                    <td className="p-4">Red / Blue / Yellow / Green</td>
                    <td className="p-4">Place left foot on that color circle</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Right Foot</td>
                    <td className="p-4">Red / Blue / Yellow / Green</td>
                    <td className="p-4">Place right foot on that color circle</td>
                  </tr>
                  <tr className="hover:bg-purple-500/10 transition-colors">
                    <td className="p-4 font-semibold text-[#805AD5] dark:text-[#B794F4]">Cloud</td>
                    <td className="p-4">Purple</td>
                    <td className="p-4">Lift named body part into the air</td>
                  </tr>
                  <tr className="hover:bg-purple-500/10 transition-colors">
                    <td className="p-4 font-semibold text-[#805AD5] dark:text-[#B794F4]">T</td>
                    <td className="p-4">Purple</td>
                    <td className="p-4">Spinner invents the move (Spinner's Choice)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Digital Spinner context & Ideas */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Does the Online Twister Spinner Include These Symbols?</h2>
            <p>
              The standard digital Twister spinner - including the one at twister-spinner.com - covers the classic 16-section format: all four body parts across all four colors. This matches the original game setup and works for most versions of Twister.
            </p>
            <p>
              The purple cloud and T symbols are specific to the updated physical board game edition by Hasbro. If you're playing the classic version - or using an online spinner - you'll be using the original 16 combinations, which is how most people play anyway.
            </p>
            
            <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-3">Fun Spinner's Choice Ideas to Use Mid-Game</h3>
              <p className="mb-3">If the arrow lands on the T and you're stuck for ideas, here's a list to pull from:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>And clap your hands once</li>
                <li>And say the name of everyone on the mat</li>
                <li>And count backwards from 5 out loud</li>
                <li>And make a robot noise</li>
                <li>And flap one arm like a chicken</li>
                <li>And yell "TWIST!" as loud as you can</li>
                <li>And slowly spin your free hand in a circle</li>
                <li>And whistle (or try to)</li>
                <li>And say your own name three times fast</li>
                <li>And do a fake sneeze</li>
              </ul>
              <p className="italic mt-4 text-sm">The sillier the better - the point is to break focus and make balance harder.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 pt-6 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">What does the T mean on the Twister spinner?</h3>
                <p>The T stands for "Spinner's Choice." When the arrow lands on it, the person spinning the wheel gets to decide the move - choosing the body part, the color or air position, and often adding a funny extra action. It's one of two purple symbols added to newer versions of the Twister game.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">What does the purple cloud mean on the Twister spinner?</h3>
                <p>The purple cloud represents the "Air" move. The player must lift the named body part (hand or foot) off the mat and hold it in the air instead of placing it on a colored circle.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">How many symbols are on a Twister spinner?</h3>
                <p>The classic Twister spinner has 16 sections - 4 body parts × 4 colors. Newer versions add 2 extra purple symbols (the cloud and the T), bringing the total to 18 sections.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">Are the purple symbols on every Twister spinner?</h3>
                <p>No. The cloud and T symbols appear on newer editions of the physical Twister game by Hasbro. Older versions and most digital spinners use only the classic 16-section format.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">Can you play Twister without the spinner?</h3>
                <p>Yes. You can use a free online Twister spinner at twister-spinner.com, which randomly generates moves from all 16 classic combinations and announces them aloud - so no one has to stop mid-game to check the result.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TwisterSpinnerSymbolsMeanings;
