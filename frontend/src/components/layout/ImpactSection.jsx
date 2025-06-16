import React from 'react'

const ImpactSection = () => {
  return (
    <section id="impact" className="bg-green-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Collective Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-green-800 font-semibold text-xl">
            <div>
              <p className="text-4xl font-bold text-green-700">12,000+</p>
              <p>Volunteers Engaged</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-700">50 Tons</p>
              <p>Waste Collected</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-700">320+</p>
              <p>Events Organized</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ImpactSection