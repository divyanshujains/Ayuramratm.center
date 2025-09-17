import React from 'react';
import PatientCard from '../components/PatientCard';
import Navbar from '../components/Navbar';

const Home = () => {
  const patients = [
    {
      id: 1,
      name: 'Priya Singh',
      age: 29,
      condition: 'Stress & Anxiety',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face',
      phone: '+91 91234 56781',
      email: 'priya.singh@example.com',
      therapies: [{ name: 'Herbal Therapy' }, { name: 'Meditation Session' }],
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      age: 35,
      condition: 'Back Pain',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      phone: '+91 98765 43210',
      email: 'rahul.mehta@example.com',
      therapies: [{ name: 'Ayurvedic Massage' }, { name: 'Yoga Therapy' }],
    },
    {
      id: 3,
      name: 'Ananya Roy',
      age: 26,
      condition: 'PCOS',
      location: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face',
      phone: '+91 99887 66554',
      email: 'ananya.roy@example.com',
      therapies: [{ name: 'Panchakarma Detox' }, { name: 'Diet Counseling' }],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-wrap items-start p-6 justify-around">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </>
  );
};

export default Home;
