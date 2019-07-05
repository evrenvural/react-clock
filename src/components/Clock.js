import React, { Component } from 'react';
import "../styles/Clock.css";

export default class Clock extends Component {
    render() {
        return (
            <div id = "clock">
                {/* <!-- Rounded switch --> */}
                <div id = "panel">
                    <label className="switch" id="switch-date">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <label className="switch-text" htmlFor="switch-date">
                        <i className="far fa-calendar-alt fa-3x"></i>
                    </label>
                </div>
            
                <div id="context">
                    <div id="time">01:13:29</div>
                    <div id="date">Sat 05 July 2019</div>
                </div>
            </div>

        )
    }
}
