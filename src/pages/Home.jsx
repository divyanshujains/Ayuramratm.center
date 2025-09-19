import React from 'react';
// We need to import router components to make `useNavigate` work.
// In a real app, these would be in your main App.js or index.js file.
import { MemoryRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { HeartPulse, MapPin, ClipboardList, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';

// A styled PatientCard component that now includes action buttons
const PatientCard = ({ patient, onViewPlan }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full font-sans transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col">
    {/* This div grows to push the buttons to the bottom */}
    <div className="flex-grow">
      <div className="h-20 bg-gradient-to-r from-teal-400 to-cyan-500"></div>
      
      <div className="relative px-6 -mt-12 flex flex-col items-center text-center">
        <img
          src={patient.image}
          alt={patient.name}
          className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 shadow-md object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/100x100/E2E8F0/4A5568?text=${patient.name.charAt(0)}`;
          }}
        />
        <div className="mt-3">
          <h2 className="text-xl font-bold text-gray-800">{patient.name}</h2>
          <p className="text-sm text-gray-500">{patient.age} years old</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-center items-center text-gray-600 space-x-2 text-sm">
          <MapPin size={16} className="flex-shrink-0" />
          <span>{patient.location}</span>
        </div>
        <hr className="my-4 border-t border-gray-200" />
        <div className="flex justify-center items-center text-teal-600 space-x-2 p-2 bg-teal-50 rounded-lg">
          <HeartPulse size={20} />
          <span className="font-semibold text-sm">{patient.condition}</span>
        </div>
        <div className="mt-4">
          <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider text-center mb-2">Therapies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {patient.therapies.map((therapy, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                {therapy.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Action Buttons are now always at the bottom */}
    <div className="p-4 bg-gray-50/70 border-t border-gray-200 grid grid-cols-2 gap-3">
      <button
        onClick={onViewPlan}
        className="flex items-center justify-center gap-2 w-full bg-teal-500 text-white py-2.5 rounded-lg hover:bg-teal-600 font-semibold text-sm transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <ClipboardList size={16} />
        View Plan
      </button>
      <Link to={'/patientcondition'} className="flex  text-center border-2  items-center justify-center gap-2 w-full border-slate-400 text-slate-700 py-2.5 rounded-lg hover:bg-slate-100 font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400">
        
       view patient condition
      </Link>
    </div>
  </div>
);

// Home component now contains the main dashboard view
const Home = () => {
  const navigate = useNavigate();

  const gotoDetails = (patientId) => {
    // This will navigate to the UserDetails page, passing state if needed
    console.log(`Navigating to details for patient ${patientId}`);
    navigate("/Userdetails");
  };
  
  const patients = [
    { id: 1, name: 'Priya Singh', age: 29, condition: 'Stress & Anxiety', location: 'Bangalore', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face', therapies: [{ name: 'Herbal Therapy' }, { name: 'Meditation' }] },
    { id: 2, name: 'Rahul Mehta', age: 35, condition: 'Back Pain', location: 'Delhi', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', therapies: [{ name: 'Ayurvedic Massage' }, { name: 'Yoga' }] },
    { id: 3, name: 'Ananya Roy', age: 26, condition: 'PCOS', location: 'Kolkata', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face', therapies: [{ name: 'Panchakarma Detox' }, { name: 'Diet Counseling' }] },
    { id: 4, name: 'Vikram Desai', age: 42, condition: 'Hypertension', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop&crop=face', therapies: [{ name: 'Acupressure' }, { name: 'Lifestyle Coaching' }] },
  ];

  return (
    <div className="bg-green-200 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {patients.map((patient) => (
            <PatientCard 
              key={patient.id} 
              patient={patient}
              onViewPlan={() => gotoDetails(patient.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// A dummy component to show navigation is working
const UserDetails = () => (
    <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-teal-600">User Details Page</h1>
            <p className="mt-2 text-slate-600">Navigation was successful!</p>
             <Link to="/" className="mt-6 inline-block bg-teal-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-600 transition-colors">
                Go Back to Dashboard
            </Link>
        </div>
    </div>
);




export default Home