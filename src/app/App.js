import React from 'react';
import Screen from './Screen';
import NameForm from './ImgComponent';
import Header from './Header';
import Footer from './Footer';
import './css/style.css';

class App extends React.Component {
    // constructor() {
    // super();
    //
    // this.state = {
    //   loading: true
    // };
    // }
    //
    // componentDidMount() {
    //   setTimeout(() => this.setState({ loading: false }), 1500);
    // }
    render () {


        return (
        <div id="test">

          <div>
            <Header />
          </div>

          <div>
            <NameForm />
          </div>

          <div>
            <Screen/>
          </div>

          <div>
            <Footer />
          </div>

        </div>
        );
  }
}

export default App;
