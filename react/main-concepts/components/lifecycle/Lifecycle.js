import React, { Component } from 'react';
import Timer from './Timer';

class Lifecycle extends Component {
    state = {
        time: new Date().toLocaleTimeString()
    }

    updateTime = () => {
        this.setState({ time: new Date().toLocaleTimeString() });
    }

    componentDidMount() {
        // React may batch multiple setState() calls into single update for performance
        this.setState({ time: new Date().toLocaleTimeString() });
        this.setState({ time: new Date().toLocaleTimeString() });
        this.setState({ time: new Date().toLocaleTimeString() });
        this.setState({ time: new Date().toLocaleTimeString() });
        console.log("component mounted...");
        setInterval(this.updateTime, 2000);
    }

    componentWillUnmount() {
        console.log("App will unmount...");
        clearInterval(this.timerId);
    }

    // render gets called on state/props update
    render() {
        console.log('App render() called...')
        const name = 'Sid';
        // use {} to include JS in JSX
        return (
            <>
                <p>{`hello ${name}! from react from scratch.`}</p>
                <Timer time={this.state.time} />
            </>
        )
    }
}

export default Lifecycle;