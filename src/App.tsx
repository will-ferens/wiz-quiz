import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.css';
import { Quiz } from './quiz/Quiz';
import { Splash } from './Splash';
import { questions } from './quiz/questions';
import { Results } from './Results';
import { LoadingScreen } from './LoadingScreen';

export interface Score {
  Illusionist: number;
  Necromancer: number;
  Enchanter: number;
  Summoner: number;
  Witch: number;
  Chronomancer: number;
  Elementalist: number;
  Sigilist: number;
  Soothsayer: number;
  Thaumaturge: number;
}

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [score, setScore] = useState<Score>({
    Illusionist: 0,
    Necromancer: 0,
    Enchanter: 0,
    Summoner: 0,
    Witch: 0,
    Chronomancer: 0,
    Elementalist: 0,
    Sigilist: 0,
    Soothsayer: 0,
    Thaumaturge: 0,
  });

  const startQuiz = () => setQuizStarted(true);

  const onSubmit = (data: any) => {
    setQuizCompleted(true);
    setLoading(true);
    const newScore: Score = {
      Illusionist: 0,
      Necromancer: 0,
      Enchanter: 0,
      Summoner: 0,
      Witch: 0,
      Chronomancer: 0,
      Elementalist: 0,
      Sigilist: 0,
      Soothsayer: 0,
      Thaumaturge: 0,
    };

    Object.entries(data).forEach(([questionId, selectedValue]) => {
      const question = questions.find((q) => q.id === parseInt(questionId));
      if (!question) return;

      const selectedOption = question.options.find(
        (option) => option.value === selectedValue
      );
      if (!selectedOption) return;

      selectedOption.aligned.forEach((type) => {
        newScore[type as keyof Score] += 3;
      });
      selectedOption.neutral.forEach((type) => {
        newScore[type as keyof Score] += 1;
      });
      selectedOption.opposing.forEach((type) => {
        newScore[type as keyof Score] -= 2;
      });
    });

    setTimeout(() => {
      setScore(newScore);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-8 w-full max-w-screen-md mx-auto">
      <SwitchTransition>
        <CSSTransition
          key={quizStarted ? 'quiz' : 'splash'}
          timeout={500}
          classNames="fade"
        >
          <>
            {!quizStarted && !quizCompleted && (
              <Splash startQuiz={startQuiz} quizStarted={quizStarted} />
            )}
            {quizStarted && !quizCompleted && (
              <Quiz onSubmit={onSubmit} score={score} />
            )}

            {loading && quizCompleted && <LoadingScreen />}
            {quizCompleted && !loading && <Results score={score} />}
          </>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
