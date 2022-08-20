import React, { useContext } from 'react';
import Context from '../context/Context';
import '../styles/loading/loading.css';

export default function Table() {
  const { result, loading, planetFilter, filterByNumericValues } = useContext(Context);

  return (
    <div>
      { loading ? (
        <div id="loading" />
      ) : (
        <table border="1" cellSpacing="0" cellPadding="5">
          <thead>
            <tr>
              { Object.keys(result[0]).map((key) => (
                <th key={ key }>
                  { key.split('_').join(' ')
                    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()) }
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            { result.filter((item) => item.name.toLowerCase()
              .includes(planetFilter.toLowerCase()))
              .filter((item) => filterByNumericValues
                .every(({ column, comparison, value }) => {
                  if (comparison === 'maior que') return +item[column] > +value;
                  if (comparison === 'menor que') return +item[column] < +value;
                  return +item[column] === +value;
                }))
              .map((planet) => (
                <tr key={ planet.diameter }>
                  { Object.values(planet).map((value) => <td key={ value }>{value}</td>) }
                </tr>
              )) }
          </tbody>
        </table>
      )}
    </div>
  );
}
