import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Score } from '../App';

import { questions } from './questions';

interface QuizProps {
  score: Score;
  onSubmit: (data: any) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSubmit = () => {
    onSubmit(answers);
  };

  const handleOptionSelect = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const isAnswerSelected = !!answers[questions[currentQuestion].id];

  return (
    <div className="relative w-full max-w-lg min-h-screen flex flex-col">
      <div className="w-full p-4 sticky top-0 z-10">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-lagoon-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-300 text-sm mt-2 text-right">
          {currentQuestion + 1} / {questions.length} questions completed
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <TransitionGroup className="relative w-full h-full">
          <CSSTransition
            key={questions[currentQuestion].id}
            timeout={500}
            classNames="slide"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-4">
                {questions[currentQuestion].question}
              </h2>
              <form>
                {questions[currentQuestion].options.map((option) => (
                  <label key={option.value} className="block mb-2">
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option.value}
                      checked={
                        answers[questions[currentQuestion].id] === option.value
                      }
                      onChange={() => handleOptionSelect(option.value)}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
                <button
                  type="button"
                  onClick={
                    currentQuestion < questions.length - 1
                      ? handleNext
                      : handleSubmit
                  }
                  disabled={!isAnswerSelected}
                  className={`mt-4 px-6 py-2 rounded-full text-lg font-semibold shadow-md transition ${
                    isAnswerSelected
                      ? 'bg-blue-lagoon-500 text-gray-900 hover:bg-blue-lagoon-600'
                      : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  }`}
                >
                  {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                </button>
              </form>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};
