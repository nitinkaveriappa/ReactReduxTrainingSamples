import React, { Component } from 'react';
import NavItem from './navitem';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <nav className="shadow navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            NK!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <NavItem title="About" />
              <NavItem title="Education" />
              <NavItem title="Work-Experience" />
              <NavItem title="Contact" />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
