import React, { Component } from 'react'
import "../styles/Header.css"

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div id="content">
                            <i className="far fa-clock fa-4x" />
                            <h1>React Clock</h1>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
