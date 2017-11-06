import React from 'react';

const Data = [
  {
    "name": "pikachu",
    "size": "small",
    "element_type": "electric",
    "imgUrl": "./css/img/pikachu.png"
  },
  {
    "name": "squirtle",
    "size": "small",
    "element_type": "water",
    "imgUrl": "./css/img/squirtle.png"

  },
  {
    "name": "charmander",
    "size": "small",
    "element_type": "fire",
    "imgUrl": "./css/img/charmander.png"
  },
  {
    "name": "bulbasoor",
    "size": "small",
    "element_type": "earth",
    "imgUrl": "./css/img/bulbasoor.png"
  }
]

class ImgRender extends React.Component {
  render() {
    const pokemon = Data.find(function(p){
      if(this.state.value === p) {
        return pokemon ? <img src={pokemon.imgUrl}/> : <div>Pokemon not found</div>;
      }
    })
  }
}

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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
