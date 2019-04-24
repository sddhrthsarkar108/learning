'use strict';

const element = React.createElement;

class Button extends React.Component {
    state = { liked: false }

    render() {
        if(this.state.liked) {
            return `you liked this ${this.props.name}.`;
        }

        return (
            <button onClick={() => this.setState({liked: true})} >
                Like
            </button>
        );
    }
}

const domContainer = document.querySelector("#container");
ReactDOM.render(element(Button, {name: 'sid'}), domContainer);