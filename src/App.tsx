import { useState } from 'react';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'second'>('home');
  const [pokemonNumber, setPokemonNumber] = useState<number | null>(null);

  const navigateToSecondPage = (number: number) => {
    setPokemonNumber(number);
    setCurrentPage('second');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setPokemonNumber(null);
  };

  return (
    <>
      {currentPage === 'home' && <Home onNavigateToSecond={navigateToSecondPage} />}
      {currentPage === 'second' && <SecondPage onNavigateToHome={navigateToHome} pokemonNumber={pokemonNumber} />}
    </>
  );
}

export default App;
