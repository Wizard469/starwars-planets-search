import React from 'react';
import './App.css';
import Provider from './context/Provider';
import StarWarsPlanets from './pages/StarWarsPlanets';

function App() {
  return (
    <div className="App">
      <Provider>
        <StarWarsPlanets />
      </Provider>
    </div>
  );
}

export default App;
