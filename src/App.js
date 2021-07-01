import React from "react";

import './App.css';
import MainLayout from "./layouts/MainLayout";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core/styles";
import Theme from "./config/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";


const theme = Theme;

const App = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <MainLayout/>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;
