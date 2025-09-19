// import { HeartPulse, ClipboardList } from 'lucide-react';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const PatientCard = ({ patient }) => {
//   const navigate = useNavigate();

//   const gotoDetails = () => {
//     navigate('/Userdetails');
//   // };

//   return (
//     <div className="bg-white mt-6 mb-4 w-95 rounded-xl shadow-lg max-w-md mx-auto p-6 space-y-4 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
//       {/* Profile Photo */}
//       <div className="flex justify-center">
//         <img
//           src={patient.image}
//           alt={patient.name}
//           className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
//         />
//       </div>

//       {/* Name & Condition */}
//       <div className="text-center">
//         <h2 className="text-xl font-semibold text-slate-800">{patient.name}</h2>
//         <div className="flex justify-center items-center text-teal-600 mt-1 space-x-1">
//           <HeartPulse size={18} />
//           <span className="font-medium">{patient.condition}</span>
//         </div>
//       </div>

//       {/* Treatment Plan */}
//       <div>
//         <h3 className="text-sm font-semibold text-slate-600 mb-2 text-center">Treatment Plan</h3>
//         <div className="flex flex-wrap justify-center gap-2">
//           {patient.therapies.map((therapy, idx) => (
//             <span
//               key={idx}
//               className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full"
//             >
//               {therapy.name}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex space-x-3">
//         <button
//           onClick={gotoDetails}
//           className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 font-semibold text-sm transition"
//         >
//           <ClipboardList size={16} className="inline-block mr-2" />
//           View Plan
//         </button>
//         <button className="flex-1 border border-slate-300 text-slate-700 py-2 rounded-lg hover:bg-slate-100 font-semibold text-sm transition">
//           Contact
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PatientCard;
