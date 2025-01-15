import { useState } from 'react';
import { Score } from './App';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { wizardClasses } from './classes/wizards';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Results: React.FC<{ score: Score }> = ({ score }) => {
  const sortedScores = Object.entries(score).sort(([, a], [, b]) => b - a);
  const highestClass = sortedScores[0][0];

  const [chosenClass, setChosenClass] = useState(
    wizardClasses.find((wizardClass) => wizardClass.name === highestClass)
  );

  const changeChosenClass = (wizardClass: string) => () => {
    setChosenClass(wizardClasses.find((w) => w.name === wizardClass));
  };

  const labels = sortedScores.map(([name]) => name);
  const data = sortedScores.map(([, value]) => value);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Wizard Class Scores',
        data,
        backgroundColor: labels.map((wizardClass) =>
          wizardClass === chosenClass?.name ? '#2563EB' : '#3B82F6'
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Your Wizard Score',
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Points',
        },
        beginAtZero: true,
      },
      y: {
        title: {
          display: false,
          text: 'Classes',
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-lagoon-500">
          {chosenClass?.name}
        </h1>
        <p className="text-lg mt-4 text-gray-300">{chosenClass?.description}</p>
        <p className="text-lg mt-4 text-gray-300">
          <b>Other names: </b>
          {chosenClass?.aka}
        </p>
        <p className="text-lg mt-4 text-gray-300">
          <b>Associated Symbols: </b>
          {chosenClass?.symbols}
        </p>
      </div>
      <div className="w-full max-w-3xl">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-200 text-center">
          Explore Other Wizard Classes
        </h2>
        <ul className="grid grid-cols-2 text-center gap-4">
          {Object.keys(score).map((wizardClass) => (
            <li key={wizardClass}>
              <a
                onClick={changeChosenClass(wizardClass)}
                className="text-blue-lagoon-400 cursor-pointer hover:underline"
              >
                {wizardClass}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
