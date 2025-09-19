import { MapPin, Phone, Mail, HeartPulse, Calendar, Clock, Leaf } from 'lucide-react';
import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

const Userdetails = () => {
  const navigate = useNavigate();

  const patient = {
    name: 'Priya Singh',
    age: 29,
    condition: 'Stress & Anxiety',
    location: 'Bangalore',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face',
    phone: '+91 91234 56781',
    email: 'priya.singh@example.com',
    therapies: [
      {
        name: 'Herbal Therapy',
        date: '2025-09-20',
        time: '10:00 AM',
        instructions: [
          'Take herbs after meals',
          'Avoid cold drinks',
          'Rest for 30 minutes after therapy',
        ],
        yoga: [
          'Morning Surya Namaskar (10 mins)',
          'Pranayama (15 mins)',
          'Shavasana (5 mins before sleep)',
        ],
        diet: [
          'Warm water with lemon in morning',
          'Light vegetarian lunch with salads',
          'Avoid fried & processed food',
        ],
        cost: '8000',
      },
      {
        name: 'Meditation Session',
        date: '2025-09-21',
        time: '06:00 PM',
        instructions: [
          'Sit in quiet place',
          'Focus on breathing',
          'Do not use devices during session',
        ],
        yoga: [
          'Anulom Vilom (10 mins)',
          'Kapalabhati (10 mins)',
          'Mindfulness Meditation (15 mins)',
        ],
        diet: [
          'Warm herbal tea in evening',
          'Light dinner with soups',
          'No caffeine at night',
        ],
        cost: '5000',
      },
    ],
  };

  const gotosheduletherapy = () => {
    navigate('/sheduletherapy');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <Navbar />
      <div className="max-w-6xl mx-auto space-y-10 px-4 py-10">
        {/* Patient Info */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-emerald-100">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-md opacity-30"></div>
              <img
                src={patient.image}
                alt={patient.name}
                className="relative w-36 h-36 rounded-full ring-4 ring-white shadow-2xl object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{patient.name}</h2>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-white font-medium shadow-md">
                <HeartPulse className="h-4 w-4" />
                {patient.condition}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mt-6">
                <div className="flex items-center bg-emerald-50 rounded-lg p-3">
                  <span className="font-semibold mr-2">Age:</span>
                  {patient.age}
                </div>
                <div className="flex items-center bg-emerald-50 rounded-lg p-3">
                  <MapPin size={16} className="mr-2 text-emerald-600" />
                  {patient.location}
                </div>
                <div className="flex items-center bg-emerald-50 rounded-lg p-3">
                  <Phone size={16} className="mr-2 text-emerald-600" />
                  {patient.phone}
                </div>
                <div className="flex items-center bg-emerald-50 rounded-lg p-3">
                  <Mail size={16} className="mr-2 text-emerald-600" />
                  {patient.email}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Therapy Schedule */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-emerald-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Therapy Schedule</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {patient.therapies.map((therapy, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 rounded-2xl p-6 hover:shadow-xl transition"
              >
                {/* Therapy Info */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{therapy.name}</h4>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar size={16} className="mr-2 text-emerald-600" />
                      {therapy.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2 text-emerald-600" />
                      {therapy.time}
                    </div>
                  </div>
                  <Leaf className="w-8 h-8 text-emerald-500" />
                </div>

                {/* Instructions */}
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-2">Instructions:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {therapy.instructions.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Yoga & Diet Plan */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <h5 className="font-semibold text-emerald-700 mb-2">🧘 Yoga Plan</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {therapy.yoga.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4">
                    <h5 className="font-semibold text-amber-700 mb-2">🥗 Diet Plan</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {therapy.diet.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Cost */}
                <div className="w-full px-4 py-2 flex items-center justify-between bg-emerald-50 rounded-lg shadow-sm border border-emerald-200 text-gray-700 font-medium mb-3">
                  <span>Cost:</span>
                  <span className="text-emerald-700 font-bold">₹{therapy.cost}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg shadow hover:shadow-md transition">
                    Remove Therapy
                  </button>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg shadow hover:shadow-md transition">
                    Mark as Completed
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button
              onClick={gotosheduletherapy}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-2xl shadow hover:shadow-lg transition"
            >
              Schedule Therapy
            </button>
            <Link
              to={'/shedulevideo'}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-2xl shadow hover:shadow-lg transition"
            >
              Schedule Videos
            </Link>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-2xl shadow hover:shadow-lg transition">
              Schedule Yoga & Diet Plans
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            <Leaf className="w-6 h-6 text-emerald-600 mx-4" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
          <p className="text-gray-600 text-sm">Holistic healing through ancient wisdom</p>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
