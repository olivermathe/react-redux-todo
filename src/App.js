import React, { Component } from 'react';
import { connect } from "react-redux";

import { SideBar, Todo } from "./components";

class App extends Component {

  render() {
    return (
      <div>
        <SideBar />
        <Todo />
      </div>
    );
  }
}

export default connect(null, {})(App);
