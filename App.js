import React from 'react';
import Screen from './Screen.js';

class App extends React.Component {
  render () {
    return (
      <div id="test">
        <h1>
          Pokedex
        </h1>
        <Screen />
      </div>
    );
  }
}

export default App;
