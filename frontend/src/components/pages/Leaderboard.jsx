import React from 'react';
import { FaMedal, FaLeaf, FaCertificate, FaRecycle } from 'react-icons/fa';


const users = [
 { id: 1, name: "Riya Sen", kg: 50, events: 5, modules: 6 },
  { id: 2, name: "Aarav Mehta", kg: 45, events: 4, modules: 4 },
  { id: 3, name: "Ishaan Patel", kg: 40, events: 3, modules: 3 },
  { id: 4, name: "You", kg: 38, events: 4, modules: 6 },
];
const currentUserId  = 4;

const Leaderboard = () => {
  const getMedal = (index) => {
    const colors = ['text-yellow-400', 'text-gray-400', 'text-orange-500'];
    return <FaMedal className={`w-5 h-5 ${colors[index] || 'text-gray-300'}`} />;
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
        🌿 WhiteSands Volunteer Leaderboard
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Honoring our heroes making the coastline cleaner and greener 🌊
      </p>

      <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-green-100 text-gray-700 font-semibold text-left">
            <tr>
              <th className="px-6 py-3">Rank</th>
              <th className="px-6 py-3">Volunteer</th>
              <th className="px-6 py-3 text-center">Waste Collected</th>
              <th className="px-6 py-3 text-center">Events</th>
              <th className="px-6 py-3 text-center">Modules</th>
              <th className="px-6 py-3 text-center">Badges</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const isCurrentUser = user.id === currentUserId;
              return (
                <tr
                  key={user.id}
                  className={`${
                    isCurrentUser ? 'bg-blue-50 font-semibold' : 'bg-white'
                  } border-t`}
                >
                  <td className="px-6 py-4">
                    {index < 3 ? getMedal(index) : <span className="text-gray-500">{index + 1}</span>}
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={
                        user.avatar ||
                        `https://api.dicebear.com/7.x/thumbs/svg?seed=${user.name}`
                      }
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-center text-green-700 font-medium">
                    {user.kg} kg
                  </td>
                  <td className="px-6 py-4 text-center">{user.events}</td>
                  <td className="px-6 py-4 text-center">{user.modules}</td>
                  <td className="px-6 py-4 text-center flex justify-center gap-2 text-green-600">
                    {user.kg > 40 && <FaRecycle title="Waste Warrior" />}
                    {user.modules > 5 && <FaLeaf title="Eco Learner" />}
                    {user.events > 3 && <FaCertificate title="Active Volunteer" />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
