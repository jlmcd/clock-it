import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id='routes'>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
