import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <h3>About Me</h3>
        Full Name:<span className="font-weight-bold font-italic"> Udiyanda Muthanna, Nitin Kaveriappa</span>
        <br />
        View/Download Resume:
        <a href="https://drive.google.com/open?id=1fs0gmz82ZsRl7smVacVvmF9ZMId3Aj-v"> My Resume
        </a>
        <br />
        <span className="font-weight-bold">I am what I am because of my Father!</span><br />
      </div>
    );
  }
}
