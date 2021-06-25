import React from "react";
import './App.css';
import MainLayout from "./layouts/MainLayout";
import {BrowserRouter, Switch} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Theme from "./config/Theme";

const theme = Theme;

const App = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <MainLayout/>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;
