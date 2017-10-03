import React from 'react';
import Data from './pokeapi_testex.js';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var foo = document.getElementById("inner-screen");
    event.preventDefault();

    var inputval = this.state.value.toLowerCase();
    var data_map = Data.forEach(function(i){
      if(inputval === i.name){
        foo.innerHTML = i.element_type;
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
