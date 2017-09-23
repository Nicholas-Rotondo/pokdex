import React from 'react';
import Screen from './Screen.js';
import NameForm from './Formfield.js';

class App extends React.Component {
  render () {
    return (
      <div id="test">

        <div>
          <Screen/>
        </div>

        <div>
          <NameForm />
        </div>

      </div>
    );
  }
}

export default App;
