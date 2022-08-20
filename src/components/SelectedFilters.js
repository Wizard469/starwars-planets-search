import React, { useContext } from 'react';
import Context from '../context/Context';
import redTrashBin from '../icons/redTrashBin.png';
import '../styles/selectedFilters/SelectedFilters.css';

export default function SelectedFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(Context);

  return (
    <>
      { filterByNumericValues.length > 0 && (
        <div className="filtered-table">
          {
            filterByNumericValues
              .map(({ column, comparison, value }) => (
                <div key={ column }>
                  <div>{ column }</div>
                  <div>{ comparison }</div>
                  <div>{ value }</div>
                  <div data-testid="filter">
                    <button
                      type="button"
                      onClick={ () => setFilterByNumericValues(filterByNumericValues
                        .filter((element) => element.column !== column)) }
                    >
                      <img src={ redTrashBin } alt="Trash bin" />
                    </button>
                  </div>
                </div>
              ))
          }
        </div>
      )}
      {}
    </>
  );
}
