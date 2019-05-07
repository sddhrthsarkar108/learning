import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        const context = this.context;
        console.log(context);

        return (
            <button
                onClick={context.toggleTheme}
                style={{ backgroundColor: context.theme.background }}
            >{this.props.children}</button>
        );
    }
}

// It would look for closest context provider
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
