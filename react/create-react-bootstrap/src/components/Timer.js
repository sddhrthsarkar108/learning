import React, { Component } from 'react';

class Timer extends Component {
    state =  {
        time: new Date().toLocaleTimeString()
    }

    upadteTime = () =>  {
        this.setState({time: new Date().toLocaleTimeString()});
    }

    componentDidMount() {
        setInterval(this.upadteTime, 1000)
    }

    render() {
        return (
            <h3>current time: {this.state.time}</h3>
        )
    }
}

export default Timer;