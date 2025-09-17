import React, { useState } from "react";
import { Calendar, PlusCircle, List, Dumbbell, Apple } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ScheduleTherapy = () => {
  const [therapyName, setTherapyName] = useState("");
  const [therapyDate, setTherapyDate] = useState("");
  const [instruction, setInstruction] = useState("");
  const [instructions, setInstructions] = useState([]);
   const [TherapyCost, setTherapyCost] = useState("");

  const handleAddInstruction = () => {
    if (instruction.trim() !== "") {
      setInstructions([...instructions, instruction]);
      setInstruction("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      therapyName,
      therapyDate,
      instructions,
    });
    alert("Therapy Scheduled ✅");
    setTherapyName("");
    setTherapyDate("");
    setInstructions([]);
    alert("Therapy Scheduled Successfully!");
  };

  return (
    <>
     
  
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50 p-6">
    
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Schedule Therapy
        </h1>

        {/* Therapy Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-6 border border-green-100"
        >
          {/* Therapy Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Therapy Name
            </label>
            <input
              type="text"
              value={therapyName}
              onChange={(e) => setTherapyName(e.target.value)}
              placeholder="Enter therapy name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Therapy Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={therapyDate}
              onChange={(e) => setTherapyDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instructions
            </label>
            <div className="flex space-x-2">
             <textarea
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            placeholder="Add instruction"
             className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 resize-none"
           rows={3}
                 />


            </div>
       
          </div>
       


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cost of therapy
            </label>
            <input
              value={TherapyCost}
              onChange={(e) => setTherapyCost(e.target.value)}
              placeholder="Enter the therapy cost"
              type="number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Schedule Therapy
          </button>
          
          <Link
           to={'/userdetails'}
            className=" min-w-full bg-emerald-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
           Back to Patient Details
          </Link>

        </form>


        
      </div>
    </div>
      </>
  );
};

export default ScheduleTherapy;
