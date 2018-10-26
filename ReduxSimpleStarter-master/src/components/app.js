import React, { Component } from 'react';
import NavBar from './navbar';
import JumboTron from './jumbotron';
import AboutMe from './aboutme';
export default class App extends Component {
  render() {
    return (
      <div id="special-size">
        <NavBar />
        <JumboTron />
        <AboutMe />
      </div>
    );
  }
}
