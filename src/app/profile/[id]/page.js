"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { professionals } from "@/app/content/mock-data";
import React from "react";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { AiFillPhone, AiFillVideoCamera } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import ShareButton from "@/app/components/ShareButton";
import Testimonial from "@/app/components/Testimonial";
import NotFound from "../not-found";
import Session from "@/app/components/Session";
import ConfirmationPage from "@/app/components/Confirmation";
import { SessionBooking } from "@/app/components/SessionBooking";

export default function ProfilePage({ params }) {
  const router = useRouter();
  const { id } = React.use(params);

  const [professional, setProfessional] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null); // State to track selected session
  const [bookingDetails, setBookingDetails] = useState(null); // State for booking details

  useEffect(() => {
    if (!id) {
      setError("Invalid or missing ID");
      setLoading(false);
      return;
    }

    const foundProfessional = professionals.find(
      (pro) => pro.id === parseInt(id)
    );

    if (foundProfessional) {
      setProfessional(foundProfessional);
      setLoading(false);
    } else {
      setLoading(false);
      return <NotFound />;
    }
  }, [id, router]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleProceed = (session) => {
    setSelectedSession(session);
    toggleModal();
  };

  const handleBooking = (details) => {
    setBookingDetails(details);
    setSelectedSession(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-50">
        <p className="text-blue-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-50">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <button
        className="mb-4 text-blue-700 flex items-center gap-2 underline"
        onClick={() => router.back()}
      >
        <FaArrowLeft className="text-blue-700" />
        Back
      </button>
      {!bookingDetails && (
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-32 h-32 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  {professional.name}
                </h1>
                <p className="text-sm text-gray-600">{professional.title}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {professional.experience}
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <MdLocationOn className="text-blue-600" />
                  {professional.location}
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button
                  className="mb-4 text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg"
                  onClick={toggleModal} // Open the session modal
                >
                  Book Session
                </button>
              </div>
            </div>

            <ShareButton />

            {/* About Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                About
              </h2>
              <p className="text-gray-600">{professional.about}</p>
            </div>

            {/* Modal for Sessions */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                  <h2 className="text-xl font-bold text-blue-900 mb-4">
                    Available Sessions
                  </h2>
                  <div className="flex overflow-x-auto space-x-6 pb-4">
                    {professional.sessions.map((session) => (
                      <div
                        key={session.key}
                        className="flex-shrink-0 min-w-[300px]"
                      >
                        <Session
                          type={session.type}
                          price={session.price}
                          details={session.details}
                          onProceed={() => handleProceed(session)} // Pass session to proceed
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    onClick={() => setIsModalOpen(false)} // Close modal
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Booking Modal */}
            {selectedSession && (
              <SessionBooking
                session={selectedSession}
                onClose={() => setSelectedSession(null)}
                onBooking={handleBooking} // Pass booking handler
              />
            )}

            {/* Credentials Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Credentials
              </h2>
              <ul className="list-disc pl-6">
                {professional.credentials.map((credential, index) => (
                  <li key={index} className="text-gray-600">
                    {credential}
                  </li>
                ))}
              </ul>
            </div>

            {/* Therapies Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Therapies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {professional.therapies.map((therapy, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 text-blue-800 py-2 px-4 rounded-full text-center shadow-md"
                  >
                    {therapy}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Contact Methods
              </h2>
              <ul className="list-disc pl-6">
                {professional.contactMethods.map((method, index) => (
                  <li key={index} className="text-gray-600">
                    {method === "In person" ? (
                      <span className="flex items-center gap-2">
                        <AiFillPhone className="text-blue-600" />
                        {method}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <AiFillVideoCamera className="text-blue-600" />
                        {method}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                <FaCheckCircle className="inline-block mr-2 text-green-500" />
                Languages
              </h2>
              <ul className="list-disc pl-6">
                {professional.languages.map((language, index) => (
                  <li key={index} className="text-gray-600">
                    {language}
                  </li>
                ))}
              </ul>
            </div>

            <Testimonial testimonials={professional.testimonials} />
          </div>
        </div>
      )}

      {bookingDetails && <ConfirmationPage bookingDetails={bookingDetails} />}
    </div>
  );
}
