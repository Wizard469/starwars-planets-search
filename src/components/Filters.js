import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

export default function Filters() {
  const [newFilters, setNewFilters] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
  );

  const { planetFilter, setPlanetFilter,
    filterByNumericValues, setFilterByNumericValues } = useContext(Context);

  const columnList = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const columnFilter = columnList
    .filter((column) => !filterByNumericValues.find((item) => column === item.column));

  const compFilter = ['maior que', 'menor que', 'igual a'];

  const { column, comparison, value } = newFilters;

  useEffect(() => {
    setNewFilters((prevState) => ({ ...prevState, column: columnFilter[0] }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  const emptyInput = () => {
    if (newFilters.value === '0') return setNewFilters({ ...newFilters, value: '' });
  };

  return (
    <form>
      <div>
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
      </div>
      { columnFilter.length > 0 && (
        <select
          name="column-filter"
          id="column-filter"
          value={ column }
          data-testid="column-filter"
          onChange={ (e) => setNewFilters({ ...newFilters, column: e.target.value }) }
        >
          { columnFilter.map((el) => <option key={ el } value={ el }>{ el }</option>)}
        </select>
      )}
      <select
        name="comparison-filter"
        id="comparison-filter"
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ (e) => setNewFilters({ ...newFilters, comparison: e.target.value }) }
      >
        { compFilter.map((el) => <option key={ el } value={ el }>{ el }</option>) }
      </select>
      <label htmlFor="value-filter">
        <input
          type="number"
          name="value-filter"
          id="value-filter"
          placeholder="Type a value"
          value={ value }
          data-testid="value-filter"
          min="0"
          onClick={ emptyInput }
          onChange={ (e) => setNewFilters({ ...newFilters, value: e.target.value }) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        disabled={ columnFilter.length === 0 }
        onClick={
          () => setFilterByNumericValues([...filterByNumericValues, newFilters])
        }
      >
        FILTRAR
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setFilterByNumericValues([]) }
      >
        REMOVER FILTROS
      </button>
    </form>
  );
}
