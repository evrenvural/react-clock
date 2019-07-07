import React, { Component } from 'react';
import "../styles/Clock.css";

export default class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {time : new Date()};
        this.days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"];
    }

    hideDate(){
        if(document.getElementById("checkDate").checked === true){
            document.getElementById("date").style.display = "block";
            document.getElementById("time").style.marginTop = "60px";
        }
        else{
            document.getElementById("date").style.display = "none";
            document.getElementById("time").style.marginTop = "72px";
        }
    }

    tick = () => {
        this.setState({
            time : new Date()
        });
    }

    componentDidMount(){
        this.tickInterval = setInterval(() => {
            this.tick();
        }, 1000);

        // sets init of checkbox value
        document.getElementById("checkDate").checked = true;
    }

    componentWillUnmount(){
        clearInterval(this.tickInterval);
    }

    render() {
        return (
            <div id = "clock">
                {/* Rounded switch */}
                <div id = "panel">
                    <label className="switch" id="switch-date">
                        <input type="checkbox" id="checkDate" value = "true" onChange={this.hideDate}/>
                        <span className="slider round"></span>
                    </label>
                    <label className="switch-text" htmlFor="switch-date">
                        <i className="far fa-calendar-alt fa-3x"></i>
                    </label>
                </div>
            
                <div id="context">
                    <div id="time">
                        {this.state.time.getHours() < 10 ? "0" : ""}{this.state.time.getHours()}:
                        {this.state.time.getMinutes() < 10 ? "0" : ""}{this.state.time.getMinutes()}:
                        {this.state.time.getSeconds() < 10 ? "0" : ""}{this.state.time.getSeconds()}
                    </div>
                    <div id="date">
                        {this.days[this.state.time.getDay()] + " "}
                        {this.state.time.getDate() < 10 ? "0" : ""}{this.state.time.getDate()} 
                        {" " + this.months[this.state.time.getMonth()]}
                        {" " + this.state.time.getFullYear()}
                    </div>
                </div>
            </div>

        )
    }
}
