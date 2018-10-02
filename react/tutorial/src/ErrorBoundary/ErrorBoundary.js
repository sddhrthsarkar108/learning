import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMsg: ''
    };

    componentDidCatch = (error, info) => {
        this.state({
            hasError: true,
            errorMsg: error
        });
    }

    render() {
        if(this.state.hasError) {
            return <h1>Error in rendering person</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
