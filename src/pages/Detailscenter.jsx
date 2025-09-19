import React, { useState } from "react";
import {
  Heart,
  Stethoscope,
  Activity,
  Users,
  Pencil,
  Save,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";

// ✅ Reusable Editable Section Component
const EditableSection = ({ title, icon: Icon, content, onSave, type }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(content);

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
      {/* Edit Button */}
      {!isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-4 right-4 text-gray-500 hover:text-green-600"
        >
          <Pencil size={18} />
        </button>
      )}

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <Icon className="text-green-600" /> {title}
      </h2>

      {/* Editing Mode */}
      {isEditing ? (
        <div className="space-y-4">
          {type === "about" && (
            <>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border rounded-lg p-3 text-gray-700"
                rows={4}
              />
              <textarea
                value={formData.mission}
                onChange={(e) =>
                  setFormData({ ...formData, mission: e.target.value })
                }
                className="w-full border rounded-lg p-3 text-gray-700"
                rows={3}
              />
            </>
          )}

          {type === "list" &&
            formData.map((item, idx) => (
              <input
                key={idx}
                value={item}
                onChange={(e) => {
                  const newList = [...formData];
                  newList[idx] = e.target.value;
                  setFormData(newList);
                }}
                className="w-full border rounded-lg p-2 text-gray-700"
              />
            ))}

          {type === "doctors" &&
            formData.map((doc, idx) => (
              <div key={idx} className="space-y-2 border p-3 rounded-lg">
                <input
                  value={doc.name}
                  onChange={(e) => {
                    const newDocs = [...formData];
                    newDocs[idx].name = e.target.value;
                    setFormData(newDocs);
                  }}
                  className="w-full border rounded-lg p-2 text-gray-700"
                />
                <input
                  value={doc.speciality}
                  onChange={(e) => {
                    const newDocs = [...formData];
                    newDocs[idx].speciality = e.target.value;
                    setFormData(newDocs);
                  }}
                  className="w-full border rounded-lg p-2 text-gray-700"
                />
                <input
                  value={doc.experience}
                  onChange={(e) => {
                    const newDocs = [...formData];
                    newDocs[idx].experience = e.target.value;
                    setFormData(newDocs);
                  }}
                  className="w-full border rounded-lg p-2 text-gray-700"
                />
              </div>
            ))}

          {/* Save / Cancel */}
          <div className="flex gap-3 mt-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <Save size={16} /> Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-1 border px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <X size={16} /> Cancel
            </button>
          </div>
        </div>
      ) : (
        // View Mode
        <div>
          {type === "about" && (
            <>
              <p className="text-gray-700 mb-4">{content.description}</p>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  Our Mission
                </h3>
                <p className="text-green-700">{content.mission}</p>
              </div>
            </>
          )}

          {type === "list" && (
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {type === "doctors" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {content.map((doc, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-4 shadow-sm bg-gray-50"
                >
                  <h3 className="font-semibold text-lg text-gray-800">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-600">{doc.speciality}</p>
                  <p className="text-xs text-gray-500">{doc.experience}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ✅ Main Page
const Detailscenter = () => {
  const [centerData, setCenterData] = useState({
    about: {
      description:
        "Our Panchakarma center has been serving patients with authentic Ayurvedic treatments for over 20 years.",
      mission:
        "To provide holistic healing and wellness through traditional Ayurvedic therapies.",
    },
    services: [
      "Abhyanga (Oil Massage)",
      "Shirodhara (Oil Pouring)",
      "Swedana (Herbal Steam)",
    ],
    facilities: ["Herbal Garden", "Yoga Hall", "Meditation Room", "Ayurvedic Cafe"],
    doctors: [
      { name: "Dr. Aarav Sharma", speciality: "Ayurveda Specialist", experience: "15+ years" },
      { name: "Dr. Riya Verma", speciality: "Panchakarma Expert", experience: "10+ years" },
    ],
  });

  // Save Handlers
  const handleSaveAbout = (newAbout) =>
    setCenterData({ ...centerData, about: newAbout });

  const handleSaveServices = (newServices) =>
    setCenterData({ ...centerData, services: newServices });

  const handleSaveFacilities = (newFacilities) =>
    setCenterData({ ...centerData, facilities: newFacilities });

  const handleSaveDoctors = (newDoctors) =>
    setCenterData({ ...centerData, doctors: newDoctors });

  return (
    <div className="min-h-screen bg-gray-100 ">
        <Navbar />
      <div className="max-w-5xl mx-auto mt-4">
        {/* ✅ Center Name */}
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-2">
          Ayurveda Wellness Center
        </h1>
        <p className="text-center text-gray-500 mb-10">
          
        </p>

        {/* Sections */}
        <EditableSection
          title="About Our Center"
          icon={Heart}
          content={centerData.about}
          onSave={handleSaveAbout}
          type="about"
        />

        <EditableSection
          title="Our Services"
          icon={Stethoscope}
          content={centerData.services}
          onSave={handleSaveServices}
          type="list"
        />

        <EditableSection
          title="Facilities"
          icon={Activity}
          content={centerData.facilities}
          onSave={handleSaveFacilities}
          type="list"
        />

        <EditableSection
          title="Our Doctors"
          icon={Users}
          content={centerData.doctors}
          onSave={handleSaveDoctors}
          type="doctors"
        />
      </div>
    </div>
  );
};

export default Detailscenter;
