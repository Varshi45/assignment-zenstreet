import React, { useState } from "react";

export const SessionBooking = ({ session, onClose, onBooking }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("In-person");

  const handleBooking = () => {
    const bookingDetails = {
      professionalName: session.professionalName,
      sessionType: session.type,
      price: session.price,
      bookingDate: `${date} ${time}`,
    };
    onBooking(bookingDetails); // Pass the booking details to parent component
    onClose(); // Close the booking modal after booking
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Book Session for {session.type}
        </h2>
        <div className="mb-4">
          <label className="block text-gray-800">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-blue-300 text-gray-800 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800">Select Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-blue-300 text-gray-800 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800">Select Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full p-2 border border-blue-300 text-gray-800 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option className="text-gray-800" value="In-person">
              In-person
            </option>
            <option className="text-gray-800" value="Online">
              Online
            </option>
          </select>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleBooking} // Pass booking details to parent
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Confirm Booking
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
