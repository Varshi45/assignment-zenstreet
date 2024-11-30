"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaShareAlt } from "react-icons/fa";

export default function ShareButton() {
  // State to toggle the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="mt-4">
      {/* Share Button */}
      <button
        onClick={togglePopup}
        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full"
      >
        <FaShareAlt />
      </button>

      {/* Popup with share options */}
      {isPopupOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex gap-4 flex-col">
          <h3 className="font-semibold text-blue-800">Share this profile</h3>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
              <FaFacebook />
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
              <FaWhatsapp />
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
              <FaTwitter />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
