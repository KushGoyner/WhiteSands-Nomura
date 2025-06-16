import React from "react";
import HeroSection from "../layout/HeroSection";
import FeatureSection from "../layout/FeatureSection";
import ImpactSection from "../layout/ImpactSection";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-4">Be the Change, Start Today!</h3>
        <p className="mb-8 text-gray-600 max-w-xl mx-auto">
          Your small step can create big waves. Join a clean-up drive, log your
          efforts, and make a lasting environmental impact.
        </p>
        <button className="px-8 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700">
          Join a Drive
        </button>
      </section>

      {/* Donate Section */}
      <section id="donate" className="bg-green-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Support the Mission</h3>
          <p className="text-gray-600 mb-10">
            Your donations help us provide safety kits, logistics, and
            refreshments for our passionate volunteers.
          </p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
