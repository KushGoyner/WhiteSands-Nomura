import React from 'react'

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-all">
    <div className="text-green-600 text-3xl mb-3">{icon}</div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
  )
}

export default FeatureCard