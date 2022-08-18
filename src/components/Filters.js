import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Filters() {
  const { planetFilter, setPlanetFilter } = useContext(Context);

  return (
    <label htmlFor="planet-filter">
      <input
        type="text"
        name="planet-filter"
        id="planet-filter"
        placeholder="Type a planet name"
        value={ planetFilter }
        data-testid="name-filter"
        onChange={ (e) => setPlanetFilter(e.target.value) }
      />
    </label>
  );
}
