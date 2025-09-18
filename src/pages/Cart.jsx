import React, { useState } from "react";
import { ShoppingCart, Calendar, Clock, IndianRupee, CreditCard, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [therapies, setTherapies] = useState([
    {
      id: 1,
      name: "Herbal Therapy",
      date: "2025-09-20",
      time: "10:00 AM",
      instructions: [
        "Take herbs after meals",
        "Avoid cold drinks",
        "Rest for 30 minutes after therapy",
      ],
      cost: "8000",
      category: "Ayurvedic Treatment"
    },
    {
      id: 2,
      name: "Meditation Session",
      date: "2025-09-21",
      time: "06:00 PM",
      instructions: [
        "Sit in quiet place",
        "Focus on breathing",
        "Do not use devices during session",
      ],
      cost: "5000",
      category: "Mental Wellness"
    },
  ]);

  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate total cost
  const total = therapies.reduce((sum, t) => sum + Number(t.cost), 0);

  const removeTherapy = (id) => {
    setTherapies(therapies.filter(therapy => therapy.id !== id));
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment processed successfully! You will receive confirmation shortly.");
    }, 2000);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <>
     <Navbar />
   
    <div className=" w-full h-screen x-auto p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden">
    

        {/* Cart Items */}
        <div className="p-6">
          {therapies.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Add some therapy sessions to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {therapies.map((therapy) => (
                <div
                  key={therapy.id}
                  className="bg-gradient-to-r from-slate-50 to-white p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start">
                    {/* Therapy Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-slate-800">
                          {therapy.name}
                        </h3>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          {therapy.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(therapy.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{therapy.time}</span>
                        </div>
                      </div>

                      {/* Instructions Preview */}
                      <div className="bg-blue-50 p-3 rounded-lg mb-3">
                        <p className="text-xs font-semibold text-blue-700 mb-1">Key Instructions:</p>
                        <p className="text-sm text-blue-600">
                          {therapy.instructions[0]}...
                        </p>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="ml-4 text-right">
                      <div className="flex items-center justify-end gap-1 mb-3">
                        <IndianRupee className="w-5 h-5 text-green-600" />
                        <span className="font-bold text-xl text-green-600">
                          {therapy.cost}
                        </span>
                      </div>
                      <button
                        onClick={() => removeTherapy(therapy.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                      >
                        Paid in cash
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary and Payment */}
        {therapies.length > 0 && (
          <div className="border-t border-slate-200 bg-slate-50 p-6">
            {/* Total */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-slate-600 text-sm">Total Amount</p>
                <p className="text-sm text-slate-500">{therapies.length} session{therapies.length > 1 ? 's' : ''}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <IndianRupee className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-3xl text-green-600">
                    {total.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-xs text-slate-500">Inclusive of all taxes</p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
     </>
  );
};

export default Cart;