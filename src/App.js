import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card.jsx';
import Header from './Header.jsx';

export default function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      setError('Error fetching data: ' + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!pokemonData && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  let randomIndices = [];
  const maxIndex = Math.min(3, pokemonData.results.length);
  for(let i=0;i<maxIndex;++i){
    randomIndices.push(Math.floor(Math.random() * pokemonData.results.length));
  }
  let randomPokemon = randomIndices.map((index)=>pokemonData.results[index]);
  console.log(pokemonData);
  return (
    <>
      
      <div className='d-flex p-3 pokBox'>
        {
          randomPokemon.map((pokemon)=>(
            <Card 
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2)[0]}.png`} 
              name={pokemon.name}
            />
          ))
        }
      </div>
    </>
  );
}