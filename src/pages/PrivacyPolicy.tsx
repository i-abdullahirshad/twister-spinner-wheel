import React from 'react';
import { Link } from 'wouter';
import Navbar from '../components/Navbar'; // <-- Add this!

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 transition-colors duration-300">
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-6 leading-relaxed">
        <h1 className="text-4xl font-extrabold mb-2 text-white">Privacy Policy</h1>
        <p className="text-gray-400 mb-8 italic text-sm">Last updated: April 21, 2026</p>

        <section className="space-y-8">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your 
            information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <h2 className="text-2xl font-bold text-purple-400 mt-8 border-b border-gray-800 pb-2">Interpretation and Definitions</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Interpretation</h3>
            <p>The words whose initial letters are capitalized have meanings defined under the following conditions...</p>
            
            <h3 className="text-xl font-semibold text-white">Definitions</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Account:</strong> A unique account created for You to access our Service.</li>
              <li><strong>Company:</strong> Refers to Twister Spinner.</li>
              <li><strong>Country:</strong> Pakistan</li>
              <li><strong>Service:</strong> Refers to the Website.</li>
              <li><strong>Website:</strong> Accessible from <a href="https://twister-spinner.com/" className="text-pink-500 hover:underline">https://twister-spinner.com/</a></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-purple-400 mt-8 border-b border-gray-800 pb-2">Collecting and Using Your Personal Data</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Types of Data Collected</h3>
            <p className="font-semibold text-pink-400">Usage Data</p>
            <p>Usage Data is collected automatically when using the Service. This may include Your Device's IP address, browser type, and the pages You visit.</p>
          </div>

          <h2 className="text-2xl font-bold text-purple-400 mt-8 border-b border-gray-800 pb-2">Tracking Technologies and Cookies</h2>
          <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.</p>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <ul className="space-y-4">
              <li><strong>Necessary / Essential Cookies:</strong> These help to authenticate users and prevent fraudulent use.</li>
              <li><strong>Functionality Cookies:</strong> These allow Us to remember choices You make, like language preferences.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-purple-400 mt-8 border-b border-gray-800 pb-2">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, You can contact us:</p>
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/30 text-center">
            <Link href="/contact">
              <span className="text-pink-400 hover:text-pink-300 font-bold text-lg cursor-pointer">
                Visit our Contact Page
              </span>
            </Link>
          </div>
        </section>
      </div>

      <footer className="py-12 text-center border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Twister Spinner. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
