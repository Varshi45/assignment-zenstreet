import React from "react";

const Session = ({ type, price, details, onProceed }) => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md w-full max-w-sm">
      <h3 className="text-lg font-bold text-blue-900">{type}</h3>
      <p className="text-blue-700">{price}</p>
      <ul className="text-sm text-gray-700 mt-2">
        {details.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
      </ul>
      <button
        onClick={onProceed}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Proceed
      </button>
    </div>
  );
};

export default Session;
