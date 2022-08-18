import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(API);
      const data = await response.json();
      const results = data.results.map((planet) => {
        delete (planet.residents);
        return planet;
      });
      setResult(results);
      setLoading(false);
    };
    fetchPlanets();
  }, []);

  return (
    <Context.Provider value={ { result, loading } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;
