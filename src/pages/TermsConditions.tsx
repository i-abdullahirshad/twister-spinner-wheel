import React from 'react';
import { Link } from 'wouter';
import Navbar from '../components/Navbar'; // <-- Add this!

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 transition-colors duration-300">
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-6 leading-relaxed">
        <h1 className="text-4xl font-black text-white mb-2">Terms and Conditions</h1>
        <p className="text-gray-400 mb-8 italic text-sm text-muted-foreground uppercase tracking-widest">Last updated: April 21, 2026</p>

        <section className="space-y-8 text-sm md:text-base">
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-gray-800 pb-2">Interpretation and Definitions</h2>
            <h3 className="text-xl font-semibold text-white mb-2">Interpretation</h3>
            <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Definitions</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
              <li><strong>Company:</strong> Refers to Twister Spinner.</li>
              <li><strong>Country:</strong> Pakistan</li>
              <li><strong>Service:</strong> Refers to the Website.</li>
              <li><strong>Website:</strong> <a href="https://twister-spinner.com/" className="text-pink-500 hover:underline">https://twister-spinner.com/</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-gray-800 pb-2">Acknowledgment</h2>
            <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. Your access is conditioned on Your acceptance of and compliance with these Terms.</p>
            <p className="mt-4 p-4 bg-red-500/10 border-l-4 border-red-500 rounded text-gray-300">
              <strong>Requirement:</strong> You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-gray-800 pb-2">Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, the entire liability of the Company shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-gray-800 pb-2">"AS IS" Disclaimer</h2>
            <p className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 text-gray-400 italic">
              The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-gray-800 pb-2">Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
            <Link href="/contact">
              <span className="inline-block mt-2 text-pink-400 hover:text-pink-300 font-bold cursor-pointer transition-colors">
                Visit our Contact Page →
              </span>
            </Link>
          </div>
        </section>
      </div>

      <footer className="py-12 text-center border-t border-gray-800 text-gray-600 text-xs">
        © 2026 Twister-Spinner.com
      </footer>
    </div>
  );
};

export default TermsConditions;
