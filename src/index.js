import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import deepPurple from "@material-ui/core/es/colors/deepPurple";
import indigo from "@material-ui/core/es/colors/indigo";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
const muiTheme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: indigo,
    },
});
ReactDOM.render(<MuiThemeProvider theme={muiTheme}><App /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
