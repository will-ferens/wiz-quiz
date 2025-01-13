export const LoadingScreen = () => {
  const phrases = [
    'Pondering...',
    'Consulting the stars...',
    'Deciphering runes...',
    'Peering into the void...',
    'Channeling arcane energies...',
  ];

  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  return (
    <div className="loading-screen flex flex-col items-center justify-center">
      <div className="spinner"></div>
      <p className="loading-text">{randomPhrase}</p>
    </div>
  );
};
