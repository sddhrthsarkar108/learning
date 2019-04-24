'use strict';

/*React.createElement(
  type,
  [props],
  [...children]
)*/
const element = React.createElement;

class Button extends React.Component {
    state = { liked: false }

    render() {
        if(this.state.liked) {
            return `you liked this ${this.props.name}.`;
        }

        return element(
            'button',
            {onClick: () => this.setState({liked: true})},
            'like'
        )
    }
}

const domContainer = document.querySelector("#container");
// ReactDOM.render(element, container[, callback])
ReactDOM.render(element(Button, {name: 'sid'}), domContainer);

document.querySelectorAll(".container")
        .forEach(domContainer => {
            /* data-*
                    The data-* attributes gives us the ability to embed custom data attributes on all HTML elements. 
                    The data-* attributes consist of two parts:
                        1. The attribute name should not contain any uppercase letters, 
                        and must be at least one character long after the prefix "data-"
                        2. The attribute value can be any string 
            */
            const name = domContainer.dataset.name;
            ReactDOM.render(
                element(Button, {name}),
                domContainer
            )
        });