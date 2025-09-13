import React, { useState, useEffect } from "react";

interface SecondPageProps {
  onNavigateToHome: () => void;
  pokemonNumber: number | null;
}

interface PokemonData {
  name: string;
}

const SecondPage: React.FC<SecondPageProps> = ({ onNavigateToHome, pokemonNumber }) => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!pokemonNumber) return;

      setLoading(true);
      setError("");

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }

        const data: PokemonData = await response.json();
        setPokemonName(data.name);
      } catch (err) {
        setError('Failed to load Pokemon data');
        console.error('Error fetching Pokemon:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonNumber]);

  return (
    <main className="second-page">
      <button className="go-back-button" onClick={onNavigateToHome}>
        go back
      </button>
      <div className="pokemon-display">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && pokemonName && (
          <div className="pokemon-name-display">
            {pokemonName}
          </div>
        )}
      </div>
    </main>
  );
};

export default SecondPage;
