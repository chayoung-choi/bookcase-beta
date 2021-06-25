import React from "react";
import './App.css';
import {BrowserRouter, Switch} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <MainLayout/>
            </Switch>
        </BrowserRouter>
    );
}
export default App;
