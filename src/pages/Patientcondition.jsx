import React, { useState } from "react";
import { User, ClipboardList, Tag } from "lucide-react";
import Navbar from "../components/Navbar";

const Patientcondition = () => {
  // Dummy user data for demo
  const [userData, setUserData] = useState({
    name: "Priya Sharma",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
    conditionPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNloS3fK2eKphCPIG8hgfd-PH14Z4S0IXojA&s",
    quizAnswers: [
      { q: "How often do you feel stressed?", a: "Almost daily" },
      { q: "Do you have trouble sleeping?", a: "Yes, frequently" },
      { q: "Do you exercise regularly?", a: "Only once a week" },
    ],
  });

  const [category, setCategory] = useState("");

  const handleSaveCategory = () => {
    if (!category) {
      alert("Please enter a category before saving.");
      return;
    }
    alert(`Category "${category}" has been assigned to ${userData.name}`);
    setCategory("");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100  ">
        <Navbar />
      <div className="max-w-4xl mx-auto bg-white mt-4 shadow-xl rounded-2xl p-8 border border-gray-100">
        {/* Patient Photo & Name */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
          <img
            src={userData.photo}
            alt={userData.name}
            className="w-36 h-36 rounded-full object-cover ring-4 ring-green-200 shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <User className="w-6 h-6 text-green-600" />
              {userData.name}
            </h2>
            <p className="text-gray-600">Patient Uploaded Photo & Details</p>
          </div>
        </div>

        {/* Condition Upload Section */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <ClipboardList className="w-5 h-5 text-green-600" />
            Current Condition (Photo Upload)
          </h3>

          {userData.conditionPhoto ? (
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={userData.conditionPhoto}
                alt="Uploaded Condition"
                className="w-40 h-40 rounded-xl object-cover border border-gray-200 shadow-md"
              />
              <p className="text-gray-600 text-sm">
                This photo was uploaded by the patient to show their current
                condition.
              </p>
            </div>
          ) : (
            <p className="text-gray-500 italic">
              No condition photo uploaded yet.
            </p>
          )}
        </div>

        {/* Quiz Answers */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <ClipboardList className="w-5 h-5 text-green-600" />
            Quiz Answers
          </h3>
          <div className="space-y-4">
            {userData.quizAnswers.map((qa, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm"
              >
                <p className="font-medium text-gray-700">{qa.q}</p>
                <p className="text-gray-600 text-sm mt-1">{qa.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Input for Category */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-green-600" />
            Assign Category
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category (e.g. Anxiety, Stress, etc.)"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <button
              onClick={handleSaveCategory}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow"
            >
              Save Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patientcondition;
