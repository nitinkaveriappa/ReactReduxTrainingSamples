import React, { Component } from 'react';

export default class JumboTron extends Component {
    render() {
        return (
            <div className="jumbotron" id="special-size">
                <h1 className="display-4">Hi!</h1>
                <p className="lead">My name is Nitin Kaveriappa.
                <br />Pronounced as NI-thin kuh-VE-ree-uh-puh</p>
                <audio className="animated fadeInUp" controls><source src="audio/audio.mp3" type="audio/mpeg" />Your browser does not support the audio element.</audio>
            </div>
        );
    }
}