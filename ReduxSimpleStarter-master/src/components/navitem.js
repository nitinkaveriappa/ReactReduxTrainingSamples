import React, { Component } from 'react';

export default (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">{props.title}</a>
        </li>
    );
}