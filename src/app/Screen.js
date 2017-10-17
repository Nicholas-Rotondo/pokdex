import React from 'react';
import NameForm from './Formfield.js';
import Data from './pokeapi_testex.js';
import './css/style.css';

class Screen extends React.Component {
  render() {
    return (
      <div id="screen">
      <NameForm />
        <div id="inner-screen">
        <div id="frame">
          <img id="poo"/>
        </div>
        </div>
      </div>
    )
  }
}

export default Screen;
