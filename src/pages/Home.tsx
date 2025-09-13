// Home page for VibeWorld
import React, { useState } from "react";

interface HomeProps {
  onNavigateToSecond: (number: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToSecond }) => {
  const [pokemonNumber, setPokemonNumber] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  const handleSubmit = () => {
    const number = parseInt(pokemonNumber);
    
    if (isNaN(number) || number < 1 || number > 151) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // Hide error after 3 seconds
      return;
    }
    
    onNavigateToSecond(number);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonNumber(e.target.value);
    if (showError) {
      setShowError(false);
    }
  };

  return (
    <main className="home-page">
      <div className="input-container">
        <label htmlFor="pokemon-input" className="input-label">
          enter pokemon number
        </label>
        <input
          id="pokemon-input"
          type="text"
          value={pokemonNumber}
          onChange={handleInputChange}
          className="pokemon-input"
          placeholder="1-151"
        />
        {showError && (
          <div className="error-message">
            must enter a number between 1-151
          </div>
        )}
        <button className="next-page-button" onClick={handleSubmit}>
          next page
        </button>
      </div>
    </main>
  );
};

export default Home;
