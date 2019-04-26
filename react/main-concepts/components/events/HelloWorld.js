import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {name: ""}

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
      }

    updateName = () => {
        this.setState({name: "sid"})
    }

    handleClick() { window.alert('state: ' + this.state.name); }

    handleClick1() { window.alert('state: ' + this.state.name);  }

    handleClick2 = () => { window.alert('state: ' + this.state.name) }

    handleClick3 = (name, e) => { window.alert('state: ' + this.state.name + ', name: ' + name + ', event: ' + e) }

    handleClick4(name, e) { window.alert('state: ' + this.state.name + ', name: ' + name + ', event: ' + e) }

    handleClick5(name, name1, e) { window.alert('state: ' + this.state.name + ', name: ' + name + ', name1: ' + name1 + ', event: ' + e) }

    handleClick6 =(name, name1, e) => { window.alert('state: ' + this.state.name + ', name: ' + name + ', name1: ' + name1 + ', event: ' + e) }

    render() {
        const name = 'tuk';
        const name1 = 'mithu';

        return (
            <>
                <p onClick={this.updateName}>Hello, {this.state.name}!</p>

                <button onClick={this.handleClick}>Click</button>
                <button onClick={this.handleClick2}>Click3</button>
                <br/>
                {/* The bind() method creates a new function that, when called, 
                has its this keyword set to the provided value, with a given 
                sequence of arguments preceding any provided when the new function is called. 
                with bind e would be automatically forwarded*/}
                <button onClick={this.handleClick1.bind(this)}>Click1</button>
                <button onClick={this.handleClick3.bind(this, name)}>Click2</button>
                <br/>
                <button onClick={() => this.handleClick2()}>Click4</button>
                <button onClick={(e) => this.handleClick2(e)}>Click5</button>
                <button onClick={(e) => this.handleClick3(name, e)}>Click6</button>
                <br/>
                <button onClick={this.handleClick4.bind(this, name)}>Click7</button>
                <button onClick={this.handleClick5.bind(this, name).bind(this, name1)}>Click8</button>
                <button onClick={this.handleClick6.bind(this, name).bind(this, name1)}>Click9</button>
            </>
        )
    }
}

export default HelloWorld;