import React from 'react';
import {
  FaRecycle,
  FaCertificate,
  FaLeaf,
  FaCalendarAlt,
} from 'react-icons/fa';
import {
  Bell,
  CalendarDays,
  MapPin,
  Activity,
} from 'lucide-react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock user data
const user = {
  id: 4,
  name: "Kush Goyner",
  avatar: "",
  location: "Mumbai, India",
  email: "kush@example.com",
  kg: 70,
  events: 4,
  modules: 6,
  timeline: [
    { name: "Versova Beach Cleanup", date: "15 June 2025", status: "Completed" },
    { name: "Juhu Drive", date: "23 June 2025", status: "Upcoming" },
  ],
  recentActivity: [
    "Completed Environmental Quiz Module 6",
    "Collected 12 kg waste at Versova Drive",
    "Received Eco Learner Badge",
  ],
  certificates: [
    "Certificate of Participation - Versova Drive",
    "Environmental Awareness Champion – April 2025",
  ],
  badges: [
    "♻️ Waste Warrior",
    "📘 Eco Learner",
    "🏅 Consistent Volunteer",
  ],
  levels: [
    { level: 1, name: "Eco Initiator", xp: 100, reward: "Welcome Badge", cleared: true },
    { level: 2, name: "Eco Explorer", xp: 250, reward: "Certificate of Awareness", cleared: true },
    { level: 3, name: "Eco Defender", xp: 500, reward: "Green Warrior Badge", cleared: true },
    { level: 4, name: "Eco Master", xp: 1000, reward: "Exclusive T-Shirt", cleared: false },
  ],
};

const wasteData = [
  { name: 'Plastic', value: 35 },
  { name: 'Metal', value: 25 },
  { name: 'Organic', value: 20 },
  { name: 'E-waste', value: 20 },
];

const attendanceData = [
  { date: 'Week 1', attendance: 1 },
  { date: 'Week 2', attendance: 2 },
  { date: 'Week 3', attendance: 0 },
  { date: 'Week 4', attendance: 2 },
];

const COLORS = ['#4ade80', '#60a5fa', '#facc15', '#f472b6'];

const UserDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-100 to-green-50 shadow rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar || `https://api.dicebear.com/7.x/thumbs/svg?seed=${user.name}`}
            alt={user.name}
            className="w-20 h-20 rounded-full border-4 border-green-300"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-700">{user.name}</h2>
            <p className="text-gray-600">🌍 Location: {user.location}</p>
            <p className="text-sm text-blue-600">{user.email}</p>
          </div>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-600">{user.kg} kg</h3>
            <p className="text-gray-600">Waste Collected</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-600">{user.events}</h3>
            <p className="text-gray-600">Events</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-600">{user.modules}</h3>
            <p className="text-gray-600">Modules</p>
          </div>
        </div>
      </div>

      {/* Top Highlight Card */}
      <div className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Clean-up Progress</h2>
          <p className="text-gray-500">You've contributed {user.kg}kg of waste across {user.events} drives.</p>
        </div>
        <Activity className="w-12 h-12 text-green-500" />
      </div>

      {/* Stats & Charts */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Achievements */}
        <div className="bg-white shadow rounded-xl p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Achievements</h4>
          <div className="flex gap-4 text-green-600 text-xl">
            {user.kg > 40 && <FaRecycle title="Waste Warrior" />}
            {user.modules > 5 && <FaLeaf title="Eco Learner" />}
            {user.events > 3 && <FaCertificate title="Active Volunteer" />}
          </div>
        </div>

        {/* Attendance Chart */}
        <div className="bg-white shadow-md rounded-xl p-4 col-span-2">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><CalendarDays /> Attendance Overview</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={attendanceData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#4ade80" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Impact Summary & Waste Type Chart */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Impact Summary */}
        <div className="bg-white shadow rounded-xl p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Impact Summary</h4>
          <p className="text-sm text-gray-600">
            You’ve helped clean <span className="font-semibold">{user.kg} kg</span> of waste across {" "}
            <span className="font-semibold">{user.events}</span> clean-up drives. You're making a real difference 🌊💚.
          </p>
        </div>

        {/* Waste Segregation Chart */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2">Waste Types Collected</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={wasteData} cx="50%" cy="50%" outerRadius={70} label dataKey="value">
                {wasteData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Notifications & Timeline */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Bell /> Notifications</h3>
          <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
            <li>New beach clean-up drive this Sunday at 9 AM.</li>
            <li>Reminder: Complete your waste segregation quiz.</li>
            <li>New blog: Impact of plastic on marine life.</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <FaCalendarAlt className="text-green-500" /> Events Timeline
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            {user.timeline.map((event, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-green-700">{event.name}</span> – {" "}
                  <span className="text-gray-500">{event.date}</span>
                </div>
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  {event.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certificates, Badges, Levels */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Certificates */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><FaCertificate className="text-yellow-500" /> Certificates</h3>
          <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
            {user.certificates.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Badges */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700">Badges</h3>
          <div className="flex flex-wrap gap-3">
            {user.badges.map((badge, idx) => (
              <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">{badge}</span>
            ))}
          </div>
        </div>

        {/* Levels */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Levels & Rewards</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            {user.levels.map((lvl, idx) => (
              <li key={idx} className="flex justify-between">
                <div>
                  <span className="font-medium">Level {lvl.level}: {lvl.name}</span> – Reward: <span className="text-green-600">{lvl.reward}</span>
                </div>
                <span className={`text-xs font-semibold ${lvl.cleared ? 'text-green-600' : 'text-gray-400'}`}>
                  {lvl.cleared ? 'Cleared' : 'Locked'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
