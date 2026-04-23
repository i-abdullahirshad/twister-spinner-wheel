import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HowToMakeTwisterSpinner = () => {
  useEffect(() => {
    document.title = "How to Make a Twister Spinner at Home - DIY Twister Spinner";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn how to make a DIY Twister spinner at home with cardboard or wood. A complete guide to building your own Twister game spinner.');
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
              How to Make a Twister Spinner at Home - DIY Twister Spinner
            </h1>
            <p>
              Lost your Twister spinner? Or maybe you're building the whole game from scratch for a party? 
              Either way, making a DIY Twister spinner at home is easier than it sounds - and it costs really less.
            </p>
            <p>
              This guide walks you through two methods: a simple paper version and a sturdier board version. 
              You'll also find tips on sizing, materials, and what to do if you'd rather skip the craft table altogether.
            </p>
          </div>

          {/* Digital Fallback Callout */}
          <div className="bg-[#FFF5F5] dark:bg-red-950/20 border border-[#FED7D7] dark:border-red-900/30 p-6 rounded-2xl">
            <p className="font-semibold text-foreground mb-3">
              If you're short on time - or just want a backup option - a free online Twister spinner works just as well as a physical one.
            </p>
            <p className="mb-3">
              The Twister Spinner at our website covers all 16 move combinations, announces results aloud, and works on any device. It's particularly useful when:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You're setting up a giant Twister game outdoors and want to hear the result clearly.</li>
              <li>The physical spinner gets damaged or lost mid-party.</li>
              <li>You want to avoid disputes over where the arrow landed.</li>
            </ul>
          </div>

          {/* Things You'll Need */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Things You'll Need to Make Twister Spinner</h2>
            <p>Before diving into the steps, here's a general list of what both methods use:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cardboard, cardstock, or a piece of plywood/drawing board</li>
              <li>A pencil or marker</li>
              <li>Ruler or compass</li>
              <li>Acrylic or tempera paint (Red, Blue, Yellow, Green)</li>
              <li>A brad fastener or nail (for the spinning arrow)</li>
              <li>Scissors or a craft knife</li>
              <li>A printed or hand-drawn arrow/needle</li>
            </ul>
          </div>

          {/* Method 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Method 1: Paper Twister Spinner (Quickest Option)</h2>
            <p>This is the fastest way to make a paper twister spinner. It’s great if you need something in under 30 minutes. You’ll need the following items:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>1 sheet of thick cardstock or cardboard (A4 or letter size works fine)</li>
              <li>Ruler and pencil</li>
              <li>Paint or colored markers (Red, Blue, Yellow, Green)</li>
              <li>A brad fastener</li>
              <li>Scissors</li>
              <li>A small strip of cardstock for the arrow</li>
            </ul>
            <p className="font-semibold mt-4">Here are the steps to make a paper twister spinner:</p>
            <ol className="list-decimal pl-5 space-y-3">
              <li><strong>Draw the spinner circle:</strong> Using a compass or tracing around a round object, draw a circle on your cardstock - aim for about 20–25 cm (8–10 inches) in diameter. The bigger, the easier it is to read.</li>
              <li>
                <strong>Divide it into sections:</strong> Draw two lines through the center to split the circle into 4 equal sections. Then draw two more lines to split each quarter into two, giving you 8 sections total - 4 for body parts, each repeated twice. Label them:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Left Hand</li>
                  <li>Right Hand</li>
                  <li>Left Foot</li>
                  <li>Right Foot</li>
                </ul>
              </li>
              <li><strong>Add the colors:</strong> Each body part needs to appear in all 4 colors. A standard Twister spinner has 16 sections (4 body parts × 4 colors). To fit all 16, divide the circle into 16 equal slices and paint or color each one. Use Red, Blue, Yellow, and Green.</li>
              <li><strong>Make the arrow:</strong> Cut a small arrow shape from a separate strip of cardstock. Push a brad fastener through the tip of the arrow and then through the center of the circle. The brad should be loose enough that the arrow spins freely.</li>
              <li><strong>Mount it:</strong> Glue or tape the spinner to a flat piece of cardboard for stability. Done.</li>
            </ol>
          </div>

          {/* Method 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Method 2: DIY Twister Spinner Board (Sturdier, Lasts Longer)</h2>
            <p>If you want something more durable - especially for a giant Twister setup or repeated use - build a homemade Twister spinner board on a solid base. You’ll need the following items:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A piece of plywood or thick MDF (around A4 size - roughly 21 × 30 cm)</li>
              <li>A nail or small screw</li>
              <li>A small bead or washer (to reduce friction under the arrow)</li>
              <li>Tempera or acrylic paint</li>
              <li>A printed or hand-cut arrow</li>
              <li>Sandpaper (optional, to smooth edges)</li>
            </ul>
            <p className="font-semibold mt-4">Here are the steps to make DIY Twister Spinner Board:</p>
            <ol className="list-decimal pl-5 space-y-3">
              <li><strong>Prepare the board:</strong> Cut your plywood to size if needed and sand the edges smooth. This will be your twister spinner board base.</li>
              <li><strong>Paint the color wheel:</strong> In the center of the board, paint a circular color wheel divided into 16 equal sections. Use the same four colors as the Twister mat - Red, Blue, Yellow, and Green - and label each slice with the correct body part.</li>
              <li><strong>Create hand and foot labels:</strong> Cut small hand and foot shapes from paper or cardstock. Paint or label them to indicate which limb is which, and glue them onto the matching sections.</li>
              <li><strong>Add left/right labels:</strong> Don't skip writing "Left" and "Right" on the spinner. It seems obvious, but mid-games genuinely cause confusion.</li>
              <li><strong>Attach the needle:</strong> Place a small bead or washer on the nail before pushing it through the center of the board. This reduces friction and makes the arrow spin more smoothly. Attach your arrow shape over the nail, loose enough to spin freely.</li>
              <li><strong>Seal it (optional):</strong> If you want it to last, seal the painted surface with a clear varnish or mod podge. This protects the paint from wear.</li>
            </ol>
          </div>

          {/* Giant Spinner */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">How to Make a Giant Twister Spinner</h2>
            <p>If you're setting up a giant Twister game in the backyard - with a large mat for adults - you'll want a giant Twister spinner to match. The process is the same as Method 2, just scaled up. Here are the items & tips for going big:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use a larger piece of plywood - 40–50 cm works well for a big Twister color spinner that's easy to read from a distance.</li>
              <li>Use bold, thick paint strokes so the colors are visible across the mat.</li>
              <li>Use a longer arrow - a wooden skewer or thin dowel rod works well.</li>
              <li>Mount it on a post or prop it up against something so players don't have to crouch down to spin.</li>
            </ul>
            <p className="font-semibold mt-4">If you're building the whole game, you'll need a mat too. Here's a quick overview:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Material:</strong> Canvas drop cloth or a large cotton bed sheet works best. Canvas holds paint better and doesn't bunch up on the floor.</li>
              <li><strong>Size:</strong> A standard Twister mat is approximately 55 × 67 inches (140 × 170 cm). This suits 3–4 players comfortably.</li>
              <li><strong>Circles:</strong> Use paper plates as stencils to trace and paint the dots. You'll need 4 rows of 6 circles - 24 circles total - in four colors.</li>
              <li><strong>Paint:</strong> Use acrylic paint mixed with textile medium. The textile medium stops the paint from cracking when the canvas is folded.</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 pt-6 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">What size is the Twister spinner board?</h3>
                <p>The original Twister spinner board is roughly 6 inches (15 cm) in diameter - small enough to hold in one hand. For a homemade version, going slightly bigger (20–25 cm) makes it easier to read. If you're playing with a giant Twister setup, scale it up to 40–50 cm so players can read it from across the mat.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">How many sections does a Twister spinner have?</h3>
                <p>A standard Twister spinner has 16 sections - 4 body parts (Left Hand, Right Hand, Left Foot, Right Foot) each paired with 4 colors (Red, Blue, Yellow, Green).</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">What's the best material for a homemade Twister spinner?</h3>
                <p>Cardstock or cardboard works fine for a paper Twister spinner that you'll use once or twice. For something more durable, use a piece of thin plywood or MDF as the base. Both options are cheap and easy to find.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">Can I laminate a paper Twister spinner?</h3>
                <p>Yes - laminating your paper spinner makes it significantly more durable and gives the arrow a smoother surface to spin on. Run it through a laminator before attaching the brad fastener.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">What paint should I use?</h3>
                <p>Acrylic paint works well for both the spinner and the mat. If you're painting fabric, mix in a textile medium to keep the paint flexible and prevent cracking over time.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">How do I make the arrow spin smoothly?</h3>
                <p>Place a small bead, washer, or nut between the arrow and the board before attaching it with the nail or brad. This lifts the arrow slightly off the surface and reduces friction, letting it spin freely.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-1">Do I need all 4 colors?</h3>
                <p>Yes. The four colors - Red, Blue, Yellow, and Green - are what make the game work. Each color corresponds to a specific spot on the mat, so leaving one out breaks the game logic.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowToMakeTwisterSpinner;
