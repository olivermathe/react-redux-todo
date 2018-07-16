import React, { Component } from 'react';
import { connect } from "react-redux";
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <Todos />
    );
  }
}

export default connect(null, {})(App);
