import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { result, loading } = useContext(Context);

  return (
    <div>
      { loading ? (
        <h1>Loading...</h1>
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
            { result.map((planet) => (
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
