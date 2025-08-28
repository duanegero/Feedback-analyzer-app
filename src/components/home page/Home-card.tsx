import { useState } from "react";
import { useNavigate } from "react-router-dom";

import randomFacts from "../../helpers/randomFacts";
import navigateTo from "../../helpers/navigateTo";

export default function HomeCard() {
  const [fact, setFact] = useState(randomFacts[0]);

  const navigate = useNavigate();

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    setFact(randomFacts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-green-100 to-blue-100 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">
          Welcome Home!
        </h1>
        <p className="text-gray-700 text-lg">
          Here's something fun for you today. Enjoy!
        </p>
      </header>

      <main className="flex flex-col items-center gap-8">
        {/* Fact Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-purple-200 text-center">
          <p className="text-gray-600 text-lg mb-6">{fact}</p>
          <button
            onClick={getRandomFact}
            className="bg-gradient-to-r from-purple-500 to-green-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition">
            Show Me Another Fact
          </button>
        </div>

        {/* Feedback Button */}
        <button
          onClick={() => navigateTo(navigate, "/feedback")}
          className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition transform hover:-translate-y-1">
          Give Feedback
        </button>
      </main>
    </div>
  );
}
