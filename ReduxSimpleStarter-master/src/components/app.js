import React, { Component } from 'react';
import NavBar from './navbar';
import JumboTron from './jumbotron';
export default class App extends Component {
  render() {
    return (
      <div id="special-size">
        <NavBar />
        <JumboTron />
      </div>
    );
  }
}
