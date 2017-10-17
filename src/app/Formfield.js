import React from 'react';
import Data from './pokeapi_testex.js';
import Screen from './Screen.js';

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

    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;

        // This next line will just add it to the <body> tag
        document.getElementById("inner-screen").appendChild(img)
    }

    var inputval = this.state.value.toLowerCase();
    var data_map = Data.forEach(function(i){
      if(inputval === i.name){
        foo.innerHTML = i.element_type + "<br>" + show_image(i.imgUrl, 100, 100);
      }
    })
  }

  render() {
    return (
      <form id="colored" onSubmit={this.handleSubmit}>
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
