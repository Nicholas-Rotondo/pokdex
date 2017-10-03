import React from 'react';
import Screen from './Screen.js';
import NameForm from './Formfield.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './css/style.css';

class App extends React.Component {
    constructor() {
    super();

    this.state = {
      loading: true
    };
    }

    componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 1500);
    }
    render () {
      const { loading } = this.state;

        if(loading) {
          return null; // render null when app is not ready
        }

        return (
        <div id="test">

          <div>
            <Header />
          </div>

          <div>
            <Screen/>
          </div>

          <div>
            <NameForm />
          </div>

          <div>
            <Footer />
          </div>

        </div>
        );
  }
}

export default App;
