"use client";
import Link from "next/link";
import { professionals } from "./content/mock-data";
import { MdLocationOn } from "react-icons/md"; // Import the location icon

export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">
        Available Professionals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionals.map((professional) => (
          <Link href={`/profile/${professional.id}`} key={professional.id}>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg cursor-pointer transition">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-lg font-semibold text-center text-blue-900 mt-4">
                {" "}
                {/* Updated color for better visibility */}
                {professional.name}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {professional.title}
              </p>
              <p className="text-sm text-gray-500 text-center mt-2">
                {professional.experience}
              </p>
              <div className="text-sm text-gray-400 text-center mt-2 flex items-center justify-center gap-1">
                {" "}
                {/* Added flex to align icon and text */}
                <MdLocationOn className="text-blue-600" />{" "}
                {/* Added color to the icon */}
                {professional.location}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
