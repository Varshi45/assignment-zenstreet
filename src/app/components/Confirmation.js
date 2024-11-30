import React from "react";

export default function ConfirmationPage({ bookingDetails }) {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-green-600">
        Booking Confirmed!
      </h2>
      <p className="text-gray-800 mt-4">
        Your session with{" "}
        <span className="font-semibold">{bookingDetails.professionalName}</span>{" "}
        is confirmed. Here are your booking details:
      </p>
      <ul className="mt-6 space-y-3 text-gray-700">
        <li>
          <strong className="font-medium">Session Type:</strong>{" "}
          {bookingDetails.sessionType}
        </li>
        <li>
          <strong className="font-medium">Price:</strong> $
          {bookingDetails.price}
        </li>
        <li>
          <strong className="font-medium">Booked On:</strong>{" "}
          {bookingDetails.bookingDate}
        </li>
      </ul>
    </div>
  );
}
