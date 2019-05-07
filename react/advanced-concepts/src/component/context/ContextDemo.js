import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    return (
        <>
            <ThemedButton>
                Change Theme
            </ThemedButton>
        </>
    );
}

class ContextDemo extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <>
                <ThemeContext.Provider value={this.state}>
                    <Toolbar />
                </ThemeContext.Provider>
                <section>
                    <ThemedButton />
                </section>
                {/* using consumer we can read from context from at any point in 
                tree hierarchy */}
                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <button
                            onClick={this.toggleTheme}
                            style={{ backgroundColor: theme.background }}
                        >
                            Consumer Theme
                        </button>
                    )}
                </ThemeContext.Consumer>
            </>
        );
    }
}

export default ContextDemo;
