import React from 'react';

const messages = [
  "🌊 Next beach clean-up: Juhu Beach, Sunday 7 AM – Join Now!",
  "✅ Don’t forget to bring gloves, water, and sunblock!",
  "🏆 Keshav is leading this week’s leaderboard with 14kg waste logged!",
  "📣 Share your clean-up story and get featured!",
  "🤖 New! Try our AI chatbot for cleanup tips & guidance.",
  "🙏 Support our mission – donate a safety kit today.",
];

const Topbar = () => {
  return (
    <div className="bg-blue-600 text-white text-sm overflow-hidden marquee-wrapper w-full">
      <div className="flex w-max marquee-track whitespace-nowrap py-2">
        {[...messages, ...messages].map((msg, index) => (
          <span key={index} className="mx-8 inline-block">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
