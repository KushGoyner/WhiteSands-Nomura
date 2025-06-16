import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-green-50 py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join the Movement for Cleaner Beaches</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Empowering communities to restore coastlines through AI, data, and volunteer action.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Get Started</button>
                <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-100">Learn More</button>
              </div>
            </div>
          </section>
  )
}

export default HeroSection