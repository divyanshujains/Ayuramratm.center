import { MapPin, Phone, Mail, HeartPulse, Calendar, Clock, Play, Leaf, Dumbbell, Apple } from 'lucide-react';
import React from 'react';
import video1 from '../assets/yoga1.mp4';
import video2 from '../assets/yoga2.mp4'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Userdetails = () => {
 
    const navigate = useNavigate();

  const patient = {
    name: 'Priya Singh',
    age: 29,
    condition: 'Stress & Anxiety',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face',
    phone: '+91 91234 56781',
    email: 'priya.singh@example.com',
    uploadedPhoto: '',
    generatedPhoto: '',
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
        cost:'8000'
      },
      {
        name: 'Meditation Session',
        date: '2025-09-21',
        time: '06:00 PM',
        instructions: ['Sit in quiet place', 'Focus on breathing', 'Do not use devices during session'],
        cost: '5000'
      },
    ],
  };

  const gotosheduletherapy=()=>{
    navigate('/sheduletherapy')
  }


  return (
    <div className="min-h-screen ">
        <Navbar />
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header with Ayurvedic Theme */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mt-3">Ayurvedic Wellness Dashboard</h1>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center ml-3">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Patient Info Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-green-100">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Enhanced Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-amber-400 rounded-full blur-md opacity-30"></div>
              <img
                src={patient.image}
                alt={patient.name}
                className="relative w-32 h-32 rounded-full ring-4 ring-white shadow-2xl object-cover"
              />
            </div>

            {/* Enhanced Patient Details */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">{patient.name}</h2>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
                    <HeartPulse className="h-4 w-4" />
                    {patient.condition}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center justify-center lg:justify-start bg-gray-50 rounded-lg p-3">
                  <span className="font-semibold text-gray-600 mr-2">Age:</span>
                  <span className="text-lg">{patient.age}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-gray-50 rounded-lg p-3">
                  <MapPin size={16} className="mr-2 text-green-600" />
                  <span>{patient.location}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-gray-50 rounded-lg p-3">
                  <Phone size={16} className="mr-2 text-green-600" />
                  <span className="text-sm">{patient.phone}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-gray-50 rounded-lg p-3">
                  <Mail size={16} className="mr-2 text-green-600" />
                  <span className="text-sm">{patient.email}</span>
                </div>
               
                <div className="flex bg-blue-300 items-center justify-center lg:justify-start  rounded-lg p-3">
                <Phone size={16} className="mr-2 text-black" />
                  <span className="text-sm font-bold ">Video call</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Therapy Schedule */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-green-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-amber-500 rounded-full mr-3"></div>
            Therapy Schedule
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {patient.therapies.map((therapy, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-green-50 border-2 border-green-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{therapy.name}</h4>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar size={16} className="mr-2 text-green-600" />
                      <span className="text-sm">{therapy.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2 text-green-600" />
                      <span className="text-sm">{therapy.time}</span>
                    </div>
                  </div>
                  <Leaf className="w-8 h-8 text-green-500 group-hover:text-green-600 transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-3">Instructions:</p>
                  <ul className="space-y-2">
                    {therapy.instructions.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                      
                    ))}

                    {/* Yoga & Diet Plans Section */}
<div className="bg-white/80  rounded-3xl shadow-xl p-8 border border-green-100 mt-8 mb-8">
  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
    <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-amber-500 rounded-full mr-3"></div>
    Yoga & Diet Plans
  </h3>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Yoga Plans */}
    <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl p-6 hover:shadow-lg transition-all">
      <h4 className="text-xl font-semibold text-green-700 mb-4">🧘 Yoga Plans</h4>
      <ul className="space-y-3">
        <li className="flex items-start">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
          <span className="text-gray-700">Morning Surya Namaskar (10 mins)</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
          <span className="text-gray-700">Pranayama (15 mins)</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
          <span className="text-gray-700">Shavasana (5 mins before sleep)</span>
        </li>
      </ul>
    </div>

    {/* Diet Plans */}
    <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-6 hover:shadow-lg transition-all">
      <h4 className="text-xl font-semibold text-amber-700 mb-4">🥗 Diet Plans</h4>
      <ul className="space-y-3">
        <li className="flex items-start">
          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></div>
          <span className="text-gray-700">Warm water with lemon in morning</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></div>
          <span className="text-gray-700">Light vegetarian lunch with salads</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></div>
          <span className="text-gray-700">Avoid fried & processed food</span>
        </li>
      </ul>
    </div>
  </div>
</div>





                    <div className="w-full px-4 py-2 flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100 
                rounded-lg shadow-sm border border-green-200 text-gray-700 font-medium text-md">
               <span>Cost:</span>
            <span className="text-green-700 font-bold">₹5000</span>
             </div>


                     


                    </ul>
                </div>
              </div>
            ))}
 
          </div>
            

          {/*SheduleRR therapy */}
          <div className="flex mt-4  items-center justify-between w-full bg-gradient-to-br from-white to-green-50 border-2 border-dashed border-green-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
             <button onClick={()=>{gotosheduletherapy()}} className="group flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="font-medium">Shedule therapy</span>
            </button>
           <Link  to={'/shedulevideo'} className="group flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
             
              <span className="font-medium">Shedule videos</span>
            </Link>
         <button className="group flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            
              <span className="font-medium">Shedule yoga and diet plans</span>
            </button>
          </div>
           
        </div>

        {/* Enhanced Video Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-green-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-amber-500 rounded-full mr-3"></div>
            Wellness Videos
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Yoga Basics</h4>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 aspect-video group-hover:shadow-xl transition-shadow duration-300">
                <video controls className="w-full h-full">
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Panchakarma Basics</h4>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 aspect-video group-hover:shadow-xl transition-shadow duration-300">
                <video controls autoPlay loop muted className="w-full h-full">
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <Leaf className="w-6 h-6 text-green-600 mx-4" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
          </div>
          <p className="text-gray-600 text-sm">Holistic healing through ancient wisdom</p>
        </div>

        

      </div>
    </div>
  );
};

export default Userdetails;