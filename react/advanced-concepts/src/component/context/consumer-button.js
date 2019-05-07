import React from 'react';
import { ThemeContext } from './theme-context';

class ConsumerButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme, toggleTheme) => (
                    <button
                        onClick={toggleTheme}
                        style={{ backgroundColor: theme.background }}
                    />
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default ConsumerButton;
