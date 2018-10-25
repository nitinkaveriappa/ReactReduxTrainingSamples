import React, { Component } from 'react';

export default class JumboTron extends Component {
  render() {
    return (
      <div className="jumbotron container-fluid bgimg-1" id="special-size">
        <div className="row mt-4">
          <div class="col" />
          <div class="col" id="special-opbg">
            <h1 className="display-4">
              <strong>Hi!</strong>
            </h1>
            <p className="lead">
              <strong>
                My name is Nitin Kaveriappa.
                <br />
                Pronounced as (NI-thin kuh-VE-ree-uh-puh)
              </strong>
            </p>
            <audio className="animated fadeInUp" controls>
              <source
                src="https://nitinkaveriappa.com/audio/audio.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    );
  }
}
