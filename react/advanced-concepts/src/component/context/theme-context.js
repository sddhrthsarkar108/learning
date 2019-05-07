import React from 'react';

export const themes = {
    light: {
        foreground: 'green',
        background: 'yellow',
    },
    dark: {
        foreground: 'blue',
        background: 'red',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});