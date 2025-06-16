import React from 'react'
import FeatureCard from '../common/FeatureCard'
import { FaLeaf, FaMapMarkerAlt, FaRecycle, FaGift, FaHandsHelping } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Powerful Features for Environmental Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard icon={<FaMapMarkerAlt />} title="Interactive Map" text="Find and join beach clean-up drives near you with one click." />
            <FeatureCard icon={<FaRecycle />} title="Smart Waste Logging" text="Log waste types and weights using smart tracking tools." />
            <FeatureCard icon={<FaLeaf />} title="Education & Quizzes" text="Learn sustainability with micro-lessons and gamified quizzes." />
            <FeatureCard icon={<FaHandsHelping />} title="Volunteer Dashboard" text="Track your attendance, events, and environmental impact." />
            <FeatureCard icon={<FaGift />} title="Rewards & Leaderboards" text="Earn badges and see how you rank among volunteers." />
          </div>
        </div>
      </section>
  )
}

export default FeatureSection