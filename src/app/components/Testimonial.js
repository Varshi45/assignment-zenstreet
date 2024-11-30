import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa"; // Importing down arrow icon

export default function Testimonial({ testimonials }) {
  const [showAll, setShowAll] = useState(false); // State to manage visibility of all testimonials

  const handleShowAll = () => {
    setShowAll(!showAll); // Toggle the visibility of all testimonials
  };

  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 3); // Show only the first 3 if not expanded

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center justify-between">
        <span>What Clients Say</span>
        {!showAll && testimonials.length > 3 && (
          <button
            onClick={handleShowAll}
            className="text-blue-600 flex items-center gap-2 text-sm"
          >
            Show All <FaAngleDown />
          </button>
        )}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <blockquote className="text-gray-600 italic mb-4">
              “{testimonial.review}”
            </blockquote>
            <p className="text-sm text-gray-500 text-right">
              - {testimonial.name}
            </p>
            <div className="flex items-center justify-end mt-2">
              <span className="text-yellow-500">
                {"★".repeat(testimonial.rating)}
              </span>
              <span className="text-gray-400">({testimonial.rating})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show all testimonials button */}
      {showAll && testimonials.length > 3 && (
        <button
          onClick={handleShowAll}
          className="mt-4 text-blue-600 flex items-center gap-2 text-sm"
        >
          Show Less <FaAngleDown className="transform rotate-180" />
        </button>
      )}
    </div>
  );
}
