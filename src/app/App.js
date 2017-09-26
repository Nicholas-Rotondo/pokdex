import React from 'react';
import Screen from './Screen.js';
import NameForm from './Formfield.js';

class App extends React.Component {
    constructor() {
    super();

    this.state = {
      loading: true
    };
    }

    componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 5500);
    }
    render () {
      const { loading } = this.state;

        if(loading) {
          return null; // render null when app is not ready
        }

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
