export const Splash: React.FC<{ startQuiz: () => void; quizStarted: boolean }> = ({
  startQuiz,
  quizStarted,
}) => {
  return (
    <div
      className={`transform transition-transform duration-700 ${
        quizStarted ? '-translate-x-full opacity-0' : 'translate-x-0'
      }`}
    >
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-lagoon-400">
          Wizard Campaign Services
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Charting your magical career, one spell at a time.
        </p>
      </header>
      <div className="text-center">
        <p className="text-lg mb-6">
          Ready to discover your wizarding path? Take the quiz to find your ideal esoterical pursuit!
        </p>
        <button
          onClick={startQuiz}
          className="bg-blue-lagoon-500 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-lagoon-600 transition"
        >
          Begin Your Magical Journey
        </button>
      </div>
    </div>
  );
};
