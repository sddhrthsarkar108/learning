import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI 
        // when a child component throws an error
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        // console.log(`error: ${error}, info: ${info}`);
    }

    render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children; 
      }
}

export default ErrorBoundary;