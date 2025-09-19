import React, { useState } from "react";
import {
  ShoppingCart,
  Calendar,
  Clock,
  IndianRupee,
  CheckCircle,
  User,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";

// Therapy Item Component
const TherapyItem = ({ therapy, onTogglePaid }) => {
  const [instructionsVisible, setInstructionsVisible] = useState(false);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-md ${
        therapy.paid
          ? "bg-green-50/60 border-green-200"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="p-5 flex flex-col sm:flex-row justify-between items-start gap-4">
        {/* Left - Therapy Details */}
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-lg text-slate-800">
              {therapy.name}
            </h3>
            {therapy.category && (
              <span className="bg-gradient-to-r from-teal-100 to-green-100 text-teal-800 px-3 py-0.5 rounded-full text-xs font-semibold shadow-sm">
                {therapy.category}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-green-600" />{" "}
              {formatDate(therapy.date)}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-green-600" /> {therapy.time}
            </div>
          </div>
        </div>

        {/* Right - Cost + Action */}
        <div className="flex-shrink-0 flex sm:flex-col items-end justify-between w-full sm:w-auto">
          <div className="flex items-center justify-end gap-1 mb-0 sm:mb-2">
            <IndianRupee
              className={`w-5 h-5 ${
                therapy.paid ? "text-slate-400" : "text-green-600"
              }`}
            />
            <span
              className={`font-bold text-xl ${
                therapy.paid
                  ? "text-slate-400 line-through"
                  : "text-green-700"
              }`}
            >
              {therapy.cost.toLocaleString("en-IN")}
            </span>
          </div>
          <button
            onClick={onTogglePaid}
            className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              therapy.paid
                ? "bg-green-100 text-green-700 cursor-default"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <CheckCircle
              className={`w-4 h-4 ${
                therapy.paid ? "text-green-600" : "text-slate-400"
              }`}
            />
            {therapy.paid ? "Paid" : "Mark as Paid"}
          </button>
        </div>
      </div>

      {/* Collapsible Instructions */}
      {therapy.instructions && therapy.instructions.length > 0 && (
        <div className="px-5 pb-4">
          <button
            onClick={() => setInstructionsVisible(!instructionsVisible)}
            className="flex items-center gap-1 text-xs text-slate-500 font-semibold hover:text-slate-700"
          >
            Instructions{" "}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                instructionsVisible ? "rotate-180" : ""
              }`}
            />
          </button>
          {instructionsVisible && (
            <ul className="mt-2 text-sm text-slate-600 list-disc list-inside space-y-1 pl-1">
              {therapy.instructions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const Cart = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      therapies: [
        {
          id: 101,
          name: "Herbal Therapy",
          date: "2025-09-20",
          time: "10:00 AM",
          instructions: [
            "Take herbs after meals",
            "Avoid cold drinks",
            "Rest for 30 minutes after therapy",
          ],
          cost: 8000,
          category: "Ayurveda",
          paid: false,
        },
        {
          id: 102,
          name: "Meditation Session",
          date: "2025-09-21",
          time: "06:00 PM",
          instructions: [
            "Sit in quiet place",
            "Focus on breathing",
            "Do not use devices during session",
          ],
          cost: 5000,
          category: "Mental Wellness",
          paid: true,
        },
      ],
    },
    {
      id: 2,
      name: "Riya Verma",
      therapies: [
        {
          id: 201,
          name: "Detox Therapy",
          date: "2025-09-22",
          time: "09:00 AM",
          instructions: [
            "Drink warm water before",
            "No heavy meal before session",
          ],
          cost: 6000,
          category: "Panchakarma",
          paid: false,
        },
      ],
    },
  ]);

  const togglePaid = (userId, therapyId) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === userId
          ? {
              ...u,
              therapies: u.therapies.map((t) =>
                t.id === therapyId ? { ...t, paid: !t.paid } : t
              ),
            }
          : u
      )
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-200 via-white to-emerald-300">
      <Navbar />
      <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10">
        {users.length === 0 ? (
          <div className="text-center py-16 px-6 bg-white rounded-2xl border border-dashed shadow-sm">
            <ShoppingCart className="w-16 h-16 mx-auto text-slate-300 mb-4" />
            <h2 className="text-xl font-semibold text-slate-700">
              Your cart is empty
            </h2>
            <p className="text-slate-500 mt-2">
              Looks like you haven't booked any therapies yet.
            </p>
            <button className="mt-6 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:shadow-md transition">
              Book a Therapy
            </button>
          </div>
        ) : (
          <div className="space-y-14">
            {users.map((user) => {
              const total = user.therapies.reduce(
                (sum, t) => sum + (t.paid ? 0 : t.cost),
                0
              );
              return (
                <div key={user.id} className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-7 h-7 text-green-600" />
                    <h2 className="text-2xl font-bold text-slate-800">
                      {user.name}'s Cart
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {user.therapies.map((therapy) => (
                      <TherapyItem
                        key={therapy.id}
                        therapy={therapy}
                        onTogglePaid={() => togglePaid(user.id, therapy.id)}
                      />
                    ))}
                  </div>

                  {/* User Total */}
                  <div className="mt-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 shadow-sm flex justify-between items-center">
                    <span className="font-semibold text-slate-700">
                      Pending Amount
                    </span>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-6 h-6 text-green-600" />
                      <span className="text-3xl font-bold text-green-700">
                        {total.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
