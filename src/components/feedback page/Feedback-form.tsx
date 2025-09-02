import { useState } from "react";
import { useNavigate } from "react-router-dom";

import sendFormData from "../../helpers/sendFormData";
import navigateTo from "../../helpers/navigateTo";
import Chatbot from "../chat bot/Chat-bot";

import { IoHomeOutline } from "react-icons/io5";

export default function FeedbackForm() {
  //state variable used to hold user input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  //async function to handle submit button
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //call helper function with passed in variables
    await sendFormData({
      username,
      email,
      feedback,
      setUsername,
      setEmail,
      setFeedback,
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-green-100 to-blue-100 p-6">
      <button
        onClick={() => navigateTo(navigate, "/")}
        className="absolute top-6 left-6 cursor-pointer">
        <IoHomeOutline size={32} color="#7c3aed" />
      </button>

      {/* Centered Form Card */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-purple-200">
          <h2 className="text-3xl font-bold text-purple-600 mb-4 text-center font-Mozilla tracking-wider">
            Feedback Form
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            We value your thoughts! Please share your feedback below to help us
            improve our service.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-purple-700 mb-1 font-Mozilla tracking-widest">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-green-700 mb-1 font-Mozilla tracking-widest">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-1 font-Mozilla tracking-widest">
                Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-green-400 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="fixed bottom-6 right-6">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
